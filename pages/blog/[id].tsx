import { GetStaticProps, GetStaticPaths } from 'next';
import { client } from '../libs/client';
import Link from 'next/link';

// ブログ記事の型定義
interface Blog {
  id: string;
  title: string;
  eyecatch: { url: string };
  content: string;
}

// 記事ページのプロップス
interface BlogProps {
  blog: Blog;
}

// ブログ記事詳細ページコンポーネント
const BlogPage = ({ blog }: BlogProps) => {
  return (
    <div>
      <h1>{blog.title}</h1>
      <img src={blog.eyecatch.url} alt={blog.title} />
      <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      <Link href="/">ホームに戻る</Link>
    </div>
  );
};

export default BlogPage;

// 各ブログ記事のデータを取得
export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;
  const data = await client.get({ endpoint: "blog", contentId: id as string });

  return {
    props: {
      blog: data,
    },
  };
};

// 生成する静的パスを定義
export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog", queries: { fields: 'id' } });
  const paths = data.contents.map((content: { id: string }) => ({
    params: { id: content.id },
  }));

  return {
    paths,
    fallback: false,
  };
};
