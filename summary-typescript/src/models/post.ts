class Post {
  id: string;
  author: string;
  text: string;

  constructor(authorName: string, tweetText: string) {
    this.id = new Date().toISOString();
    this.author = authorName;
    this.text = tweetText;
  }
}

export default Post;
