import React from 'react';
import {useState,useRef} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';

const Formulario = ({handleSubmit})=>{
  const [formValues,setformValues] = useState({
    name:'',
    priceUnitary:'',
    size:'',
    categoria:'',
    description:''
  })

  const inputFileRef = useRef()

  const handleChange = (event)=>{
    const {name,value} = event.target
    // console.log(name,value)

    setformValues({...formValues,[name]:value})
  }

  const handleCategoriaSelect = (categoria) => {
    setformValues({ ...formValues, categoria });
  };

  const _handleSubmit = (e)=>{
    e.preventDefault()
    handleSubmit({...formValues,image:inputFileRef.current.files[0]})
    // console.log(formValues)
    // console.log(inputFileRef.current.files)
  }

  return (
  <Form  onSubmit={_handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre</Form.Label>
        <Form.Control name="name" value={formValues.name} onChange={handleChange} type="text" />
        <Form.Text className="text-muted">
          Tipo de producto o nombre referente a ese producto.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>cantidad</Form.Label>
        <Form.Control name="size"value={formValues.size} onChange={handleChange} type="number"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Valor por unidad.</Form.Label>
        <Form.Control name="priceUnitary"value={formValues.priceUnitary} onChange={handleChange} type="number" placeholder="sin putos"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Categoria.</Form.Label>
        <Dropdown>
          <Dropdown.Toggle variant="secondary">{formValues.categoria}</Dropdown.Toggle>
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
        <Form.Control as="textarea"name="description" value={formValues.description} onChange={handleChange} placeholder="Chaqueta talla... color..." />
      </Form.Group>
      <br/>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Img del producto</Form.Label>
        <Form.Control ref={inputFileRef} type="file"/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default Formulario;