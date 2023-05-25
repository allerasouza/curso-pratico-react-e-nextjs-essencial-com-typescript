// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Course = {
  id: number;
  name: string;
};

export default (req: NextApiRequest, res: NextApiResponse<Course[]>) => {
  const courses: Course[] = [
    { id: 1, name: 'Next.js com Typescript' },
    { id: 2, name: 'React.js com Typescript' },
    { id: 3, name: 'Node.js com Typescript' },
    { id: 4, name: 'SASS' },
    { id: 5, name: 'Styled Components' },
  ];
  return res.json(courses);
};
