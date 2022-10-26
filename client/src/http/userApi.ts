import { $authHost, $host } from './index';
import jwt_decode from 'jwt-decode';
import { IUser } from '../interfaces/interfaceAuth';
import { AxiosError } from 'axios';
import { SignupSlice } from '../store/reducers/authSlice';
import { AppDispatch } from '../store/store';
import { ErrorSlice } from '../store/reducers/error';

export const checkAuthorization = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(SignupSlice.actions.authFetching(true));
    await $authHost.get('api/user/auth');
    dispatch(SignupSlice.actions.authToken(true));
    dispatch(ErrorSlice.actions.FetchingError(''));
  } catch (e) {
    const err = e as AxiosError;
    dispatch(ErrorSlice.actions.FetchingError(err.message));
    localStorage.setItem('checkAuthUser', '');
  } finally {
    dispatch(SignupSlice.actions.authFetching(false));
  }
};

export const registration = (email: string, password: string) => async (dispatch: AppDispatch) => {
  try {
    const { data } = await $host.post('api/user/registration', { email, password, role: 'USER' });
    localStorage.setItem('token', data);
    localStorage.setItem('checkAuthUser', 'authorizated');
    dispatch(SignupSlice.actions.getDecodeToken(data));
    dispatch(ErrorSlice.actions.FetchingError(''));
  } catch (e) {
    const err = e as AxiosError;
    dispatch(ErrorSlice.actions.FetchingError(err.message));
  }
};

export const login = (email: string, password: string) => async (dispatch: AppDispatch) => {
  try {
    const { data } = await $host.post('api/user/login', { email, password });
    const decode: IUser = jwt_decode(data);
    dispatch(SignupSlice.actions.checkAdmin(decode.role));
    localStorage.setItem('token', data);
    localStorage.setItem('checkAuthUser', 'authorizated');
    dispatch(SignupSlice.actions.getDecodeToken(data));
    dispatch(ErrorSlice.actions.FetchingError(''));
  } catch (e) {
    const err = e as AxiosError;
    dispatch(ErrorSlice.actions.FetchingError(err.message));
  }
};
