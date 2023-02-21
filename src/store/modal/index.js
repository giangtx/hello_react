import { createSlice } from "@reduxjs/toolkit";

import initialState from './modal.state';
import reducers from './modal.reducer';

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers,
})

export default modalSlice.reducer;