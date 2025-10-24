import "../styles/About.css"
import locationIcon from "../assets/icons/location.png"
import bookingIcon from "../assets/icons/booking.png"
import serviceIcon from "../assets/icons/service.png"
export default function About(){
    return (
        <>

            <h1 className="about__title">About Us</h1>
            <div className="about__section">
                <div className="about__item">
                    <img src={locationIcon} alt="" />
                    <div className="about__text">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi libero, non</p>
                        <a href="">More detailed</a>
                    </div>
                </div>
                <div className="about__item">
                    <img src={bookingIcon} alt="" />
                    <div className="about__text">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi libero, non</p>
                        <a href="">More detailed</a>
                    </div>
                </div>
                <div className="about__item">
                    <img src={serviceIcon} alt="" />
                    <div className="about__text">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi libero, non</p>
                        <a href="">More detailed</a>
                    </div>
                </div>
            
            </div>
        </>
    )
}