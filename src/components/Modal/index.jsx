function index({ isVisible, onClose, children }) {
  if (!isVisible) return;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg relative max-w-md w-full">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
        >
          ✖️ Close
        </button>

        {children}
      </div>
    </div>
  );
}

export default index;
