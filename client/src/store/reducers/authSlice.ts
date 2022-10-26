import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPostRequest, IUser } from '../../interfaces/interfaceAuth';

const initialState: IPostRequest = {
  dataAuth: { email: '', role: 'ADMIN' },
  isLoading: false,
  isTokenActive: false,
  isAdmin: 'USER',
  decodeToken: { email: '', role: '' },
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
    },
    authToken(state, action: PayloadAction<boolean>) {
      state.isTokenActive = action.payload;
    },
    checkAdmin(state, action: PayloadAction<string>) {
      state.isAdmin = action.payload;
    },
    getDecodeToken(state, action: PayloadAction<IUser>) {
      state.decodeToken = action.payload;
    },
  },
});

export const reducerUser = SignupSlice.reducer;
export const userAction = SignupSlice.actions;
