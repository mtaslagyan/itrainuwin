import React from 'react'
import Services from './Services'
import BannerImg from '../../images/racquets2.png'


const SP_Home = () => {
  return (
    <div className="SP_home">
        <div className="container-fluid SP_banner mx-0 px-0">
          <div className="row">
            <div className="col-md-7 col-12  SP_content">
              
                <h1 className="SP-title">Services and Pricing</h1>
                  {/* <span className="SP-intro">Each lesson is tailored based on student’s needs, age, level, and goals. Nothing fills me up more than seeing my students excel and achieve their goals.</span> */}
                  <div className="SP-intro">You deserve to have an incredible tennis experience in an encouraging and constructive environement. Lessons are designed to make learning enjoyable for everyone of all ages and all levels of play. </div>
                  <hr className="medium-divider"/>

            </div>
            <div className="col-12 col-md-5 ">
              <img className="homeImg" src={BannerImg} alt="banner of Criss playing tennis with green to blue gradient overlay"/>
            </div>
          </div>
        </div>
        <Services/>
    </div>
  )
}

export default SP_Home
