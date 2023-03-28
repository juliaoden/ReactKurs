import {FC} from "react";
import "./SinglePost.css";

const SinglePost: FC<{author: string; text: string}> = (props) => {
  return (
    <li className="post">
      <p className="author">{props.author}</p>
      <p className="text">{props.text}</p>
    </li>
  );
};

export default SinglePost;
