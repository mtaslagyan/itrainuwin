import React from 'react'
import Banner from './Banner'
import TeachingStyle from './Teaching'
import Testimonials from './Testimonials'
import Experience from './Experience'
import Gallery from './Gallery'


const Home = () => {
  return (
    <div>
      <Banner/>      
      <div className="container">
        <div className="styleAndExperience"><div className="col-12 pt-md-5 pt-0"><TeachingStyle/></div>
            {/* <div className="col-12 mt-sm-5 mt-0 pt-md-5 pt-0"><Experience/></div> */}
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
