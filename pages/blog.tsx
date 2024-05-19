import Head from 'next/head';
import { client } from './libs/client';
import Link from 'next/link';
import { Container, Card, Image, Text, Title, SimpleGrid } from '@mantine/core';
import { MyAppHeader } from './component/Header';


interface Blog {
  id: string;
  title: string;
  eyecatch: { url: string };
  content: string;
}

interface HomeProps {
  blog: Blog[];
}

export default function Home({ blog }: HomeProps) {
  return (
    <div>
      <div>
        <MyAppHeader />
      </div>
      <Container size="lg">
        <SimpleGrid cols={3} spacing="lg">
          {blog.map((blogItem) => (
            <Card key={blogItem.id} shadow="sm">
              <Card.Section>
                <Link href={`/blog/${blogItem.id}`} passHref>
                  <div>
                    <Image src={blogItem.eyecatch.url} alt={blogItem.title} height={160} fit="cover" />
                  </div>
                </Link>
              </Card.Section>
              <Title order={3}>
                <Link href={`/blog/${blogItem.id}`} passHref>
                  <div style={{ textDecoration: 'none' }}>{blogItem.title}</div>
                </Link>
              </Title>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </div>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: 'blog',
    queries: {
      fields: 'id,title,eyecatch,content',
      limit: 6,
      orders: '-createdAt'
    }
  });

  return {
    props: {
      blog: data.contents,
    },
  };
};
