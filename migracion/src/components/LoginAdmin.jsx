import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import ProductLayout from "../routes/ProductsLayaud";
import config from '../config';

const LoginForm = () => {
  const [nameAdmin, setUsername] = useState('');
  const [paswordAdmin, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Realizar la solicitud al backend para verificar la autenticación
    try {
      const response = await axios.post(`${config.appBackAutenticacion.host}/admins/login`, {
        nameAdmin: nameAdmin,
        paswordAdmin: paswordAdmin,
      });

      if (response.status === 200) {
        setAuthenticated(true); // El usuario está autenticado
      } else {
        setError(response.data.message); // Mostrar el mensaje de error del backend
      }
    } catch (error) {
      setError(
        <>
        <div className='cont-parrafo-credenciales'>
          <p>Error de credenciales, por favor verifica tus credenciales para poder ingresar.</p>
        </div>
        <div className='cont-parrafo-credenciales'>
          <p>Solo tienes tres intentos para ingresar a la sona de administracion.</p>
        </div>
        </>
      );
    }

    setUsername('');
    setPassword('');
  };

  useEffect(() => {
    return () => {
      setAuthenticated(false); // Restablecer el estado de autenticación al desmontar el componente
    };
  }, []);

  if (authenticated) {
    return <ProductLayout />;
  }

  return (
    <>
    <div className='cont-form-admin'>
      <form className='form-admin' onSubmit={handleSubmit}>
        <div className='input-name-admin'>
          <label className='label-pasword-admin'>Nombre</label>
          <input
            className='input-admin'
            type='text'
            value={nameAdmin}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='input-name-admin'>
          <label className='label-pasword-admin'>Contraseña</label>
          <input
            className='input-admin'
            type='password'
            value={paswordAdmin}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='btn-form-admin'>
          <button className='btn-admin' type='submit'>
            Ingresar
          </button>
        </div>
        {error && <div className='error-message'>{error}</div>}
      </form>
    </div>
    </>
  );
};

export default LoginForm;