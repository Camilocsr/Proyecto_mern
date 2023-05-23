import React, { Component } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { FaWhatsapp } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import MenuFlotante from './MenuFlotante';

class ListProducts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedCategory: null,
    }
  }

  onSelectCategory = (category) => {
    this.setState({ selectedCategory: category });
  };

  render() {
    const { products } = this.props;
    const reversedProducts = products
      .filter((product) => this.state.selectedCategory ? product.categoria === this.state.selectedCategory : true)
      .slice()
      .reverse();

    return (
      <>
      <Row className="centrar-products">
      <MenuFlotante onSelectCategory={this.onSelectCategory}/>
        {reversedProducts.map(({ description, name, size, _id, unitaryPrice, imgUrl,categoria }) => (
          <Col className="cont-sep col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3" sm={3} key={_id}>
            <Card className="Card">
              <Card.Img className="Card.Img" style={{ height: '300px' }} variant="top" src={imgUrl} />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text>Cantidad: {size}</Card.Text>
                {/* <Card.Text>Categoria: {categoria}</Card.Text> */}
              </Card.Body>
              <Card.Footer>
                $({unitaryPrice})
                <div className="cont-redes">
                  <div className="icon-redes">
                    <FaWhatsapp />
                  </div>
                  <div className="icon-redes">
                    <FaFacebook />
                  </div>
                  <div className="icon-redes">
                    <FaInstagram />
                  </div>
                  <div className="icon-redes">
                    <SiGmail />
                  </div>
                </div>
                <p className="parrafo-products"></p>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
      </>
    );
  }
}

ListProducts.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ListProducts;