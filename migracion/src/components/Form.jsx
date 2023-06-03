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

  const _handleSubmit = (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre');
    const cantidad = document.getElementById('cantidad');
    const precio = document.getElementById('precio');
    const imgProducts = document.getElementById('imgProducts');
    const parrafo = document.getElementById('parrafo');
    const descripcion = document.getElementById('descripcion');
  
    let entrar = false;
    let texto = "";
    let validarImg = /\.(svg|png|gif|jpg|jpeg)$/i;
  
    if (nombre.value.length < 4) {
      texto = `El nombre debe tener al menos 4 caracteres.`;
      entrar = true;
    } else if (cantidad.value <= 0) {
      texto = `La cantidad debe ser mayor a 0`;
      entrar = true;
    } else if (precio.value <= 0) {
      texto = `El precio debe ser mayor a 0`;
      entrar = true;
    } else if (!validarImg.test(imgProducts.value)) {
      texto = `La imagen debe ser un archivo SVG, PNG, GIF o JPG`;
      entrar = true;
    } else if (descripcion.value.length < 4) {
      texto = `La descripción debe ser mayor a 4 caracteres.`;
      entrar = true;
    } else if (formValues.categoria === '') {
      texto = `Por favor, selecciona una categoría.`;
      entrar = true;
    }
  
    if (entrar) {
      parrafo.innerHTML = texto;
    } else {
      handleSubmit({ ...formValues, image: inputFileRef.current.files[0] });
    }
  };

  return (
  <Form  onSubmit={_handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre</Form.Label>
        <Form.Control id='nombre' name="name" value={formValues.name} onChange={handleChange} type="text" />
        <Form.Text className="text-muted">
          Tipo de producto o nombre referente a ese producto.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>cantidad</Form.Label>
        <Form.Control id='cantidad' name="size"value={formValues.size} onChange={handleChange} type="number"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Valor por unidad.</Form.Label>
        <Form.Control id='precio' name="priceUnitary"value={formValues.priceUnitary} onChange={handleChange} type="number" placeholder="sin putos"/>
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
            <Dropdown.Item onClick={() => handleCategoriaSelect('otros')}>Otros</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Form.Group>
      <p id='parrafo'></p>
      <Form.Group controlId="formProduct">
        <Form.Label>Descripción:</Form.Label>
        <Form.Control id='descripcion' as="textarea"name="description" value={formValues.description} onChange={handleChange} placeholder="Chaqueta talla... color..." />
      </Form.Group>
      <br/>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Img del producto</Form.Label>
        <Form.Control id='imgProducts' ref={inputFileRef} type="file"/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Enviar.
      </Button>
      <p id='parrafo'></p>
    </Form>
  )
}

export default Formulario;