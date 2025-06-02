import { habitApi } from "@/services/habitApi";
import { recordApi } from "@/services/recordApi";
import { userApi } from "@/services/userApi";
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./users/userSlice";


export const store = configureStore({
  reducer: {
    [habitApi.reducerPath]: habitApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [recordApi.reducerPath]: recordApi.reducer,
    user: userSlice,
  }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;