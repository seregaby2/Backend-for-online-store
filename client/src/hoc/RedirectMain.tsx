import React from 'react';
import { Navigate } from 'react-router-dom';
import { AppRoute } from '../utils/consts';

export interface LayoutProps {
  children: JSX.Element;
}

export const RedirectMain = (props: LayoutProps): JSX.Element => {
  const isAuth = localStorage.getItem('checkAuthUser');

  if (!isAuth) {
    return <Navigate to={AppRoute.SHOP_ROUTE} />;
  }
  return props.children;
};
