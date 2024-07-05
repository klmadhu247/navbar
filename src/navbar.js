import React,{useState} from "react";
import cn from './assets/cn.png'
import './navb.css'
import fb from './icons/fb.svg'
import twitter from './icons/twitter.svg'
import linkedin from './icons/linkedin.svg'
import be from './icons/be.svg'
import '@fortawesome/fontawesome-free/css/all.min.css';


function NavigationBar ()
{

    const [clicked,setClicked] = useState(false)
    return(
        <div>
            <nav>
            <div className="container__navbar">
                
                <div><img src={cn} className="nav_logo"/></div>

                <div className="menu-icon"> <i className= {clicked ?  "fa fa-times": "fa fa-bars"}></i></div>
                
             <div className="nav__list"> 
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                    <li>Profiles</li>

                </ul> </div>

                <ul className="social">
                        <li className="social__logo">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                        </li>
                        <li className="social__logo">
                            <a href="#"><i className="fab fa-twitter"></i></a>
                        </li>
                        <li className="social__logo">
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        </li>
                        <li className="social__logo">
                            <a href="#"><i className="fab fa-behance"></i></a>
                        </li>
                    </ul>
                </div>   




       
            </nav>
           
           

        </div>
    )

}
export default NavigationBar