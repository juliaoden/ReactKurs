import {createContext, useState} from "react";
import Post from "../models/post";

type PostConextObj = {
  items: Post[];
  addPost: (author: string, text: string) => void;
};

export const PostContext = createContext<PostConextObj>({
  items: [],
  addPost: () => {},
});

const PostContextProvider = ({children}: {children: React.ReactNode}) => {
  const [posts, setPosts] = useState<Post[]>([]);

  function addPostHandler(author: string, text: string) {
    const newPost = new Post(author, text);

    setPosts((prevPost) => {
      return [...prevPost, newPost];
    });
  }

  const contextValue: PostConextObj = {
    items: posts,
    addPost: addPostHandler,
  };

  return (
    <PostContext.Provider value={contextValue}>{children}</PostContext.Provider>
  );
};

export default PostContextProvider;
