import React from 'react';

const Dropdown = () => {
    return (
        <>
         <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
            <div className="dropdown-menu">
                 <a className="dropdown-item" href="#">Amuletos</a>
                 <a className="dropdown-item" href="#">Mascaras y Vasijas</a>
                 <a className="dropdown-item" href="#">Items</a>
            <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">Miscelaneo</a>
            </div>
        </li>
        </>
    );
}

export default Dropdown;
