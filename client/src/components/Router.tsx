import { Route, Routes } from 'react-router-dom';
import { RequireAuth } from '../hoc/RequireAuth';
import { Admin } from '../pages/Admin';
import Auth from '../pages/Auth/Auth';
import { Basket } from '../pages/Basket';
import { DevicePage } from '../pages/DevicePaga';
import { NotFoundPage } from '../pages/NotFoundPage';
import { Shop } from '../pages/Shop';
import { AppRoute } from '../utils/consts';

export const Router = () => {
  return (
    <Routes>
      <Route path={AppRoute.SHOP_ROUTE} element={<Shop />} />
      <Route path={AppRoute.LOGIN_ROUTE} element={<Auth />} />
      <Route path={AppRoute.REGISTRATION_ROUTE} element={<Auth />} />
      <Route path={AppRoute.DEVICE_ROUTE} element={<DevicePage />} />
      <Route
        path={AppRoute.ADMIN_ROUTE}
        element={
          <RequireAuth>
            <Admin />
          </RequireAuth>
        }
      />
      <Route
        path={AppRoute.BASKET_ROUTE}
        element={
          <RequireAuth>
            <Basket />
          </RequireAuth>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
