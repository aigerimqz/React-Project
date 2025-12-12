import { Outlet, Link } from "react-router-dom";
import "../layouts/Navbar.css";
import { useAuth } from "../context/AuthContext";
import { logoutUser } from "../services/authService";
import ProfilePictureUpdater from "../components/ProfilePictureUpdater";

export default function Navbar() {

  const {user} = useAuth();
  
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
          {user ? (
            <>
              
              <Link className="nav__item" to="/favorites">Favorites</Link>
              <Link className="nav__item" to="/profile">Profile</Link>
              <button onClick={logoutUser} className="login__btn">Logout</button>
            </>
          ): (
            <>
              <Link className="nav__item" to="/favorites">Favorites</Link>
              <Link className="login__link" to="/login"> <button className="login__btn">Login</button></Link>
            </>
              
          )}
        
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
