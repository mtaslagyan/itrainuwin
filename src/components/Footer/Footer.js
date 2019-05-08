import React from 'react'

const Footer = () => {
  return (
    <div className="text-center">
      <footer>
        <h1 className="footer-title">iTrainUwin</h1>
        <hr className="footer-div"/>
        <p className="locations">Locations : Sherman Oaks | Northridge | Porter Ranch | Woodland Hills | Canoga Park</p>
        <p className="footer-contact"> p. (123) 456-7890 <br/> e. crodtennis@gmail.com</p>
        <div className="container">
            <div className="row">
                <div className="col-12 text-center pb-5 mt-3 footer-social-media">
                    <a href="#"><i class="fab fa-instagram"></i></a>      
                    <a href="#"><i class="fab fa-linkedin mx-5"></i></a>     
                    <a href="#"><i class="fab fa-facebook-square"></i></a>  
                </div>
            </div>
        </div>
      </footer>
      
    </div>
  )
}

export default Footer
