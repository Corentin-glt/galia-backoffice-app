import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

import Button, { Intent } from '../Buttons/Button';

interface ModalProps {
  onCancel?: () => void;
  onClose: () => void;
  onValidate?: () => void;
  isOpen: boolean;
  title: string;
  children: JSX.Element;
}

function Modal(props: ModalProps) {
  const { onCancel, onValidate, onClose, title, isOpen, children } = props;
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={onClose}
        >
          <div className="min-h-screen px-4 text-center">
            <Dialog.Overlay className="fixed inset-0 bg-blueGray-800 opacity-30" />

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-blueGray-600"
                >
                  {title}
                </Dialog.Title>

                <div className="mt-2">{children}</div>

                <div className="mt-4">
                  <Button
                    text="Cancel"
                    intent={Intent.DANGER}
                    onClick={() => {
                      if (onCancel) onCancel();
                      return onClose();
                    }}
                  />

                  <Button
                    text="Validate"
                    onClick={() => {
                      if (onValidate) onValidate();
                      return onClose();
                    }}
                  />
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default Modal;
