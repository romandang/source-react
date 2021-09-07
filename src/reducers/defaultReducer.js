import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentData: []
};

const defaultReducer = createSlice({
  name: 'default',
  initialState: initialState,
  reducers: {
    getData: (state, action) => {
      state.currentData = action.payload;
    },

    addAction: (state, action) => {
      state.push(action.payload);
    }
  }
});

const { reducer, actions } = defaultReducer;
export const { addAction, getData } = actions;
export default reducer;
