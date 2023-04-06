import React from 'react';
import { useParams } from 'react-router-dom';
import { Header, RepoInfo } from './styles';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { FiChevronLeft } from 'react-icons/fi';

interface RepositoryParams {
  [repository: string]: string;
}

export const Repo: React.FC = () => {
  const { repository } = useParams<RepositoryParams>();
  return (
    <>
      <Header>
        <img src={logo} alt="GitCollection" />
        <Link to="/">
          <FiChevronLeft />
          Voltar
        </Link>
      </Header>

      <RepoInfo>
        <header>
          <img src="" alt="Aller" />
          <div>
            <strong>aller/hudeing</strong>
            <p>Repositorio teste</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>2330</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>210</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>79</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepoInfo>
    </>
  );
};
