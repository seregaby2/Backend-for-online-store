import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { AppRoute } from '../../utils/consts';
import styles from './Auth.module.scss';

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === AppRoute.REGISTRATION_ROUTE;
  return (
    <Container className={styles.wrapper}>
      <h3 className={styles.wrapperForm}>
        <div className={styles.title}>{isLogin ? 'Sign Up' : 'Sign In'}</div>
        <Form>
          <Form.Control placeholder="Email" className={styles.formControl} />
          <Form.Control placeholder="Password" type="password" className={styles.formControl} />
          <div className={styles.wrapperButton}>
            <div className={styles.navLink}>
              {isLogin ? (
                <>
                  {'Do you have an account?'} <NavLink to={AppRoute.LOGIN_ROUTE}>Sign In</NavLink>
                </>
              ) : (
                <>
                  {"Do you haven't an account?"}{' '}
                  <NavLink to={AppRoute.REGISTRATION_ROUTE}>Sign Up</NavLink>
                </>
              )}
            </div>
            <Button variant={'outline-success'}>{isLogin ? 'Sign Up' : 'Sign In'}</Button>
          </div>
        </Form>
      </h3>
    </Container>
  );
};

export default Auth;
