import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IType } from '../../../interfaces/interfaceDevices';

type initialStateType = {
  types: IType[];
  isLoading: boolean;
  errorType: string;
  selectedType: string;
};

const initialState: initialStateType = {
  types: [],
  isLoading: false,
  errorType: '',
  selectedType: '',
};

export const TypeSlice = createSlice({
  name: 'RequestTypeOfDevice',
  initialState,
  reducers: {
    TypeFetching(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
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
    TypeSelectedItem(state, action: PayloadAction<string>) {
      state.selectedType = action.payload;
    },
  },
});

export const reducerType = TypeSlice.reducer;
export const TypeAction = TypeSlice.actions;
