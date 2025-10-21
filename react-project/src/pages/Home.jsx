import Navigation from "../components/Navigation";

export default function Home(){
    return (
        <>
            <div className="home__block">
                <Navigation></Navigation>
                <div className="home__middle">
                    <div className="home__left">
                        <h1 className="home__title">Let's Travel</h1>
                        <p className="home__info">Lorem ipsum dolor sit amet consectetur adipisicing 
                        elit. Molestiae, magni fugit nihil architecto
                        maiores mollitia id, cum veritatis quam itaque,
                        eveniet reprehenderit maxime dolore ex corporis 
                        soluta suscipit placeat ad.</p>
                        <button className="home__btn">Explore</button>
                    </div>
                    
                </div>
            </div>
        </>
    )
}