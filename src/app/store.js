import { configureStore } from "@reduxjs/toolkit";
import shipmentReducer from "../features/shipments/shipmentSlice";

const store = configureStore({
  reducer: {
    shipment: shipmentReducer,
  },
});

export default store;
