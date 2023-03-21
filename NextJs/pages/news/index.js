import Link from "next/link";

function NewsPage() {
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs"> NextJS Is A Great Framework</Link>
        </li>
        <li>
          <Link href="/news/nimma">I mog nimma</Link>
        </li>
      </ul>
    </>
  );
}

export default NewsPage;
