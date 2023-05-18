import React, { useState } from "react";
import ContEditar from "./FormEditarProducts";

const ButtonWithDiv = ({ productId }) => {
  const [showDiv, setShowDiv] = useState(false);
  const [productData, setProductData] = useState(null);

  const handleButtonClick = () => {
    setShowDiv(true);
  };

  const handleProductUpdate = (updatedProductData) => {
    setProductData(updatedProductData);
  };

  return (
    <div>
      <button className="btn-eliminar-products" onClick={handleButtonClick}>Editar</button>
      {showDiv && (
        <ContEditar productId={productId} onUpdate={handleProductUpdate} />
      )}
      {/* {productData && (
        <div>
          <p>Nombre: {productData.name}</p>
          <p>Cantidad: {productData.size}</p>
          <p>Valor: {productData.unitaryPrice}</p>
          <p>Description: {productData.description}</p>
          <p>img: {productData.imgUrl}</p>
        </div>
      )} */}
    </div>
  );
};

export default ButtonWithDiv;