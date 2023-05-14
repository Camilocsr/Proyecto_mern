import React from "react";
import ListProducts from "./ListProducts";
import axios from "axios";
import { Card, Col, Row } from 'react-bootstrap';

class DeleteProducts extends ListProducts {
  handleDeleteProduct(id) {
    axios.delete(`http://localhost:9999/v1/products/delete/${id}`)
      .then(response => {
        console.log(response.data.message); // Mensaje de éxito o error del servidor
        // Realiza cualquier otra acción que necesites después de eliminar el producto
        // Por ejemplo, podrías actualizar la lista de productos llamando a una función para cargar los productos nuevamente
        this.loadProducts();
      })
      .catch(error => {
        console.log(error); // Manejo de errores
      });
  }

  render() {
    const { products } = this.props;

    return (
      <Row className="centrar-products">
        {products.map(({ _id, name, description, imgUrl,unitaryPrice, size }) => (
          <Col className="cont-sep col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3" sm={3} key={_id}>
          <Card className="Card">
          <Card.Img className="Card.Img" variant="top" src={imgUrl} style={{ height: '300px' }} alt={name} />
          <Card.Body>
            <Card.Title>Nombre: {name}</Card.Title>
            <Card.Text>Cantidad: {size}</Card.Text>
            <Card.Text>valore: {unitaryPrice}</Card.Text>
            <Card.Text>Descripcion: {description}</Card.Text>
          </Card.Body>
          <Card.Footer style={{background: 'black'}}>
            <button className="btn-eliminar-products" onClick={() => this.handleDeleteProduct(_id)}>Eliminar</button>
          </Card.Footer>
          </Card>
          </Col>
        ))}
      </Row>
    );
  }
}

export default DeleteProducts;