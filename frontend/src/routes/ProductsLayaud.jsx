import React, { useState,useEffect } from "react";
import Header from "../components/Header";
import { Modal, Button } from "react-bootstrap";
import AddButton from "../components/AddButton";
import ListProducts from "../components/ListProducts";
import NavBar from "../components/navBar";
import Formulario from "../components/Form";
import { saveProducts } from '../services';
import getProducts from "../services";
import Loading from "../components/Loading";

const ProductLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading,setIsLoading] = useState(true)
  const [products,setProducts] = useState([])

  async function loadProducts(){
    const response = await getProducts()
    // console.log(response)
  
    if (response.status === 200) {
      setProducts(response.data.products)
    } else {
      // console.log(`care verga algo esta fallando...`)
    }
    setIsLoading(false)
  }

  useEffect(()=>{


    loadProducts()

  },[])

  const handleSubmit = async (data)=>{
    await saveProducts(data)
    loadProducts()
    setIsModalOpen(false)
  }

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (!products.length) {
    return <Loading/>
  }

  return (
    <>
      <NavBar />
      <Header title="Productos." />
      <AddButton onClick={() => setIsModalOpen(true)} />
      {
        isLoading && <Loading/>
      }
      <ListProducts products={products}/>
      <Modal show={isModalOpen} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Ingreso de Productos...</Modal.Title>
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