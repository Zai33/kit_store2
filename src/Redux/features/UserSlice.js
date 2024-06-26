import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // userArr: [],
  isAuthenticated: false, //initial state is isAuthenticated false
  userInfo: null,
  error: null,
};

export const userSliceReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      // state.userArr.push(action.payload);
      state.userInfo = action.payload;
      state.isAuthenticated = true;
    },
    removeUser: (state) => {
      // state.userArr = [];
      state.userInfo = null;
      state.isAuthenticated = false;
    },
  },
});

export const { addUser, removeUser } = userSliceReducer.actions;
export default userSliceReducer.reducer;
