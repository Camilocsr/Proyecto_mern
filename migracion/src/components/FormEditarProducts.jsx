import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";

const ContEditar = ({ productId }) => {
  const [formData, setFormData] = useState({
    name: '',
    size: '',
    unitaryPrice: '',
    description: '',
    imgUrl: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.patch(`http://localhost:9999/v1/products/edition/${productId}`, formData)
      .then(response => {
        console.log(response.data);
        // Realizar cualquier otra acción después de editar el producto
      })
      .catch(error => {
        console.error(error);
        // Manejar el error de alguna manera adecuada
      });
  };

  return (
    <>
      <div style={{ background: 'white' }}>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre</Form.Label>
            <Form.Control name="name" value={formData.name} type="text" onChange={handleInputChange} />
            <Form.Text className="text-muted">
              Tipo de producto o nombre referente a ese producto.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Cantidad</Form.Label>
            <Form.Control name="size" value={formData.size} type="number" onChange={handleInputChange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Valor por unidad.</Form.Label>
            <Form.Control name="unitaryPrice" value={formData.unitaryPrice} type="number" placeholder="sin puntos" onChange={handleInputChange} />
          </Form.Group>

          <Form.Group controlId="formProduct">
            <Form.Label>Descripción:</Form.Label>
            <Form.Control value={formData.description} name="description" as="textarea" placeholder="Chaqueta talla... color..." onChange={handleInputChange} />
          </Form.Group>
          <br />
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Imagen del producto</Form.Label>
            <Form.Control name="imgUrl" type="file" onChange={handleInputChange} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  )
}

export default ContEditar;