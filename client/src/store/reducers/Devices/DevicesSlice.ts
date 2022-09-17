import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDevices } from '../../../interfaces/interfaceDevices';

type initialStateDevice = {
  devices: IDevices[];
  isLoading: boolean;
  errorDevice: string;
};

const initialState: initialStateDevice = {
  devices: [
    {
      id: 1,
      name: 'Iphone',
      price: 1000,
      rating: 5,
      img: 'https://mobistore.by/files/products/1/apple-iphone-12-mini-256gb-pr12322_4.800x600w.jpg?06a822be4b957e594b3f6e7b7be754da',
    },
    {
      id: 2,
      name: 'Iphone',
      price: 1000,
      rating: 5,
      img: 'https://mobistore.by/files/products/1/apple-iphone-12-mini-256gb-pr12322_4.800x600w.jpg?06a822be4b957e594b3f6e7b7be754da',
    },
    {
      id: 3,
      name: 'Iphone',
      price: 1000,
      rating: 5,
      img: 'https://mobistore.by/files/products/1/apple-iphone-12-mini-256gb-pr12322_4.800x600w.jpg?06a822be4b957e594b3f6e7b7be754da',
    },
    {
      id: 4,
      name: 'Iphone',
      price: 1000,
      rating: 5,
      img: 'https://mobistore.by/files/products/1/apple-iphone-12-mini-256gb-pr12322_4.800x600w.jpg?06a822be4b957e594b3f6e7b7be754da',
    },
    {
      id: 5,
      name: 'Iphone',
      price: 1000,
      rating: 5,
      img: 'https://mobistore.by/files/products/1/apple-iphone-12-mini-256gb-pr12322_4.800x600w.jpg?06a822be4b957e594b3f6e7b7be754da',
    },
    {
      id: 6,
      name: 'Iphone',
      price: 1000,
      rating: 5,
      img: 'https://mobistore.by/files/products/1/apple-iphone-12-mini-256gb-pr12322_4.800x600w.jpg?06a822be4b957e594b3f6e7b7be754da',
    },
  ],
  isLoading: false,
  errorDevice: '',
};

export const DeviceSlice = createSlice({
  name: 'RequestDevices',
  initialState,
  reducers: {
    DeviceFetching(state) {
      state.isLoading = true;
    },
    DeviceFethingSuccess(state, action: PayloadAction<IDevices[]>) {
      state.isLoading = false;
      state.errorDevice = '';
      state.devices = action.payload;
    },
    DeviceFetchingError(state, action: PayloadAction<string>) {
      state.errorDevice = action.payload;
      state.isLoading = false;
    },
  },
});

export const reducerDevice = DeviceSlice.reducer;
export const DeviceAction = DeviceSlice.actions;
