import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type habit = {
  id: string;
  title: string;
}

interface habitState {
  list: habit[];
}

const initialState: habitState = {
  list: [],
};

const habitSlice = createSlice({
  name: 'habit',
  initialState,
  reducers: {
    sethabits(state, action: PayloadAction<habit[]>) {
      state.list = action.payload
    }
  }
})

export const { sethabits } = habitSlice.actions
export default habitSlice.reducer