import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
       <div className="container">
       
            {/* <div className="col-12 pt-3 navbar-contact-info">
                <div className="d-flex justify-content-end">
                    <a className="navbar-phone" href="tel:+18181231234">(818) 123-1234 <i class="fas fa-phone mx-1"></i></a>
                    <span className="mt-2">
                        <a href="#"><i class="fab fa-instagram ml-4"></i></a>      
                        <a href="#"><i class="fab fa-linkedin mx-3"></i></a>     
                        <a href="#"><i class="fab fa-facebook-square"></i></a>  
                    </span>
                </div>
                
            </div> */}
            <div className="col-12 text-center navbar-tabs pt- d-flex justify-content-center">
            <NavLink className="navbar-requestLesson" to="/request">Request Lesson</NavLink>
            <NavLink className="navbar-pricing ml-4" to="/pricing">Pricing</NavLink>
            <NavLink className="navbar-about ml-4" to="/about">About</NavLink>
            <NavLink className="navbar-contact ml-4" to="/contact">Contact</NavLink>
        </div>
        
        </div>
    </div>
  )
}

export default Header
