import { Link, Outlet } from "react-router-dom";
const Layout = () => {
return (
    <>
    <nav class="navMenu">
        <Link to="/Home">Home</Link>
        <Link to="/Productos">Productos</Link>
        <Link to="/detalle">Detalle</Link>
        <Link to="/Contacto">Contacto</Link>
        <div class="dot"></div>
    </nav>
        <Outlet></Outlet>
    </>
  );
}

export default Layout;