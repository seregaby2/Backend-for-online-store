import { $authHost, $host } from './index';
import jwt_decode from 'jwt-decode';
import { IUser } from '../interfaces/interfaceAuth';
import { AxiosError } from 'axios';
import { SignupSlice } from '../store/reducers/authSlice';
import { AppDispatch } from '../store/store';

export const checkAuthorization = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(SignupSlice.actions.authFetching(true));
    await $authHost.get('api/user/auth');
    dispatch(SignupSlice.actions.authToken(true));
  } catch (e) {
    const err = e as AxiosError;
    dispatch(SignupSlice.actions.authFetchingError(err.message));
    localStorage.setItem('checkAuthUser', '');
  } finally {
    dispatch(SignupSlice.actions.authFetching(false));
  }
};

export const registration = async (email: string, password: string): Promise<IUser> => {
  const { data } = await $host.post('api/user/registration', { email, password, role: 'USER' });
  localStorage.setItem('token', data);
  localStorage.setItem('checkAuthUser', 'authorizated');
  return jwt_decode(data);
};

export const login = async (email: string, password: string): Promise<IUser> => {
  const { data } = await $host.post('api/user/login', { email, password });
  localStorage.setItem('token', data);
  localStorage.setItem('checkAuthUser', 'authorizated');
  return jwt_decode(data);
};
