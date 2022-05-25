import { createSlice } from "@reduxjs/toolkit";
import theme from "../../theme/theme";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    username: "",
    profileImageLocalURL: "",
    email: "",
    userSettings: {
      colorPreference: theme.dark,
    },
  },
  reducers: {},
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = userSlice.actions;

export default userSlice.reducer;
