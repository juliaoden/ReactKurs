import {useState} from "react";
import SinglePost from "./SinglePost";
import styles from "./PostList.module.css";

const DUMMY_POSTS = [
  {
    id: "p1",
    author: "Julia",
    text: "Some unnecessary tweet",
  },
  {
    id: "p2",
    author: "Ken",
    text: "Me looking for who asked",
  },
];

function PostList() {
  const [posts, setPosts] = useState(DUMMY_POSTS);

  return (
    <ul className={styles.posts}>
      {posts.map((post) => (
        <SinglePost key={post.id} author={post.author} text={post.text} />
      ))}
    </ul>
  );
}

export default PostList;
