import {FormEvent, useRef, useContext} from "react";
import ModalContextProvider, {ModalContext} from "../store/modal-context";

import {PostContext} from "../store/post-context";
import "./NewPost.css";

const NewPost = () => {
  const authorRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);
  const postCtx = useContext(PostContext);
  const modalCtx = useContext(ModalContext);

  function closeModalHandler() {
    modalCtx.closeModal();
  }

  function submitHandler(e: FormEvent) {
    e.preventDefault();
    const author = authorRef.current!.value;
    const text = textRef.current!.value;

    if (!author && !text) return;

    postCtx.addPost(author, text);
    modalCtx.toggleModal();
  }
  return (
    <ModalContextProvider>
      <form className="form" onSubmit={submitHandler}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} ref={textRef} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" required ref={authorRef} />
        </p>
        <div className="actions">
          <button type="button" onClick={closeModalHandler}>
            Close
          </button>
          <button>Submit</button>
        </div>
      </form>
    </ModalContextProvider>
  );
};

export default NewPost;
