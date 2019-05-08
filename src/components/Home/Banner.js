import React from 'react'
import {Link} from 'react-router-dom'

const Banner = () => {
  return (
    <div className="container banner">
    
        <div className="col-12 text-center">
            <h1 className="title">
                {/* You deserve to have an incredible tennis experience in an encouraging and constructive environement. Lessons are designed to make learning enjoyable for everyone of all ages and all levels of play. Through high-level instruction in stroke technique, strategies/tactics, and match play. I am commited to helping you reach your full potential. */}
                Success Through Guidance
            </h1>
            <h2 className="intro">
                Through high-level instruction in stroke technique, strategies/tactics, and match play. I am commited to helping you reach your full potential.
            </h2>
            <div className="banner-btnWrap">
                <Link className="banner-requestBtn" to="/request">Request Lesson</Link>
            </div>
            <div className="navbar-contact-info">
                <a href="#"><i class="fab fa-instagram"></i></a>      
                <a href="#"><i class="fab fa-linkedin mx-3"></i></a>     
                <a href="#"><i class="fab fa-facebook-square"></i></a>  
            </div>
        </div>
       
            
        
    </div>
  )
}

export default Banner
