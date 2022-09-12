import React from 'react';
import styles from './navBar.module.scss';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import { AppRoute } from '../../utils/consts';

const NavBar = () => {
  const { isTokenActive } = useAppSelector((state) => state.reducerUser);

  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container className={styles.navContainer}>
          <NavLink className={styles.navBar} to={AppRoute.SHOP_ROUTE}>
            Online Store
          </NavLink>
          {isTokenActive ? (
            <Nav className={styles.wrapperButton}>
              <Button variant={'outline-light'}> Admin Control</Button>
              <Button variant={'outline-light'}> LogOut</Button>
            </Nav>
          ) : (
            <Nav className="ml-auto">
              <Button variant={'outline-light'}> SignUp</Button>
            </Nav>
          )}
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
