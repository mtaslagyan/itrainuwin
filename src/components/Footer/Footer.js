import React from 'react'

const Footer = () => {
  return (
    <div className="text-center">
      <footer>
        <h1 className="footer-title">iTrainUwin</h1>
        <hr className="footer-div"/>
        <p className="locations">Locations : Sherman Oaks | Northridge | Porter Ranch | Woodland Hills | Canoga Park</p>
        <p className="footer-contact">p. <a className="footer-number" href="tel:+18188095388">(818) 809-5388</a></p>
        <p className="footer-contact">e. <a className="footer-email" href="mailto:crodtennis@gmail.com">crodtennis@gmail.com</a></p>
        <div className="container">
            <div className="row">
                <div className="col-12 text-center pb-5 mt-3 footer-social-media">
                    <a target="_blank" href="https://www.instagram.com/itrainuwin/"><i class="fab fa-instagram"></i></a>      
                    <a target="_blank" href="https://www.linkedin.com/in/criss-rodriguez-192a22a8"><i class="fab fa-linkedin mx-sm-5 mx-3"></i></a>     
                    <a target="_blank" href="https://www.facebook.com/criss.rodriguez.75"><i class="fab fa-facebook-square"></i></a>  
                </div>
            </div>
        </div>
      </footer>
      
    </div>
  )
}

export default Footer