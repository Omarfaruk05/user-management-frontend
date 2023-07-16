import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  status: false,
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
});

export default bookSlice.reducer;
