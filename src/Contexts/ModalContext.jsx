import { createContext, useContext, useState } from "react";

const ModalContext = createContext();
export function ModalProvider({ children }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (element) => {
    setModalContent(element);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setModalContent(null);
  };

  return (
    <ModalContext.Provider
      value={{ isModalVisible, modalContent, openModal, closeModal }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const content = useContext(ModalContext);
  if (content === undefined)
    throw new Error("ModalContext was used outside of ModalContextProvider");

  return content;
}
