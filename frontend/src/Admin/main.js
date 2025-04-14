import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Login from './Login';
import Admin from './index'; // Ensure this contains nested routes
import ProtectedRoute from './ProtectedRoute';

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route
        path="/dashboard/*"
        element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        }
      />

      {/* Redirect to login if route doesn't match */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Main;
