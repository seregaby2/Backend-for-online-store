import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: { error: string } = {
  error: '',
};

export const ErrorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    FetchingError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});

export const reducerError = ErrorSlice.reducer;
export const errorAction = ErrorSlice.actions;
