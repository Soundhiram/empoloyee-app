import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './private-route';
import { RoutingConstraints } from './constraints';
import CombineModule from '../login/index';
import { Dashboard } from '../dashboard';

const AppRoutes: React.FC = () => {
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to={RoutingConstraints.MODULE} />} />

        <Route
          path={RoutingConstraints.MODULE}
          element={
            isAuthenticated ? (
              <Navigate to="/home/dashboard" />
            ) : (
              <CombineModule />
            )
          }
        />
        <Route
          path="/home"
          element={<PrivateRoute isAuthenticated={isAuthenticated} />}
        >
          <Route path="dashboard" element={<Dashboard />} />
        
          <Route path="*" element={<p>404 Not Found</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
