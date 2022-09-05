import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBrand } from '../../../interfaces/interfaceDevices';

type initialStateBrand = {
  brands: IBrand[];
  isLoading: boolean;
  errorBrand: string;
};

const initialState: initialStateBrand = {
  brands: [
    { id: 1, name: 'Sumsung' },
    { id: 2, name: 'Apple' },
  ],
  isLoading: false,
  errorBrand: '',
};

export const BrandSlice = createSlice({
  name: 'RequestBrandOfDevice',
  initialState,
  reducers: {
    BrandFetching(state) {
      state.isLoading = true;
    },
    BrandFethingSuccess(state, action: PayloadAction<IBrand[]>) {
      state.isLoading = false;
      state.errorBrand = '';
      state.brands = action.payload;
    },
    BrandFetchingError(state, action: PayloadAction<string>) {
      state.errorBrand = action.payload;
      state.isLoading = false;
    },
  },
});

export const reducerBrand = BrandSlice.reducer;
export const BrandAction = BrandSlice.actions;
