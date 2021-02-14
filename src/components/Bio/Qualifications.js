import React from 'react'
import Awards from './Awards'
import BannerImg from '../../images/racquets2.png'
import USPTA from '../../images/usptacertified.png'

const Bio_Home = () => {
  return (
    <div className="Bio-home">
      <div className="container-fluid mx-0 px-0 Bio-banner">
        <div className="row">
          <div className="col-md-7 col-12 Bio-content">
            <h1 className="Bio-title text-center">Qualifications</h1>
              {/* <span className="SP-intro">Each lesson is tailored based on student’s needs, age, level, and goals. Nothing fills me up more than seeing my students excel and achieve their goals.</span> */}
              {/* <div className="Bio-intro text-center">With over 8-years of coaching experience and over 20-years of competitive playing experience, I have been in the tennis world from birth. Born to two tennis coaching parents, I have been around tennis my entire life. 
              </div> */}
              <div className="row">
                <div className="col-0 col-lg-1"></div>
                <div className="col-6 col-lg-5">
                  <ul className="qualifications">
                    <li><img src={USPTA}/></li>
                    <li>USPTA Certified</li>
                    <li>8+ years coaching experience</li>
                    <li>“10 and under tennis” Certified</li>
                    <li>CPR Certified</li>
                  </ul>
                </div>
                <div className="col-6 col-lg-5 second_row">
                  <ul className="qualifications">
                    <li>Bilingual: English and Spanish</li>
                    <li>24+ years playing experience</li>
                    <li>Former Division I Student Athelete on Athletic Scholarship</li>
                    <li>USTA Competitive Tournament Player</li>
                  </ul>
                </div>
              </div>
              

            </div>
            
            <div className="col-12 col-md-5 ">
              <img className="homeImg" src={BannerImg} alt="banner of Criss playing tennis with green to blue gradient overlay"/>
            </div>
            
          </div>
            <Awards/>
        </div>
    </div>
  )
}

export default Bio_Home
