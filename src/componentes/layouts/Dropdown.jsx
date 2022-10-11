import React from 'react';
import { Link } from 'react-router-dom';
import producto from '../contenido/Producto';

const Dropdown = ({lista}) => {
    return (
        <>
        
         <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
            <div className="dropdown-menu">
            <Link className= 'dropdown-item' to={`/producto/1`}>{lista[0]}</Link>
            <Link className= 'dropdown-item' to={`/producto/2`}>{lista[1]}</Link>
            <Link className= 'dropdown-item' to={`/producto/3`}>{lista[2]}</Link>
            <div className="dropdown-divider" />
            <Link className= 'dropdown-item' to={`/producto/4`}>{lista[3]}</Link>
            </div>
        </li>
        </>
    );
}

export default Dropdown;
