import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
       <div className="container">
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
