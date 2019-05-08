import React from 'react'
import {NavLink, Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="container navbar">
      <div className="col-3 px-0">
        <Link className="navbar-logo" to="/">iTrainUwin</Link>
      </div>
        <div className="col-9 px-0 navbar-tabs pt-2 d-flex justify-content-end">
          <NavLink className="navbar-home" exact to="/">Home</NavLink>
          <NavLink className="navbar-requestLesson mx-4" to="/services">Services & Pricing</NavLink>
          <NavLink className="navbar-bio" to="/qualifications">Qualifications</NavLink>
        <a className="navbar-phone ml-4" href="tel:+18181231234">(818) 123-1234 <i className="fas fa-phone mx-1"></i></a>
      </div>  
    </div>
  )
}

export default Navbar
