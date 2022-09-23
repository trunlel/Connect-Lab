import Modal from "react-modal";
import { useState } from "react";
import { Button, Container } from "./Styles";
import "./DetailsModal.styles.css";
import { AiOutlineEdit } from "react-icons/ai";
import PropTypes from "prop-types";
Modal.setAppElement("#root");

export const DetailsModal = ({ children }, props) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Container>
      <Button onClick={openModal}>
        <AiOutlineEdit />
      </Button>
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

DetailsModal.propTypes = {
  children: PropTypes.node,
};
