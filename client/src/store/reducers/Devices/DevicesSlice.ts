import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDevices } from '../../../interfaces/interfaceDevices';

type initialStateDevice = {
  device: IDevices;
  devices: IDevices[];
  isLoading: boolean;
  errorDevice: string;
};

const initialState: initialStateDevice = {
  device: { name: '', rating: 5, price: 0, img: '' },
  devices: [],
  isLoading: false,
  errorDevice: '',
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
  },
});

export const reducerDevice = DeviceSlice.reducer;
export const DeviceAction = DeviceSlice.actions;
