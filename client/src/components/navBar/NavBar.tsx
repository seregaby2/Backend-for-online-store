import React from 'react';
import styles from './navBar.module.scss';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { AppRoute } from '../../utils/consts';
import { SignupSlice } from '../../store/reducers/authSlice';
import { TypeSlice } from '../../store/reducers/Devices/TypeSlice';
import { BrandSlice } from '../../store/reducers/Devices/BrandSlice';
import { getDevices } from '../../http/deviceApi';

const NavBar = () => {
  const { isTokenActive, isAdmin } = useAppSelector((state) => state.reducerUser);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { TypeSelectedItem } = TypeSlice.actions;
  const { BrandSelectedItem } = BrandSlice.actions;
  const { limitDevice, currentPage } = useAppSelector((store) => store.reducerDevice);

  const logOut = () => {
    dispatch(SignupSlice.actions.authToken(false));
    dispatch(SignupSlice.actions.authFethingSuccess({ email: '', role: 'USER' }));
    localStorage.clear();
  };

  const resetFilter = () => {
    dispatch(TypeSelectedItem({ name: '', id: null }));
    dispatch(BrandSelectedItem({ name: '', id: null }));
    dispatch(getDevices(null, null, currentPage, limitDevice));
  };

  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container className={styles.navContainer}>
          <NavLink className={styles.navBar} to={AppRoute.SHOP_ROUTE} onClick={resetFilter}>
            Online Store
          </NavLink>
          {isTokenActive && isAdmin === 'ADMIN' ? (
            <Nav className={styles.wrapperButton}>
              <Button variant={'outline-light'} onClick={() => navigate(AppRoute.ADMIN_ROUTE)}>
                {' '}
                Admin Control
              </Button>
              <Button variant={'outline-light'} onClick={logOut}>
                {' '}
                SignOut
              </Button>
            </Nav>
          ) : (
            <Nav className="ml-auto">
              <Button
                variant={'outline-light'}
                onClick={() => navigate(AppRoute.REGISTRATION_ROUTE)}
              >
                {' '}
                SignUp
              </Button>
            </Nav>
          )}
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
