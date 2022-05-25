import { createSlice } from "@reduxjs/toolkit";

export const businessSlice = createSlice({
  name: "business",
  initialState: {
    model: "",
    business: {
      name: "",
      phoneNumber: "",
      primaryEmail: "",
      addressLineOne: "",
      addressLineTwo: "",
      country: "",
      city: "",
      state: "",
      zip: "",
    },
    clients: "Clients",
  },
  reducers: {
    updateBusinessModel: (state, action) => {
      state.model = action.payload;
    },

    updateClientName: (state, action) => {
      let payloadToString = action.payload.toString();
      let clientNameAsString =
        payloadToString.charAt(0).toUpperCase() + payloadToString.slice(1);
      state.client = clientNameAsString;
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
