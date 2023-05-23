import React from 'react';

const MenuFlotante = ({ onSelectCategory }) => {
  const handleCategorySelect = (event, category) => {
    event.preventDefault();
    onSelectCategory(category);
  };

  return (
    <div className='const-menu-flo sticky-top'>
      <div className="dropdown position">
        <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Categorias.
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#" onClick={(e) => handleCategorySelect(e, 'niñas')}>Niñas</a></li>
          <li><a className="dropdown-item" href="#" onClick={(e) => handleCategorySelect(e, 'niños')}>Niños</a></li>
          <li><a className="dropdown-item" href="#" onClick={(e) => handleCategorySelect(e, 'mujeres')}>Mujeres</a></li>
          <li><a className="dropdown-item" href="#" onClick={(e) => handleCategorySelect(e, 'hombres')}>Hombres</a></li>
          <hr/>
          <li><a className="dropdown-item" href="#" onClick={(e) => handleCategorySelect(e, 'otros')}>Otros</a></li>
        </ul>
      </div>
    </div>
  );
};

export default MenuFlotante;