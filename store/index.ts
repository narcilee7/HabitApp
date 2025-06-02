import { habitApi } from '@/services/habitApi';
import { recordApi } from '@/services/recordApi';
import { userApi } from '@/services/userApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import userSlice from "./users/userSlice";

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user'],
}

const rootReducer = combineReducers({
  [habitApi.reducerPath]: habitApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [recordApi.reducerPath]: recordApi.reducer,
  user: userSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(userApi.middleware)
})


export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export function persistConfig(persistConfig: any) {
  throw new Error('Function not implemented.');
}
