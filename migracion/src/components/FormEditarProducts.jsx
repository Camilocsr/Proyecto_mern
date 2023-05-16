import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ContEditar = () => {
  return(
  <>
    <div style={{background: 'white'}}>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" />
        <Form.Text className="text-muted">
          Tipo de producto o nombre referente a ese producto.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>cantidad</Form.Label>
        <Form.Control type="number"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Valor por unidad.</Form.Label>
        <Form.Control name="priceUnitary" type="number" placeholder="sin putos"/>
      </Form.Group>

      <Form.Group controlId="formProduct">
        <Form.Label>Descripción:</Form.Label>
        <Form.Control as="textarea" placeholder="Chaqueta talla... color..." />
      </Form.Group>
      <br/>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Img del producto</Form.Label>
        <Form.Control type="file"/>
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