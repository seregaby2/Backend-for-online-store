import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPostRequest, IUser } from '../../interfaces/interfaceAuth';

const initialState: IPostRequest = {
  dataAuth: { email: '', role: 'ADMIN' },
  isLoading: false,
  errorAuth: '',
  errorLogin: '',
  errorGetUser: '',
  errorDeleteUser: '',
  isTokenActive: false,
  isAdmin: 'USER',
};

export const SignupSlice = createSlice({
  name: 'postRequestUser',
  initialState,
  reducers: {
    authFetching(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    authFethingSuccess(state, action: PayloadAction<IUser>) {
      state.dataAuth = action.payload;
      state.errorAuth = '';
    },
    authFetchingError(state, action: PayloadAction<string>) {
      state.errorAuth = action.payload;
    },
    authToken(state, action: PayloadAction<boolean>) {
      state.isTokenActive = action.payload;
    },
    checkAdmin(state, action: PayloadAction<string>) {
      state.isAdmin = action.payload;
    },
  },
});

export const reducerUser = SignupSlice.reducer;
export const userAction = SignupSlice.actions;
