import "./About.css"
import instaIcon from "../../assets/icons/insta.png"
import facebookIcon from "../../assets/icons/facebook.png"
import telegramIcon from "../../assets/icons/telegram.png"
import tiktokIcon from "../../assets/icons/tiktok.png"
import locationIcon from "../../assets/icons/location.png"
import bookingIcon from "../../assets/icons/booking.png"
import serviceIcon from "../../assets/icons/service.png"
export default function About(){
    return (
    <>
    
   <div className="about__section">
    <div className="left__section">
        <div className="left__text">
            <h1>Why they choose us?</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error sed esse quibusdam</p>
        </div>
         <div className="contact__section">
        {/* <hr className="contact__line"/> */}
        <li>
            <a className="contact__item" href="https:/instagram.com"><img src={instaIcon} alt="instagram" /></a>
            <a className="contact__item" href="https:/www."><img src={facebookIcon} alt="facebook" /></a>
            <a className="contact__item" href=""><img src={telegramIcon} alt="telegram" /></a>
            <a className="contact__item" href=""><img src={tiktokIcon} alt="tiktok" /></a>
        </li>
        {/* <hr className="contact__line"/> */}
        
    </div>

    </div>
  
    <div className="right__section">
        
        <div className="about__item">
            <img src={locationIcon} alt="" />
            <div className="about__text">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error sed esse quibusdam</p>
                <a href="">More detailed →</a>
            </div>
            
        </div>
        <div className="about__item">
            <img src={bookingIcon} alt="" />
            <div className="about__text">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error sed esse quibusdam</p>
                <a href="">More detailed →</a>
            </div>
            
        </div>
        <div className="about__item">
            <img src={serviceIcon} alt="" />
            <div className="about__text">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error sed esse quibusdam</p>
                <a href="">More detailed →</a>
            </div>
            
        </div>
    </div>
   </div>

   

 
  
   
    </>
    )
}