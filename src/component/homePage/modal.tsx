import React from 'react';

interface ModalProps {
  showModal: boolean;
  fileType: string | null;
  handleAction: (action: string) => void;
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ showModal, fileType, handleAction, closeModal }) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-80 text-center">
        <h2 className="text-2xl font-bold mb-4">What would you like to do?</h2>
        <div className="flex justify-around mb-4">
          <button
            onClick={() => handleAction("view")}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            View
          </button>
          <button
            onClick={() => handleAction("download")}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Download
          </button>
        </div>
        <button
          onClick={closeModal}
          className="text-red-500 mt-4"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
