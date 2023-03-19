import { createSlice } from "@reduxjs/toolkit";

const initalAuthState = { authenticated: false };

const authSlice = createSlice({
  name: "auth",
  initialState: initalAuthState,
  reducers: {
    login(state) {
      state.authenticated = true;
    },
    logout(state) {
      state.authenticated = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
