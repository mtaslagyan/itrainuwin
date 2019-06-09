import React from 'react'
import {NavLink, Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className="container-fluid navbar">
        <div className="col-3 px-0 mt-4">
          <Link className="navbar-logo" to="/">iTrainUwin</Link>
        </div>
        <div className="col-9 px-0 navbar-tabs pt-4 d-flex justify-content-end">
          <NavLink className="query-nav navbar-home" to="/" exact activeClassName="active-link">Home</NavLink>
          <NavLink className="query-nav navbar-bio mx-4" to="/qualifications" exact activeClassName="active-link">Qualifications</NavLink>
          <NavLink className="query-nav navbar-requestLesson" to="/services" exact activeClassName="active-link">Services & Pricing</NavLink>
          <a className="navbar-phone ml-4" href="tel:+18188095388"><span className="nav-number">(818) 809-5388</span> <i className="fas fa-phone mx-1"></i></a>
        </div>  
        <hr className="navbar-divider2 mt-0 mt-lg-4"/>
      </div>
      <div className="container-fluid mx-0 px-0">
        <div className="col-12 query-nav2">
          <div className="px-0 navbar-tabs pt-2 pb-4 pb-0 mb-0 d-flex justify-content-center">
            <NavLink className="navbar-home" to="/" exact activeClassName="active-link">Home</NavLink>
            <NavLink className="navbar-bio mx-4" to="/qualifications" exact activeClassName="active-link">Qualifications</NavLink>
            <NavLink className="navbar-requestLesson" to="/services" exact activeClassName="active-link">Services & Pricing</NavLink>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default Navbar
