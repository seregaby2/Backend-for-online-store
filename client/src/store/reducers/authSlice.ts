import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPostRequest } from '../../interfaces/interfaceAuth';

const initialState: IPostRequest = {
  dataAuth: { email: '', password: '' },
  isLoading: false,
  errorAuth: '',
  errorLogin: '',
  errorGetUser: '',
  errorDeleteUser: '',
  isTokenActive: true,
};

export const SignupSlice = createSlice({
  name: 'postRequestUser',
  initialState,
  reducers: {
    authFetching(state) {
      state.isLoading = true;
    },
    authFethingSuccess(state) {
      state.isLoading = false;
      state.errorAuth = '';
    },
    authFetchingError(state, action: PayloadAction<string>) {
      state.errorAuth = action.payload;
      state.isLoading = false;
    },
  },
});

export const reducerUser = SignupSlice.reducer;
export const boardsAction = SignupSlice.actions;
