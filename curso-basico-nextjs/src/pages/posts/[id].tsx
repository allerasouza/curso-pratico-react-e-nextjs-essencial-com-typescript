import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { Post } from '.';

interface Comment {
  id: string;
  body: string;
}

interface CommentsProps {
  comments: Comment[];
}

interface Params extends ParsedUrlQuery {
  id: string;
}

export default function Post({ comments }: CommentsProps) {
  const router = useRouter();
  return (
    <>
      <h1>Post {router.query.id}</h1>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>{comment.body}</li>
        ))}
      </ul>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch('http://localhost:3333/posts');
  const posts: Post[] = await response.json();
  const paths = posts.map(post => {
    return {
      params: {
        id: String(post.id),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<CommentsProps> = async (
  context: GetStaticPropsContext,
) => {
  const { id } = context.params as Params;
  const response = await fetch(`http://localhost:3333/comments?postId=${id}`);
  const comments = await response.json();

  return {
    props: {
      comments,
    },
    revalidate: 5, // In seconds
  };
};
