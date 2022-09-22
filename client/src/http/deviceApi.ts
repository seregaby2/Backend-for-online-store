import { AxiosError } from 'axios';
import { IType } from '../interfaces/interfaceDevices';
import { TypeSlice } from '../store/reducers/Devices/TypeSlice';
import { AppDispatch } from '../store/store';
import { $authHost, $host } from './index';

export const createType = async (type: IType) => {
  const data = await $authHost.post('api/type', type);
  return data;
};

export const getTypes = () => async (dispatch: AppDispatch) => {
  try {
    const { data } = await $host.get('api/type');
    dispatch(TypeSlice.actions.TypeFetching(true));
    dispatch(TypeSlice.actions.TypeFethingSuccess(data));
  } catch (e) {
    const err = e as AxiosError;
    dispatch(TypeSlice.actions.TypeFetchingError(err.message));
  } finally {
    dispatch(TypeSlice.actions.TypeFetching(false));
  }
};
