import { gql, useMutation } from '@apollo/client';
import { useState } from 'react';
import { toast } from 'react-toastify';

import Modal from '../Modals/Modal';
import {
  RemoveWineyard,
  RemoveWineyardVariables,
} from './__generated__/RemoveWineyard';
import Button, { Intent } from './Button';

const REMOVE_WINEYARD = gql`
  mutation RemoveWineyard($id: String!) {
    removeWineyard(id: $id) {
      id
    }
  }
`;

interface RemoveWineyardButtonProps {
  id: string;
}

function RemoveWineyardButton(props: RemoveWineyardButtonProps) {
  const { id } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [removeWineyard] = useMutation<RemoveWineyard, RemoveWineyardVariables>(
    REMOVE_WINEYARD,
    {
      variables: { id },
      refetchQueries: ['GetWineyards'],
      onCompleted() {
        toast.success('Wineyard has been deleted');
      },
    },
  );

  return (
    <div>
      <Button
        text="Delete"
        intent={Intent.DANGER}
        onClick={() => setIsOpen(true)}
      />
      <Modal
        title="Are you sure to delete this wineyard?"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div className="mt-4 flex justify-between">
          <Button text="No" onClick={() => setIsOpen(false)} />
          <Button text="Yes" intent={Intent.DANGER} onClick={removeWineyard} />
        </div>
      </Modal>
    </div>
  );
}

export default RemoveWineyardButton;
