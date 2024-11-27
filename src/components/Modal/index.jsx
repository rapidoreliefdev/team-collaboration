import { useModal } from "../../Contexts/ModalContext";

function Modal({ isVisible, onClose, children }) {
  const { closeModal } = useModal();
  if (!isVisible) return;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative h-[72vh] w-[95vw] overflow-y-auto">
        <button
          onClick={closeModal}
          className="absolute right-2 top-2 rounded-full text-gray-500 hover:text-red-500"
        >
          ✖️
        </button>

        {children}
      </div>
    </div>
  );
}

export default Modal;
