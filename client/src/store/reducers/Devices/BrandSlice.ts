import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBrand } from '../../../interfaces/interfaceDevices';

type initialStateBrand = {
  brands: IBrand[];
  isLoading: boolean;
  errorBrand: string;
  selectedBrand: IBrand;
};

const initialState: initialStateBrand = {
  brands: [],
  isLoading: false,
  errorBrand: '',
  selectedBrand: { name: '' },
};

export const BrandSlice = createSlice({
  name: 'RequestBrandOfDevice',
  initialState,
  reducers: {
    BrandFetching(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    BrandFethingSuccess(state, action: PayloadAction<IBrand[]>) {
      state.errorBrand = '';
      state.brands = action.payload;
    },
    BrandFetchingError(state, action: PayloadAction<string>) {
      state.errorBrand = action.payload;
    },
    BrandSelectedItem(state, action: PayloadAction<IBrand>) {
      state.selectedBrand = action.payload;
    },
  },
});

export const reducerBrand = BrandSlice.reducer;
export const BrandAction = BrandSlice.actions;
