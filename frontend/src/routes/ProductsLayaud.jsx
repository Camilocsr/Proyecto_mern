import React, { useState } from "react";
import Header from "../components/Header";
import { Modal, Button } from "react-bootstrap";
import AddButton from "../components/AddButton";
import ListProducts from "../components/ListProducts";
import NavBar from "../components/navBar";

const ProductLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <NavBar />
      <Header title="Productos." />
      <AddButton onClick={() => setIsModalOpen(true)} />
      <ListProducts />
      <Modal show={isModalOpen} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Formulario</Modal.Title>
        </Modal.Header>
        <Modal.Body>formulario</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Cerrar
          </Button>
          <Button variant="primary">Guardar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProductLayout;