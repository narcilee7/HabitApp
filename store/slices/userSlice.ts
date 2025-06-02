import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  userInfo: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.token = action.payload.token;
      state.userInfo = action.payload.userInfo;
    },
    logout(state) {
      state.token = null;
      state.userInfo = null;
    }
  }
})

export const { setUser, logout: userLogout } = userSlice.actions;
export default userSlice;