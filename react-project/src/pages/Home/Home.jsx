import { useI18n } from "../../context/I18nContext";
import "./Home.css"
import { Outlet, Link } from "react-router-dom";

export default function Home(){
    const { t } = useI18n();
    return (
    <>
    
    <div className="home__section">
 
        <h1 className="home__title">{t("home_title")}</h1>
        <div className="home__info">
            <p className="home__text">{t("home_text")}</p>
            <button>{t("home_btn")}</button>
        </div>
    
        
    </div>

    
  
   
    </>
    )
}