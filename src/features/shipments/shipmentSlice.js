import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  shipments: [],
  error: "",
};

export const fetchShipments = createAsyncThunk(
  "shipment/fetchShipments",
  async () => {
    return await axios
      .get("http://localhost:8000/shipments")
      .then((response) => response.data);
  }
);
export const deleteShipment = createAsyncThunk(
  "shipments/deleteShipment",
  async (id) => {
    await axios.delete(`http://localhost:8000/shipments/${id}`);
    return id;
  }
);
export const updateShipment = createAsyncThunk(
  "shipments/updateShipment",
  async (updatedShipment) => {
    const response = await axios.put(
      `http://localhost:8000/shipments/${updatedShipment.id}`,
      updatedShipment
    );
    return response.data;
  }
);

const shipmentSlice = createSlice({
  name: "shipment",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchShipments.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchShipments.fulfilled, (state, action) => {
      state.loading = false;
      state.shipments = action.payload;
      state.error = "";
    });
    builder.addCase(fetchShipments.rejected, (state, action) => {
      state.loading = false;
      state.shipments = [];
      state.error = action.error.message;
    });
    builder.addCase(deleteShipment.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteShipment.fulfilled, (state, action) => {
      state.loading = false;
      state.shipments = state.shipments.filter(
        (shipment) => shipment.orderNo !== action.payload
      );
    });
    builder.addCase(deleteShipment.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(updateShipment.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateShipment.fulfilled, (state, action) => {
      state.loading = false;
      const updatedShipmentIndex = state.shipments.findIndex(
        (shipment) => shipment.orderNo === action.payload.orderNo
      );
      if (updatedShipmentIndex !== -1) {
        state.shipments[updatedShipmentIndex] = action.payload;
      }
    });
    builder.addCase(updateShipment.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default shipmentSlice.reducer;
