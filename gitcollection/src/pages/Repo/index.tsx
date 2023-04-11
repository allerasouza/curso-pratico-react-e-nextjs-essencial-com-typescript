import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Issues, Header, RepoInfo } from './styles';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { api } from '../../services/api';

interface RepositoryParams {
  [repository: string]: string;
}

interface GithubRepository {
  description: string;
  forks_count: number;
  full_name: string;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
  stargazers_count: number;
}

interface GithubIssue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

const Repo: React.FC = () => {
  const { repository } = useParams<RepositoryParams>();
  const [repositoryInfo, setRepositoryInfo] = useState<GithubRepository | null>(
    null,
  );
  const [issues, setIssues] = useState<GithubIssue[]>([]);

  useEffect(() => {
    api
      .get(`repos/${repository}`)
      .then(response => setRepositoryInfo(response.data));

    api
      .get(`repos/${repository}/issues`)
      .then(response => setIssues(response.data));
  }, [repository]);

  return (
    <>
      <Header>
        <img src={logo} alt="GitCollection" />
        <Link to="/">
          <FiChevronLeft />
          Voltar
        </Link>
      </Header>

      {repositoryInfo && (
        <RepoInfo>
          <header>
            <img
              src={repositoryInfo.owner.avatar_url}
              alt={repositoryInfo.owner.login}
            />
            <div>
              <strong>{repositoryInfo.full_name}</strong>
              <p>{repositoryInfo.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repositoryInfo.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repositoryInfo.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repositoryInfo.open_issues_count}</strong>
              <span>Issues abertas</span>
            </li>
          </ul>
        </RepoInfo>
      )}

      <Issues>
        {issues.map(issue => (
          <a href={issue.html_url} key={issue.id}>
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Issues>
    </>
  );
};

export default Repo;
