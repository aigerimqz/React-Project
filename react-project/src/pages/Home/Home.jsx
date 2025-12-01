import "./Home.css"
import { Outlet, Link } from "react-router-dom";

export default function Home(){
    return (
    <>
    
    <div className="home__section">
 
        <h1 className="home__title">Enjoy your best travel ever</h1>
        <div className="home__info">
            <p className="home__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quibusdam molestias ipsam nesciunt laborum eum, vel blanditiis fuga saepe modi, pariatur mollitia cum? Eos dolor beatae aliquid incidunt recusandae excepturi!</p>
            <button>Learn More</button>
        </div>
    
        
    </div>

    
  
   
    </>
    )
}