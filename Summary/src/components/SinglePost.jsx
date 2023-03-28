import styles from "./SinglePost.module.css";

function SinglePost(props) {
  return (
    <li className={styles.post}>
      <p className={styles.author}>{props.author}</p>
      <p className={styles.text}>{props.text}</p>
    </li>
  );
}

export default SinglePost;
