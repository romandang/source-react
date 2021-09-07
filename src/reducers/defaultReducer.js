import { createSlice } from "@reduxjs/toolkit";

const defaultReducer = createSlice({
  name: 'default',
  initialState: [],
  reducers: {
    addAction: (state, action) => {
      state.push(action.payload);
    }
  }
});

const { reducer, actions } = defaultReducer;
export const { addAction } = actions;
export default reducer;
