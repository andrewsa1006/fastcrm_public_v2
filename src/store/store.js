import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import applicationReducer from "./slices/applicationSlice";
import businessReducer from "./slices/businessSlice";

export default configureStore({
  reducer: {
    application: applicationReducer,
    business: businessReducer,
    user: userReducer,
  },
});
