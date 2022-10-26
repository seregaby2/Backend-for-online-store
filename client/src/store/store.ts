import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducerUser } from './reducers/authSlice';
import { reducerBrand } from './reducers/Devices/BrandSlice';
import { reducerDevice } from './reducers/Devices/DevicesSlice';
import { reducerType } from './reducers/Devices/TypeSlice';
import { reducerError } from './reducers/error';

const rootReducer = combineReducers({
  reducerUser,
  reducerType,
  reducerDevice,
  reducerBrand,
  reducerError,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
