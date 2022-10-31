import React, {useContext, useEffect, useState} from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
import { mostrarCarrito } from '../../utilidades/funcionesUtiles';
const Carrito = () => {
    const {carrito, agregarProducto, quitarProducto} = useContext(CarritoContext)
    const [carritoLocal, setCarritoLocal] = useState([]);
    useEffect(() => {
        const prodMostrar =  carrito.map(producto => 
            <div className="card cardProducto" key={producto.id}>
                <img src={"./img/" + producto.img} className="card-img-top" alt={producto.nombre} />
                    <div className="card-body">
                        <h5 className="card-title">{producto.nombre}</h5>
                        <p className="card-text">Precio: {producto.precio}</p>
                        <p className="card-text">Cantidad: {producto.cantidad}</p>
                        <p className="card-text">Precio Total: {producto.precio * producto.cantidad}</p>
                        <button className='btn btn-dark' onClick={() => quitarProducto(producto)}>Eliminar</button>
                </div>
            </div>)
        setCarritoLocal(prodMostrar)
    }, [carrito]);
    
    const app = (carrito.length != 0) ? <div className='row'> {carritoLocal} <h1><Link className="nav-link active" to="/contacto"><button className='btn btn-secondary'><a className="nav-link">Confirmar Compra</a></button></Link></h1> </div> : <> <h1>No hay productos <Link className="nav-link active" to="/"><button className='btn btn-secondary'><a className="nav-link">Volver al Inicio</a></button></Link></h1></>

    return app
}

export default Carrito;