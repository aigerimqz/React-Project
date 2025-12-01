import { Outlet, Link } from "react-router-dom";
import "../layouts/Navbar.css";
export default function Navbar() {
  return (
    <div>
      <nav className="nav__bar">
        <h1 className="bar__title">Saiahat</h1>
        <div className="nav__list">
          <Link className="nav__item" to="/">Home</Link>
          <Link className="nav__item" to="/about">About Us</Link>
          <Link className="nav__item" to="/tours">Tours</Link>
        </div>
        <div className="login__bar">
         <Link className="login__link" to="/login"> <button className="login__btn">Login</button></Link>
        </div>

        
      </nav>

      <main>
        <div className="container">
          <Outlet />
        </div>
        
      </main>
    </div>
  );
}
