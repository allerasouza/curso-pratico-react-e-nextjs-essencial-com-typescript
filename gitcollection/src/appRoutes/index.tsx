import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';
import { Repo } from '../pages/Repo';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/repositories/:repository" element={<Repo />} />
    </Routes>
  );
};
