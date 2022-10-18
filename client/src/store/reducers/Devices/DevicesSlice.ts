import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDevices } from '../../../interfaces/interfaceDevices';

type initialStateDevice = {
  device: IDevices;
  devices: IDevices[];
  isLoading: boolean;
  errorDevice: string;
  currentPage: number;
  totalCountDevice: number;
  limitDevice: number;
};

const initialState: initialStateDevice = {
  device: { name: '', rating: 5, price: 0, img: '' },
  devices: [],
  isLoading: false,
  errorDevice: '',
  currentPage: 1,
  totalCountDevice: 1,
  limitDevice: 9,
};

export const DeviceSlice = createSlice({
  name: 'RequestDevices',
  initialState,
  reducers: {
    DeviceFetching(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    DevicesFethingSuccess(state, action: PayloadAction<IDevices[]>) {
      state.errorDevice = '';
      state.devices = action.payload;
    },
    DeviceFethingSuccess(state, action: PayloadAction<IDevices>) {
      state.errorDevice = '';
      state.device = action.payload;
    },
    DeviceFetchingError(state, action: PayloadAction<string>) {
      state.errorDevice = action.payload;
    },
    GetCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    GettotalCountDevice(state, action: PayloadAction<number>) {
      state.totalCountDevice = action.payload;
    },
    GetLimitDevice(state, action: PayloadAction<number>) {
      state.limitDevice = action.payload;
    },
  },
});

export const reducerDevice = DeviceSlice.reducer;
export const DeviceAction = DeviceSlice.actions;
