import { Outlet, Link } from "react-router-dom";
import "../layouts/Navbar.css";
import { useAuth } from "../context/AuthContext";
import { logoutUser } from "../services/authService";
import ProfilePictureUpdater from "../components/ProfilePictureUpdater";
import { useTranslation } from "react-i18next";
import { useI18n } from "../context/I18nContext";

export default function Navbar() {

  const { t, changeLanguage } = useI18n();

  const {user} = useAuth();
  
  return (
    <div>
      <nav className="nav__bar">
        <h1 className="bar__title">Saiahat</h1>
        <div className="nav__list">
          <Link className="nav__item" to="/">{t("home")}</Link>
          <Link className="nav__item" to="/about">{t("about")}</Link>
          <Link className="nav__item" to="/tours">{t("tours")}</Link>
        </div>
        <div className="login__bar">
          {user ? (
            <>
              
              <Link className="nav__item" to="/favorites">{t("favorites")}</Link>
              <Link className="nav__item" to="/profile">{t("profile")}</Link>
              <button onClick={logoutUser} className="login__btn">{t("logout")}</button>
            </>
          ): (
            <>
              <Link className="nav__item" to="/favorites">{t("favorites")}</Link>
              <Link className="login__link" to="/login"> <button className="login__btn">{t("login")}</button></Link>
            </>
              
          )}
        
        </div>
        <div>
          <button className="lang__btn" onClick={() => changeLanguage("en")}>EN</button>
          <button className="lang__btn" onClick={() => changeLanguage("ru")}>RU</button>
          <button className="lang__btn" onClick={() => changeLanguage("kz")}>KZ</button>
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
