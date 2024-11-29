import { useModal } from "../../Contexts/ModalContext";

function Modal({ isVisible, onClose, children }) {
  const { closeModal } = useModal();
  if (!isVisible) return;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative h-[90vh] w-[95vw] overflow-y-auto">
        <button
          onClick={closeModal}
          className="absolute right-8 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-green-dark text-10xl text-white hover:bg-green-900 hover:text-red-50"
        >
          &times;
        </button>

        {children}
      </div>
    </div>
  );
}

export default Modal;
