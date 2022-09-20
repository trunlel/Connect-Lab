import ReactModal from "react-modal";
import { useState } from "react";
import { Form } from "../Form/Form";
import "./CustomModal.css";
ReactModal.setAppElement("#root");

export const Modal = (e) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const handleOpenModal = (e) => {
    setIsOpen(true);
    e.preventDefault();
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button className="txt2" onClick={handleOpenModal}>
        Não tem uma conta!?
      </button>

      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        className="customModal"
        overlayClassName="customOverlay"
      >
        <Form />
      </ReactModal>
    </div>
  );
};
