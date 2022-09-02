import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { AppRoute } from '../utils/consts';

export interface LayoutProps {
  children: JSX.Element;
}

export const RequireAuth = (props: LayoutProps): JSX.Element => {
  useEffect(() => {}, []);
  const isAuth = localStorage.getItem('checkAuthUser');

  if (!isAuth) {
    return <Navigate to={AppRoute.SHOP_ROUTE} />;
  }
  return props.children;
};
