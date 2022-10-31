import { BrowserRouter, Routes, Route} from 'react-router-dom';
import '../styles/App.css'
import { DarkModeProvider } from '../context/darkModeContext';
import Navbar from './contenido/Navbar';
import Home from './contenido/Home'
import Carrito from './contenido/Carrito';
import Contacto from './contenido/Contacto';
import Producto from './contenido/Producto';
import Categoria from './contenido/Categoria';

const App = () => {
  return (
    <> 
    <DarkModeProvider>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/producto/:id" element={<Producto/>}/>
        <Route path="/categoria/:id" element={<Categoria/>}/>
        <Route path="/contacto" element={<Contacto/>}/>
        <Route path="/carrito" element={<Carrito/>}/>
        <Route path="*" element={<h1>Error 404</h1>} />
      </Routes>
    </BrowserRouter>
    </DarkModeProvider>
    
    </>
  );
}

export default App;