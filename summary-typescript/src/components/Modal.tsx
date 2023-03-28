import {useContext} from "react";
import {ModalContext} from "../store/modal-context";
import "./Modal.css";
const Modal = ({children}: {children: React.ReactNode}) => {
  const modalCtx = useContext(ModalContext);

  function toggleModalHandler() {
    modalCtx.toggleModal();
  }
  return (
    <>
      <div className="backdrop" onClick={toggleModalHandler}></div>
      <dialog open className="modal">
        {children}
      </dialog>
    </>
  );
};

export default Modal;
