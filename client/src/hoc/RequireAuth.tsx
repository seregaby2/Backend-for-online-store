import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

export interface LayoutProps {
  children: JSX.Element;
}

export const RequireAuth = (props: LayoutProps): JSX.Element => {
  useEffect(() => {}, []);
  const isAuth = localStorage.getItem('checkAuthUser');

  if (!isAuth) {
    return <Navigate to="/" />;
  }
  return props.children;
};
