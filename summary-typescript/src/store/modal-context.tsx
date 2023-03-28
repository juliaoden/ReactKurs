import {createContext, useState} from "react";

export const ModalContext = createContext({
  showModal: false,
  toggleModal: () => {},
  closeModal: () => {},
});

const ModalContextProvider = ({children}: {children: React.ReactNode}) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModalHandler = () => {
    setShowModal((prevState) => !prevState);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const contextValue = {
    showModal: showModal,
    toggleModal: toggleModalHandler,
    closeModal: closeModalHandler,
  };

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
