import SEO from '@/src/components/SEO';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import styles from './posts.module.scss';

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
      <main className={styles.container}>
        <div className={styles.posts}>
          <Link href="#">
            <time>30 de maio de 2023</time>
            <strong>Titulo</strong>
            <p>Paragrafo</p>
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
