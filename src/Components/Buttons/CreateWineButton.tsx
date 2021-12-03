import { useState } from 'react';

import Modal from '../Modals/Modal';
import Button from './Button';

function CreateWineButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button text="Add a new wine" onClick={() => setIsOpen(true)} />
      <Modal
        title="Add a new wine"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      ></Modal>
    </>
  );
}

export default CreateWineButton;
