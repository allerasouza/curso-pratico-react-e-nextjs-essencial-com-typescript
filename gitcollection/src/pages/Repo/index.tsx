import React from 'react';
import { useParams } from 'react-router-dom';

interface RepositoryParams {
  [repository: string]: string;
}

export const Repo: React.FC = () => {
  const { repository } = useParams<RepositoryParams>();
  return <h1>Repo: {repository}</h1>;
};
