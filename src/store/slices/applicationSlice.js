import { createSlice } from "@reduxjs/toolkit";

export const applicationSlice = createSlice({
  name: "application",
  initialState: {
    useType: null,
    agreedToPrivacyPolicy: false,
    autoSignOn: false,
    autoSignOnUser: "",
    tempUsers: [],
  },

  reducers: {
    setUseType: (state, action) => {
      return { ...state, useType: action.payload };
    },

    setTempUserArray: (state, action) => {
      return {
        ...state,
        tempUsers: action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUseType, setTempUserArray } = applicationSlice.actions;

export default applicationSlice.reducer;
