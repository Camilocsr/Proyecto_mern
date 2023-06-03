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
    const nombre = document.getElementById('nombre');
    const password = document.getElementById('contraseña');
    const parrafo = document.getElementById('parrafo');
      let entrar = false;
      let texto = "";
      const validarContraseña = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z]).+$/;
    
      if (nombre.value.length < 4) {
        texto = `El nombre debe tener minimo cuatro caracteres.`;
        entrar = true
      } else if (!validarContraseña.test(password.value)) {
        texto = `La contraseña debe tener:<br>
        1.Al menos una letra minúscula<br>
        2.Al menos una letra mayúscula,<br>
        3.Al menos un carácter que no sea una letra,<br>
        4.Cualquier carácter una o más veces.<br>
        `;
        entrar = true;
      }
      if (entrar) {
        parrafo.innerHTML = texto;
      } else {
        handleSubmit({...formValues});
      }
  }
  return(
    <Form onSubmit={_handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre</Form.Label>
        <Form.Control id="nombre" name="nameAdmin" value={formValues.nameAdmin} onChange={handleChange} type="text" />
        <Form.Text className="text-muted">
          Nombre de la persona.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control id='contraseña' name="paswordAdmin"value={formValues.paswordAdmin} onChange={handleChange} type="text"/>
      </Form.Group>
      <br/>
      <Button variant="primary" type="submit">
        Enviar.
      </Button>
      <p id="parrafo"></p>
    </Form>
  )
}

export default FormAddAdmins;