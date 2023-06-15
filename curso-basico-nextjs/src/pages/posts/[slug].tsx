import styles from './post.module.scss';
import SEO from '@/src/components/SEO';
import { getPrismicClient } from '@/src/services/prismic';

import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import * as prismicH from '@prismicio/helpers';
import { ParsedUrlQuery } from 'querystring';
// import { Post } from '.';

// interface PostProps {
//   post: Omit<Post, 'excerpt'> & { content: string };
// }
interface PostProps {
  post: {
    slug: string;
    title: string;
    content: string;
    updateAt: string;
  };
}

interface Params extends ParsedUrlQuery {
  slug: string;
}

export default function Post({ post }: PostProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <SEO title="Posts" />
      <main className={styles.container}>
        <article className={styles.post}>
          <h1>{post.title}</h1>
          <time>{post.updateAt}</time>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext,
) => {
  const { slug } = context.params as Params;
  const prismic = getPrismicClient();
  const documentType = 'post';
  const response = await prismic.getByUID(documentType, slug);
  const post = {
    slug,
    title: prismicH.asText(response.data.title),
    content: prismicH.asText(response.data.content),
    updateAt: new Date(response.last_publication_date).toLocaleDateString(
      'pt-BR',
      {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      },
    ),
  };

  return {
    props: {
      post,
    },
    revalidate: 60 * 60 * 12, // 12 horas
  };
};
