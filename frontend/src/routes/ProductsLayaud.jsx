import React, { useState } from "react";
import Header from "../components/Header";
import { Modal, Button } from "react-bootstrap";
import AddButton from "../components/AddButton";
import ListProducts from "../components/ListProducts";
import NavBar from "../components/navBar";
import Formulario from "../components/Form";
import { saveProducts } from '../services';

const ProductLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (data)=>{
    saveProducts(data)
  }

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
        <Modal.Body>
          <Formulario handleSubmit={handleSubmit}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProductLayout;