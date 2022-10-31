import React from 'react';
import { useState, useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';

const DetalleProducto = ({producto}) => {
  const [cantidad, setcantidad] = useState(1);

  const {carrito, agregarProducto, vaciarCarrito} = useContext(CarritoContext);

    const cantProducto = (operacion) =>{
        if(operacion == "+"){
          if(cantidad < producto.stock){
            setcantidad(cantidad + 1)
          } 
        } else {
            if(cantidad > 1){
              setcantidad(cantidad - 1)
            }
        }
    }
    return (
        <>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={`../img/${producto.img}`} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{producto.nombre}</h5>
        <p className="card-text">{"Precio: " + producto.precio}</p>
        <p className="card-text">{"Stock: " + producto.stock}</p>
        <p className="card-text">{"Cantidad: " + cantidad}</p>
        <button className='btn btn-light' onClick={ () => cantProducto("+")}>+</button>
        <button className='btn btn-light' onClick={ () => cantProducto("-")}>-</button>

        <button className='btn btn-dark' onClick={ () => agregarProducto(producto, cantidad)}>Agregar al carrito</button>
      </div>
    </div>
  </div>

        </>
    );
}

export default DetalleProducto;
