import {FC, useContext} from "react";
import SinglePost from "./SinglePost";
import "./PostList.css";
import ModalContextProvider, {ModalContext} from "../store/modal-context";

import {PostContext} from "../store/post-context";
import Modal from "./Modal";
import NewPost from "./NewPost";

const PostList: FC = () => {
  const postCtx = useContext(PostContext);
  const modalCtx = useContext(ModalContext);

  return (
    <>
      <ModalContextProvider>
        {modalCtx.showModal && (
          <Modal>
            <NewPost />
          </Modal>
        )}
      </ModalContextProvider>
      <ul className="posts">
        {postCtx.items.map((post) => (
          <SinglePost key={post.id} author={post.author} text={post.text} />
        ))}
      </ul>
    </>
  );
};

export default PostList;
