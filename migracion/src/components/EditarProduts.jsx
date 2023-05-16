import React,{useState} from "react";
import ContEditar from "./FormEditarProducts";

const ButtonWithDiv = () => {
    const [showDiv, setShowDiv] = useState(false);
  
    const handleButtonClick = () => {
      setShowDiv(true);
    };
  
    return (
      <div>
        <button className="btn-eliminar-products" onClick={handleButtonClick}>Editar</button>
        {showDiv && <ContEditar/>}
      </div>
    );
  };
  
  export default ButtonWithDiv;