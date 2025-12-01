import Navigation from "../../components/Navigation";
import "./Home.css";
export default function Home(){
    return (
        <>
            <div className="home__block">
                <Navigation></Navigation>
                <div className="home__middle">
                    <div className="home__left">
                        <h1 className="home__title">Let's Travel</h1>
                        
                    </div>
                    <div className="home__right">
                        <p className="home__info">Find your next amazing destination with us. We offer different types of tours — from relaxing beach holidays to exciting mountain adventures.</p>
                        <button className="home__btn">Explore</button>
                    </div>
                  
                    
                </div>
            </div>
        </>
    )
}