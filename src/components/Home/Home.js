import React from 'react'
import Banner from './Banner'
import TeachingStyle from './Teaching'
import Testimonials from './Testimonials'
import Experience from './Experience'
import Gallery from './Gallery'
import BannerImg from '../../images/banner10.png'
import Navbar from '../Navbar/Navbar'
import Header from '../Navbar/Header'
import CrissStanding from '../../images/crissStanding.png'

const Home = () => {
  return (
    <div>
      <Banner/>      
      <div className="container">
        <div className="styleAndExperience"><div className="col-12 mt-5 pt-5"><TeachingStyle/></div>
            <div className="col-12 mt-5 pt-2"><Experience/></div>
            
        </div>
      </div>
      <hr className="styleGalleryHoriDiv"/>
      <div className="container-fluid mx-0 px-0">
        <div className="row">
         <Gallery/>
        </div>
       
      </div>
      <div className="container my-5">
      <Testimonials/>
      </div>
    </div>
  )
}

export default Home
