import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IType } from '../../../interfaces/interfaceDevices';

type initialStateType = {
  types: IType[];
  isLoading: boolean;
  errorType: string;
};

const initialState: initialStateType = {
  types: [
    { id: 1, name: 'Fridge' },
    { id: 2, name: 'Phone' },
  ],
  isLoading: false,
  errorType: '',
};

export const TypeSlice = createSlice({
  name: 'RequestTypeOfDevice',
  initialState,
  reducers: {
    TypeFetching(state) {
      state.isLoading = true;
    },
    TypeFethingSuccess(state, action: PayloadAction<IType[]>) {
      state.isLoading = false;
      state.errorType = '';
      state.types = action.payload;
    },
    TypeFetchingError(state, action: PayloadAction<string>) {
      state.errorType = action.payload;
      state.isLoading = false;
    },
  },
});

export const reducerType = TypeSlice.reducer;
export const TypeAction = TypeSlice.actions;
