import {useContext} from "react";
import {MdPostAdd, MdMessage} from "react-icons/md";
import {ModalContext} from "../store/modal-context";

import "./MainHeader.css";

const MainHeader = () => {
  const modalCtx = useContext(ModalContext);

  function openModalHandler() {
    modalCtx.toggleModal();
  }
  return (
    <header className="header">
      <h1 className="logo">
        <MdMessage />
        React Poster
      </h1>
      <p>
        <button className="button" onClick={openModalHandler}>
          <MdPostAdd size={18} />
          New Post
        </button>
      </p>
    </header>
  );
};

export default MainHeader;
