import { gql, useMutation } from '@apollo/client';
import { useState } from 'react';
import * as yup from 'yup';

import WineCard from '../Cards/WineCard';
import Form from '../Forms/Form';
import { Input } from '../Inputs/Input';
import Modal from '../Modals/Modal';
import WineyardsSelect from '../Selects/WineyardsSelect';
import { createWine, createWineVariables } from './__generated__/createWine';
import Button, { Intent } from './Button';
import Span, { Size } from '../Span';
import { TextArea } from '../Inputs/TextAreaInput';

const CREATE_WINE = gql`
  mutation createWine($createWineInput: CreateWineInput!) {
    createWine(createWineInput: $createWineInput) {
      id
      ...WineCardFragment
    }
  }
  ${WineCard.fragment}
`;

const schema = yup.object().shape({
  description: yup.string().required(),
  grapeIds: yup.array().of(yup.string()).required(),
  millenisme: yup.number().required(),
  name: yup.string().required(),
  wineyardId: yup.string().required(),
});

function CreateWineButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [createWine, { loading }] = useMutation<
    createWine,
    createWineVariables
  >(CREATE_WINE);

  return (
    <>
      <Button text="Add a new wine" onClick={() => setIsOpen(true)} />
      <Modal
        title="Add a new wine"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Form
          schema={schema}
          onSubmit={
            (value) => console.log(value)
            // createWine({
            //   variables: {
            //     createWineInput: {
            //       description: value.descritpion,
            //     },
            //   },
            // })
          }
          className="flex flex-col space-y-2"
        >
          <div className="flex space-x-2">
            <div>
              <Span text="Name:" active size={Size.SMALL} />
              <Input type="text" name="name" />
            </div>
            <div>
              <Span text="Millenisme:" active size={Size.SMALL} />
              <Input type="number" name="millenisme" />
            </div>
          </div>
          <div>
            <Span text="Description:" active size={Size.SMALL} />
            <TextArea name="description" />
          </div>
          <div>
            <Span text="Select a domaine:" active size={Size.SMALL} />
            <WineyardsSelect name="wineyardId" />
          </div>
          <div>
            <div className="mt-2 flex justify-between">
              <Button
                text="Cancel"
                intent={Intent.DANGER}
                onClick={() => setIsOpen(false)}
              />
              <Button loading={loading} text="Validate" type="submit" />
            </div>
          </div>
        </Form>
      </Modal>
    </>
  );
}

export default CreateWineButton;
