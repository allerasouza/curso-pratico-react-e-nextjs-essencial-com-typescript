import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './appRoutes';
import { GlobalStyle } from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
};

export default App;
