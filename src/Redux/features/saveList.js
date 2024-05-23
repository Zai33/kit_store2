import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  saveListArr: [],
};

export const saveListReducer = createSlice({
  name: "saveList",
  initialState,
  reducers: {
    addToSaveList: (state, action) => {
      state.saveListArr.push(action.payload);
    },
    deleteFromSaveList: (state, action) => {
      state.saveListArr = state.saveListArr.filter(
        (saveList) => saveList._id !== action.payload
      );
    },
  },
});

export const { addToSaveList, deleteFromSaveList } = saveListReducer.actions;
export default saveListReducer.reducer;
