import React from "react";
import { useState,useEffect } from "react";
import Header from "../components/Header";
import { Modal, Button } from "react-bootstrap";
import AddButton from "../components/AddButton";
import DeleteProducts from "../components/DeleteProducts";
import NavBar from "../components/navBar";
import Formulario from "../components/Form";
import { saveProducts } from '../services';
import getProducts from "../services";
import Loading from "../components/Loading";
import Error404 from "../components/Error404";
import Foter from "../components/Foter";
import AddButtonAdmins from "../components/AddburttonAdmins";
import FormAddAdmins from "../components/FormAdmins";
import { saveAdmins } from "../services/Admins";

const ProductLayout = () => {
  const [isModalOpenAdmins, setIsModalOpenAdmins] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading,setIsLoading] = useState(true)
  const [products,setProducts] = useState([])

  async function loadProducts(){
    const response = await getProducts()
    // console.log(response)
  
    if (response.status === 200) {
      setProducts(response.data.products)
    } else {
    }
    setIsLoading(false)
  }
  
  useEffect(()=>{
    loadProducts();
  },[products])

  useEffect(()=>{
    loadProducts()
  },[])

  const handleSubmit = async (data)=>{
    await saveProducts(data)
    if (data.nameAdmin && data.paswordAdmin) {
      await saveAdmins(data);
    }
    loadProducts()
    setIsModalOpen(false)
    setIsModalOpenAdmins(false)
  }

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeModalAdmins = () => {
    setIsModalOpenAdmins(false);
  };

  return (
    <>
      <NavBar />
      <Header title="Productos." />
      <div className="const-butoons">
        <AddButton onClick={() => setIsModalOpen(true)} />
        <AddButtonAdmins onClick={() => setIsModalOpenAdmins(true)}/>
      </div>
      {
        isLoading && <Loading/>
      }

      {
        !products.length
        ? <Error404/>
        : <DeleteProducts products={products}/>
      }
      
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

      <Modal show={isModalOpenAdmins} onHide={closeModalAdmins}>
        <Modal.Header closeButton>
          <Modal.Title>Ingreso de Admins...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormAddAdmins handleSubmit={handleSubmit}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModalAdmins}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
      <Foter/>
    </>
  );
};

export default ProductLayout;