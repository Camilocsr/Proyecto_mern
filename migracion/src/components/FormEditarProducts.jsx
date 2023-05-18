import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import Dropdown from 'react-bootstrap/Dropdown';

const ContEditar = ({ productId, onUpdate }) => {
  const [formData, setFormData] = useState({
    name: '',
    size: '',
    unitaryPrice: '',
    categoria: '',
    description: '',
    imgUrl: null
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "imgUrl") {
      setFormData(prevState => ({
        ...prevState,
        imgUrl: files[0]
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleCategoriaSelect = (categoria) => {
    setFormData({ ...formData, categoria });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("size", formData.size);
    formDataToSend.append("unitaryPrice", formData.unitaryPrice);
    formDataToSend.append("categoria", formData.categoria);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("image", formData.imgUrl);
  
    try {
      const response = await axios.post(`http://localhost:9999/v1/products/edition/${productId}`, formDataToSend);
      console.log(response.data);
      onUpdate(response.data.productStored);
      setIsSubmitted(true);
    } catch (error) {
      console.error(error);
    }
  };

  if (isSubmitted) {
    return <div style={{
      color: "white"
    }}>¡Actualizacion completa!.</div>; // Mostrar un mensaje de éxito en lugar del formulario
  }

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

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Categoria.</Form.Label>
            <Dropdown>
              <Dropdown.Toggle variant="secondary">{formData.categoria}</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => handleCategoriaSelect('niños')}>Niños</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleCategoriaSelect('niñas')}>Niñas</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleCategoriaSelect('hombres')}>Hombres</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleCategoriaSelect('mujeres')}>Mujeres</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
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