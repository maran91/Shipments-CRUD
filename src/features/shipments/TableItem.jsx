import { TableItemModal } from "./TableItemModal";

export const TableItem = ({ shipment, handleDelete, handleUpdateShipment }) => {
  return (
    <tr>
      <td>{shipment.orderNo}</td>
      <td>{shipment.date}</td>
      <td>{shipment.customer}</td>
      <td>{shipment.trackingNo}</td>
      <td>{shipment.status}</td>
      <td>{shipment.consignee}</td>
      <td>
        <TableItemModal
          shipment={shipment}
          handleUpdateShipment={handleUpdateShipment}
        />
      </td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => {
            handleDelete(shipment.orderNo);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};
