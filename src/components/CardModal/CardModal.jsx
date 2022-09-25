import Modal from "react-modal";
import { useState } from "react";
import { Button, Container } from "./Styles";
import PropTypes from "prop-types";
Modal.setAppElement("#root");

export const CardModal = ({ children }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Container>
      <Button onClick={openModal}>Registrar</Button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        {children}
      </Modal>
    </Container>
  );
};

CardModal.propTypes = {
  children: PropTypes.node.isRequired,
};
