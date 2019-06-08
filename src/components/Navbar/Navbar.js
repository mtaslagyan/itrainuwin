import React from 'react'
import {NavLink, Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="container navbar">
      <div className="col-3 px-0">
        <Link className="navbar-logo" to="/">iTrainUwin</Link>
      </div>
        <div className="col-9 px-0 navbar-tabs pt-2 d-flex justify-content-end">
          <NavLink className="query-nav navbar-home" to="/" exact activeClassName="active-link">Home</NavLink>
          <NavLink className="query-nav navbar-bio mx-4" to="/qualifications" exact activeClassName="active-link">Qualifications</NavLink>
          <NavLink className="query-nav navbar-requestLesson" to="/services" exact activeClassName="active-link">Services & Pricing</NavLink>
          <a className="navbar-phone ml-4" href="tel:+18188095388"><span className="nav-number">(818) 809-5388</span> <i className="fas fa-phone mx-1"></i></a>
        </div>  
      <div className="col-12 query-nav2">
        <div className="px-0 navbar-tabs pt-2 d-flex justify-content-center">
          <NavLink className="navbar-home" to="/" exact activeClassName="active-link">Home</NavLink>
          <NavLink className="navbar-bio mx-4" to="/qualifications" exact activeClassName="active-link">Qualifications</NavLink>
          <NavLink className="navbar-requestLesson" to="/services" exact activeClassName="active-link">Services & Pricing</NavLink>
        </div>  
      </div>
    </div>
  )
}

export default Navbar
