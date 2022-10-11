import { Link } from 'react-router-dom';
import Dropdown from '../layouts/Dropdown';
import Form from '../layouts/Form'
import Secciones from '../layouts/Secciones';

const Navbar = () => {
    return (
        <>
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">

        <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav me-auto">
        <Secciones/>
        <Dropdown/>
      </ul>
        <Form busqueda="Busqueda Producto"/>
    </div>
  </div>
</nav>  
        </>
    );
}

export default Navbar;
