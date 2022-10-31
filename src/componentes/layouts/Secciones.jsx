import React from 'react';
import { Link } from 'react-router-dom';

const Secciones = () => {
    return (
        <>
            <li className="nav-item">
            <Link className="nav-link active" to="/"><button className='btn btn-secondary'><a className="nav-link">Home</a></button></Link>
        </li>
        </>
    );
}

export default Secciones;
