import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./cartCountSlice";
export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
