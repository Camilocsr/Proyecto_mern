import { Card, Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { FaWhatsapp } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const ListProducts = ({products}) => { // esta es la funcion la cual muestra los productos de el ultimo que se ingreso a la base de datos a el primero.
  const reversedProducts = products.slice().reverse();
  return (
    <Row className='centrar-products'>
      {reversedProducts.map(({description, name, size, _id, unitaryPrice, imgUrl}) => (
        <Col className='cont-sep col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3' sm={3} key={_id}>
          <Card className='Card'>
            <Card.Img className='Card.Img' style={{height: '300px'}} variant='top' src={imgUrl} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <Card.Text>Cantidad: {size}</Card.Text>
            </Card.Body>
            <Card.Footer>$({unitaryPrice}) 
            <div className='cont-redes'>
              <div className='icon-redes'>
                <FaWhatsapp/>
              </div>
              <div className='icon-redes'>
                <FaFacebook/>
              </div>
              <div className='icon-redes'>
                <FaInstagram/>
              </div>
              <div className='icon-redes'>
                <SiGmail/>
              </div>
            </div>
            <p className='parrafo-products'></p>
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

ListProducts.prototype = {
  products: PropTypes.array.isRequired
}

export default ListProducts;

// import { Card, Col, Row } from 'react-bootstrap'; esta es la funcion que muestra los productos en orden del primero al ultimo ingresado en la base de datos.

// const ListProducts = ({products}) => {
//   return (
//     <Row>
//       {products.map(({description, name, size, _id, unitaryPrice, imgUrl}) => (
//         <Col sm={3} key={_id}>
//           <Card>
//             <Card.Img variant='top' src={imgUrl} />
//             <Card.Body>
//               <Card.Title>{name}</Card.Title>
//               <Card.Text>{description}</Card.Text>
//             </Card.Body>
//             <Card.Footer>${unitaryPrice} ({size})</Card.Footer>
//           </Card>
//         </Col>
//       ))}
//     </Row>
//   )
// }

// export default ListProducts;