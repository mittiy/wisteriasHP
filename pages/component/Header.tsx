import { Container, Group, Button } from '@mantine/core';
import Link from 'next/link';

interface HeaderProps {
  // ここに必要なプロパティを追加します
}

export function MyAppHeader({}: HeaderProps) {
  return (
    <div style={{ padding: '1rem 0', backgroundColor: '#f5f5f5' }}>
      <Container>
        <Group >
          <div>WISTERIAS</div>
          <Group>
            <Link href="/" passHref>
              <Button component="a" variant="default">ホーム</Button>
            </Link>
            <Link href="/blog" passHref>
              <Button component="a" variant="default">ブログ</Button>
            </Link>
            <Link href="/about" passHref>
              <Button component="a" variant="default">会社について</Button>
            </Link>
            <Link href="/contact" passHref>
              <Button component="a" variant="default">お問い合わせ</Button>
            </Link>
          </Group>
        </Group>
      </Container>
    </div>
  );
}