import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchShipments,
  deleteShipment,
  updateShipment,
} from "./shipmentSlice";
import { Table } from "./Table";

export const Shipments = () => {
  const shipment = useSelector((state) => state.shipment);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchShipments());
  }, []);
  const handleDelete = (id) => {
    dispatch(deleteShipment(id));
  };
  const handleUpdateShipment = (updatedShipment) => {
    dispatch(updateShipment(updatedShipment));
  };

  return (
    <div>
      {shipment.loading && <div>Loading...</div>}
      {!shipment.loading && shipment.error ? (
        <div>Error: {shipment.error}</div>
      ) : null}
      {!shipment.loading && shipment.shipments.length ? (
        <Table
          shipments={shipment.shipments}
          handleDelete={handleDelete}
          handleUpdateShipment={handleUpdateShipment}
        />
      ) : null}
    </div>
  );
};
