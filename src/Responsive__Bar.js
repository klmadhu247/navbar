import React, {useState} from "react";
import cn from './assets/cn.png'
import './respo.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

function Respo_Nav ()
{

    const [clicked,setClicked] = useState(false)

    const handleclick = ()=>
    {
        setClicked(!clicked);
    }
    return (
        <div>

            <nav>
                <div className="logo">
                    <a href="/"><img src={cn} className="image__logo"/></a>
                </div>

<div>
                <ul className={clicked ? "list__Items":'menu__list1 closed'}>
                    <li className="list__Items"><a href="#">Home</a></li>
                    <li className="list__Items"><a href="#">Services</a></li>
                    <li className="list__Items"><a href="#">About</a></li>
                    <li className="list__Items"><a href="#">Contact</a></li>

                    <li className="list__Items" >
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                        </li>
                        <li className="list__Items" >
                            <a href="#"><i className="fab fa-twitter"></i></a>
                        </li>
                        <li className="list__Items" >
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        </li>
                        <li className="list__Items" >
                            <a href="#"><i className="fab fa-behance"></i></a>
                        </li>
                    
                    
                </ul>
                </div>

                 <div className= {clicked ? "social":'menu__list1 closed'}> <ul className="social">
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

                    <div className="menu-icon" onClick={handleclick}> <i className= {clicked ?  "fa fa-times": "fa fa-bars"}></i></div>

            </nav>

            

            
            

        </div>
    )
}

export default Respo_Nav