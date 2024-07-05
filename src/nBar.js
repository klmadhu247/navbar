import React,{useState} from "react";
import './nbar.css'
import bh6 from './assets/BH6.png'
import cb from './assets/cb.png'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { click } from "@testing-library/user-event/dist/click";

function Nbar ()
{


    const [clicked,setClicked]= useState(false)

    const handleClick = ()=>
    {
        setClicked(!clicked)
    }





    return(<div>

        <nav className="navBar">
            <div>
                <img src={cb} className="image_log"/>
            </div>

            <div className="nav__items">
                <ul className={clicked ? 'list_Items':'menulist-closed'} >
                    <li className="list_Items" > <a href="#">Home</a> </li>
                    <li className="list_Items"> <a href="#">About</a> </li>
                    <li className="list_Items"> <a href="#">Projects</a> </li>
                    <li className="list_Items"> <a  href="#">Contact</a> </li>
                    <li className="list_Items"> <a href="#">Profile</a> </li>

                </ul>
                </div>

                <div > <ul className={clicked ? "soci":'menulist-closed'}>
                        <li className="social-logo">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                        </li>
                        <li  className="social-logo">
                            <a href="#"><i className="fab fa-twitter"></i></a>
                        </li>
                        <li  className="social-logo">
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        </li>
                        <li  className="social-logo">
                            <a href="#"><i className="fab fa-behance"></i></a>
                        </li>
                    </ul>
                    </div> 
          <div className="menu-iconn" onClick={handleClick}><i className={clicked? 'fa fa-times':"fa fa-bars"}></i></div>

        </nav>

    </div>)
}
export default Nbar