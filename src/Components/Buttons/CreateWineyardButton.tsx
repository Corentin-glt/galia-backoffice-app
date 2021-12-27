import { gql, useMutation } from '@apollo/client';
import { useState } from 'react';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import WineyardCard from '../Cards/WineyardCard';
import Form from '../Forms/Form';
import { Input } from '../Inputs/Input';
import Modal from '../Modals/Modal';
import Span, { Size } from '../Span';
import {
  createWineyard,
  createWineyardVariables,
} from './__generated__/createWineyard';
import Button, { Intent } from './Button';

const CREATE_WINE = gql`
  mutation createWineyard($createWineyardInput: CreateWineyardInput!) {
    createWineyard(createWineyardInput: $createWineyardInput) {
      id
      ...WineyardCardFragment
    }
  }
  ${WineyardCard.fragment}
`;

const schema = yup.object().shape({
  name: yup.string().required(),
});

function CreateWineyardButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [createWineyard, { loading }] = useMutation<
    createWineyard,
    createWineyardVariables
  >(CREATE_WINE, {
    refetchQueries: ['GetWineyards'],
    onCompleted() {
      toast.success('New wineyard created with success');
    },
  });

  return (
    <>
      <Button text="Add a new wineyard" onClick={() => setIsOpen(true)} />
      <Modal
        title="Add a new wine"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Form
          defaultValues={{
            name: '',
          }}
          schema={schema}
          onSubmit={async (value) => {
            await createWineyard({
              variables: {
                createWineyardInput: {
                  name: value.name,
                },
              },
            });
            return setIsOpen(false);
          }}
          className="flex flex-col space-y-2"
        >
          <div>
            <Span text="Name:" active size={Size.SMALL} />
            <Input type="text" name="name" required />
          </div>

          <div className="mt-2 flex justify-between">
            <Button
              text="Cancel"
              intent={Intent.DANGER}
              onClick={() => setIsOpen(false)}
            />
            <Button loading={loading} text="Validate" type="submit" />
          </div>
        </Form>
      </Modal>
    </>
  );
}

export default CreateWineyardButton;
