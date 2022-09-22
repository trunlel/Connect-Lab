import Modal from "react-modal";
import { useEffect, useState } from "react";
import { Button, Container, DivModal, Img } from "./Styles";
import "./CardModal.styles.css";
import PropTypes from "prop-types";
import { localsService } from "../../services";
import { useForm } from "react-hook-form";

Modal.setAppElement("#root");

export const CardModal = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [locals, setLocals] = useState([]);

  const { title, img } = props;
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    (async () => {
      const response = await localsService();
      setLocals(response.data);
    })();
  }, []);

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
        <h2>{title}</h2>
        <Img src={img} alt="Dispositivo" />
        <DivModal>
          <label htmlFor={"Local"}>Local*</label>
          <select name="local" id={"local"}>
            {locals.map((local) => (
              <option key={local._id}>{local.description}</option>
            ))}
          </select>
          <label htmlFor={"Comodo"}>Cômodo*</label>
          <select name="Comodo" id="Comodo">
            <option value="Quarto">Quarto</option>
            <option value="Sala">Sala</option>
            <option value="Cozinha">Cozinha</option>
          </select>

          <Button type="submit">Registrar</Button>
        </DivModal>
      </Modal>
    </Container>
  );
};

CardModal.propTypes = {
  children: PropTypes.node,
};
