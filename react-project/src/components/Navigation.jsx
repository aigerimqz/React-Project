import "../styles/Navigation.css";
export default function Navigation(){
    return (
        <>
        <div className="nav__bar">
            <div className="nav__title">
                Saiahat
            </div>
            <div className="nav__links">
                <a className="nav__item" href="">Home</a>
                <a className="nav__item" href="">About</a>
                <a className="nav__item" href="">Tours</a>
                <a className="nav__item" href="">Contact</a>
            </div>
        </div>
        </>
    )
}