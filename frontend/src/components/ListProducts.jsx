// import { Card, Col, Row } from 'react-bootstrap';

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

import { Card, Col, Row } from 'react-bootstrap';

const ListProducts = ({products}) => {
  const reversedProducts = products.slice().reverse();
  return (
    <Row className='centrar-products'>
      {reversedProducts.map(({description, name, size, _id, unitaryPrice, imgUrl}) => (
        <Col className='cont-sep' sm={3} key={_id}>
          <Card className='Card'>
            <Card.Img className='Card.Img' style={{height: '300px'}} variant='top' src={imgUrl} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{description}</Card.Text>
            </Card.Body>
            <Card.Footer>${unitaryPrice} ({size})</Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default ListProducts;