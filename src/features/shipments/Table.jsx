import { TableItem } from "./TableItem";

export const Table = ({ shipments, handleDelete, handleUpdateShipment }) => {
  return (
    <table className="table table-hover">
      <thead>
        <tr className="table-dark">
          <th>ORDERNO</th>
          <th>DELIVERYDATA</th>
          <th>CUSTOMER</th>
          <th>TRACKINGNO</th>
          <th>STATUS</th>
          <th>CONSIGNEE</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {shipments.map((shipment) => (
          <TableItem
            shipment={shipment}
            handleDelete={handleDelete}
            handleUpdateShipment={handleUpdateShipment}
            key={shipment.orderNo}
          />
        ))}
      </tbody>
    </table>
  );
};
