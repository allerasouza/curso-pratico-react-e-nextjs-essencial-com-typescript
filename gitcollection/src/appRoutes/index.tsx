import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
// import { Dashboard } from '../pages/Dashboard';
// import { Repo } from '../pages/Repo';
const Dashboard = lazy(() => import('../pages/Dashboard'));
const Repo = lazy(() => import('../pages/Repo'));

export const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={'Loading...'}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/repositories/:repository" element={<Repo />} />
      </Routes>
    </Suspense>
  );
};
