import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({lista}) => {
    return (
        <>
        
         <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
            <div className="dropdown-menu">
            <Link className= 'dropdown-item' to={`/categoria/1`}>Objetos</Link>
            <div className="dropdown-divider" />
            <Link className= 'dropdown-item' to={`/categoria/2`}>Entidades</Link>
            </div>
        </li>
        </>
    );
}

export default Dropdown;
