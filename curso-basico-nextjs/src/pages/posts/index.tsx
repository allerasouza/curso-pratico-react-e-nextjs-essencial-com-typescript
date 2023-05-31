import SEO from '@/src/components/SEO';
import Link from 'next/link';
import { GetStaticProps } from 'next';

export interface Post {
  id: string;
  title: string;
}

interface PostsProps {
  posts: Post[];
}

export default function Posts() {
  return (
    <>
      <SEO title="Posts" />
      <main>
        <div>
          <Link href="#">
            <a>
              <time>30 de maio de 2023</time>
              <strong>Titulo</strong>
              <p>Paragrafo</p>
            </a>
          </Link>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 60 * 60 * 12, // 12 horas
  };
};
