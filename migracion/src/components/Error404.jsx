import React from "react";
const Error404 = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ fontSize: '6rem', color: '#f44336' }}>404</h1>
      <p style={{ fontSize: '2rem', color: '#757575' }}>En este momento tu codigo de estado es <span style={{color: '#f44336'}}>404</span>,<br/> no tienes productos creados en la base de datos.</p>
    </div>
  );
}

export default Error404;