import { createSlice } from "@reduxjs/toolkit";

export const businessSlice = createSlice({
  name: "business",
  initialState: {
    business: {
      model: "",
      name: "",
      phoneNumber: "",
      financeEmail: "",
      addressLineOne: "",
      addressLineTwo: "",
      country: "",
      city: "",
      state: "",
      zip: "",
    },
  },

  reducers: {
    updateBusinessModel: (state, action) => {
      state.business.model = action.payload;
    },

    updateBusinessInformation: (state, action) => {
      return { ...state, business: action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  updateBusinessModel,
  updateClientName,
  updateBusinessInformation,
} = businessSlice.actions;

export default businessSlice.reducer;
