import SEO from '@/src/components/SEO';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import styles from './posts.module.scss';
import { getPrismicClient } from '../../services/prismic';
import * as prismicH from '@prismicio/helpers';
import { RTParagraphNode } from '@prismicio/types';

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  updateAt: string;
}

interface PostsProps {
  posts: Post[];
}

export default function Posts({ posts }: PostsProps) {
  return (
    <>
      <SEO title="Posts" />
      <main className={styles.container}>
        <div className={styles.posts}>
          {posts.map(post => (
            <Link href="#" key={post.slug}>
              <time>{post.updateAt}</time>
              <strong>{post.title}</strong>
              <p>{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();
  const documentType = 'post';
  const response = await prismic.getAllByType(documentType, {
    fetch: ['post.title', 'post.content'],
  });
  const posts = response.map(post => {
    return {
      slug: post.uid,
      title: prismicH.asText(post.data.title),
      excerpt:
        (
          post.data.content.find(content => content.type === 'paragraph') as
            | RTParagraphNode
            | undefined
        )?.text ?? '',
      updateAt: new Date(post.last_publication_date).toLocaleDateString(
        'pt-BR',
        {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        },
      ),
    };
  });
  return {
    props: { posts },
    revalidate: 60 * 60 * 12, // 12 horas
  };
};
