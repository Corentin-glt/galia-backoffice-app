import { gql, useMutation } from '@apollo/client';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import Modal from '../Modals/Modal';
import { RemoveWine, RemoveWineVariables } from './__generated__/RemoveWine';
import Button, { Intent } from './Button';

const REMOVE_WINE = gql`
  mutation RemoveWine($id: String!) {
    removeWine(id: $id) {
      id
    }
  }
`;

interface RemoveWineButtonProps {
  id: string;
}

function RemoveWineButton(props: RemoveWineButtonProps) {
  const { id } = props;
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [removeWine] = useMutation<RemoveWine, RemoveWineVariables>(
    REMOVE_WINE,
    {
      variables: { id },
      refetchQueries: ['GetWines'],
      onCompleted() {
        toast.success('Wine has been deleted');
        return navigate('/wines', { replace: true });
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
        title="Are you sure to delete this wine?"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div className="mt-4 flex justify-between">
          <Button text="No" onClick={() => setIsOpen(false)} />
          <Button text="Yes" intent={Intent.DANGER} onClick={removeWine} />
        </div>
      </Modal>
    </div>
  );
}

export default RemoveWineButton;
