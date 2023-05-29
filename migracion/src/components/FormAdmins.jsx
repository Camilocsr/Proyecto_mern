import React,{useState,useRef} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const FormAddAdmins = ({handleSubmit})=> {
  const [formValues,setformValues] = useState({
    nameAdmin:'',
    paswordAdmin:''
  })

  const inputFileRef = useRef();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setformValues({ ...formValues, [name]: value });
  };


  const _handleSubmit = (e)=> {
    e.preventDefault()
    handleSubmit({...formValues})
  }
  return(
    <Form  onSubmit={_handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre</Form.Label>
        <Form.Control name="nameAdmin" value={formValues.nameAdmin} onChange={handleChange} type="text" />
        <Form.Text className="text-muted">
          Tipo de producto o nombre referente a ese producto.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control name="paswordAdmin"value={formValues.paswordAdmin} onChange={handleChange} type="text"/>
      </Form.Group>
      <br/>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default FormAddAdmins;