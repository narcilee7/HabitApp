import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface UserState {
  token: string | null;
  loading: boolean;
  userInfo: any | null;
  error: string | null;
}

const initialState: UserState = {
  token: null,
  loading: false,
  userInfo: null,
  error: null,
};


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginRequest(state, action: PayloadAction<{ email: string; password: string }>) {
      state.loading = true
      state.error = null
    },
    loginSuccess(state, action: PayloadAction<{ token: string }>) {
      state.token = action.payload.token
      state.loading = false
    },
    loginFailure(state, action: PayloadAction<string>) {
      state.error = action.payload
      state.loading = false
    },
    logout(state) {
      state.token = null
      state.userInfo = null
    },
  },
})


export const {
  loginRequest,
  loginSuccess,
  loginFailure,
  logout,
} = userSlice.actions

export default userSlice.reducer