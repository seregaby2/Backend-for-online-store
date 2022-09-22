import React from 'react';
import styles from './navBar.module.scss';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { AppRoute } from '../../utils/consts';
import { SignupSlice } from '../../store/reducers/authSlice';

const NavBar = () => {
  const { isTokenActive } = useAppSelector((state) => state.reducerUser);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    dispatch(SignupSlice.actions.authToken(false));
    dispatch(SignupSlice.actions.authFethingSuccess({ email: '', role: 'USER' }));
    localStorage.clear();
  };

  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container className={styles.navContainer}>
          <NavLink className={styles.navBar} to={AppRoute.SHOP_ROUTE}>
            Online Store
          </NavLink>
          {isTokenActive ? (
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
              <Button variant={'outline-light'} onClick={() => navigate(AppRoute.LOGIN_ROUTE)}>
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
