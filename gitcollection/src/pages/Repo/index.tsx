import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Issues, Header, RepoInfo } from './styles';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { api } from '../../services/api';

interface RepositoryParams {
  [repository: string]: string;
}

export const Repo: React.FC = () => {
  const { repository } = useParams<RepositoryParams>();

  useEffect(() => {
    api.get(`repos/${repository}`).then(response => console.log(response.data));

    api
      .get(`repos/${repository}/issues`)
      .then(response => console.log(response.data));
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

      <Issues>
        <Link to="/">
          <div>
            <strong>Título de um issue</strong>
            <p>Descrição de um issue</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};
