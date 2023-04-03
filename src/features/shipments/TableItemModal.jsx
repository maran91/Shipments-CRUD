import Modal from "react-modal";
import { useState } from "react";

export function TableItemModal({
  shipment,
  handleUpdateShipment = { handleUpdateShipment },
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [date, setData] = useState(shipment.date);
  const [customer, setCustomer] = useState(shipment.customer);
  const [trackingNo, setTrackingNo] = useState(shipment.trackingNo);
  const [status, setStatus] = useState(shipment.status);
  const [consignee, setConsignee] = useState(shipment.consignee);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = ({}) => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateShipment({
      id: shipment.orderNo,
      date: date,
      customer: customer,
      trackingNo: trackingNo,
      status: status,
      consignee: consignee,
    });
  };
  return (
    <>
      <button className="btn btn-info" onClick={openModal}>
        Update
      </button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        appElement={document.getElementById("root")}
      >
        <form onSubmit={handleSubmit}>
          <h5>oderNo: {shipment.orderNo}</h5>
          <label>date</label>
          <input
            className="form-control form-control-sm"
            type="text"
            required
            value={date}
            onChange={(e) => setData(e.target.value)}
          />
          <label>customer</label>
          <input
            className="form-control form-control-sm"
            type="text"
            required
            defaultValue={customer}
            onChange={(e) => setCustomer(e.target.value)}
          />
          <label>trackingNo</label>
          <input
            className="form-control form-control-sm"
            type="text"
            required
            defaultValue={trackingNo}
            onChange={(e) => setTrackingNo(e.target.value)}
          />
          <label>status</label>
          <input
            className="form-control form-control-sm"
            type="text"
            required
            defaultValue={status}
            onChange={(e) => setStatus(e.target.value)}
          />
          <label>consignee</label>
          <input
            className="form-control form-control-sm"
            type="text"
            required
            defaultValue={consignee}
            onChange={(e) => setConsignee(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            Save
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={closeModal}
          >
            Close
          </button>
        </form>
      </Modal>
    </>
  );
}
