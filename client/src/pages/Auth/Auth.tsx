import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import { login, registration } from '../../http/userApi';
import { IUser } from '../../interfaces/interfaceAuth';
import { SignupSlice } from '../../store/reducers/authSlice';
import { AppRoute } from '../../utils/consts';
import styles from './Auth.module.scss';

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === AppRoute.REGISTRATION_ROUTE;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const submitSign = async () => {
    let data: IUser;
    if (!isLogin) {
      data = await login(email, password);
    } else {
      data = await registration(email, password);
    }
    dispatch(SignupSlice.actions.authFethingSuccess(data));
    dispatch(SignupSlice.actions.authToken(true));
    navigate(AppRoute.SHOP_ROUTE);
  };
  return (
    <Container className={styles.wrapper}>
      <h3 className={styles.wrapperForm}>
        <div className={styles.title}>{isLogin ? 'Sign Up' : 'Sign In'}</div>
        <Form>
          <Form.Control
            onChange={changeEmail}
            value={email}
            placeholder="Email"
            className={styles.formControl}
          />
          <Form.Control
            onChange={changePassword}
            value={password}
            placeholder="Password"
            type="password"
            className={styles.formControl}
          />
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
            <Button onClick={submitSign} variant={'outline-success'}>
              {isLogin ? 'Sign Up' : 'Sign In'}
            </Button>
          </div>
        </Form>
      </h3>
    </Container>
  );
};

export default Auth;
