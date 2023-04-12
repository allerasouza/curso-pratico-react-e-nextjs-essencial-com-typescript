import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
// import { Dashboard } from '../pages/Dashboard';
// import { Repo } from '../pages/Repo';
const Dashboard = lazy(
  () =>
    import(
      /* webpackPrefetch: true */
      /* webpackChunkName: "dashboard" */
      '../pages/Dashboard'
    ),
);
const Repo = lazy(
  () =>
    import(
      /* webpackPrefetch: true */
      /* webpackChunkName: "repo" */
      '../pages/Repo'
    ),
);

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
