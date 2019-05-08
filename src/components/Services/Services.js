import React from 'react'
import Cones from '../../images/cones.jpg'
import {Link} from 'react-router-dom'
import Single from '../../images/1man.png'
import Double from '../../images/2men.png'
import Group from '../../images/3ormore.png'
import Clinic from '../../images/clinic.png'
import Cardio from '../../images/cardio.png'
import Weights from '../../images/weights.png'

const Services = () => {
  return (
    <div className="services">
      <div className="container">
        <div className="row">
            <div className="col-12 services-info">
                <h2 className="mb-5 services-title">Services</h2>
                <div className="row">
                    <div className="col-6">
                       <div><img className="mr-4" src={Single} alt=""/> <span className="services-offered">Private Lessons</span></div> 
                    </div>
                    <div className="col-6">
                       <div><img className="mr-4" src={Double} alt=""/> <span className="services-offered">Semi-Private Lessons</span></div> 
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-6">
                       <div><img className="mr-4" src={Group} alt=""/> <span className="services-offered">Group Lessons (3+ players)</span></div> 
                    </div>
                    <div className="col-6">
                       <div><img className="mr-4" src={Clinic} alt=""/> <span className="services-offered">Clinics (competition, fitness, skill)</span></div> 
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                       <div><img className="mr-4" src={Cardio} alt=""/> <span className="services-offered">Cardio Tennis (aerobic workout)</span></div> 
                    </div>
                    <div className="col-6">
                       <div><img className="mr-4" src={Weights} alt=""/> <span className="services-offered">Footwork and Weight Training</span></div> 
                    </div>
                </div>
                {/* <ul className="services-offered">
                    <li>Private Lessons</li>
                    <li>Semi-Private</li>
                    <li>Group Lessons (3+ players)</li>
                    <li>Clinics (focus on competition, fitness, skill development)</li>
                    <li>Cardio Tennis (aerobic workout while doing drills)</li>
                    <li>Footwork/Weight training (tennis oriented)</li>
                </ul> */}
                {/* <img className="cones" src={Cones} alt=""/> */}
            </div>
        </div>
        <div className="row">

            <div className="col-12 mt-5">
                <div className="pricing ">
                    <hr/>
                    <h2 className="my-5 pricing-title">Pricing</h2>
                    
                    <div className="pricing-info">
                        <div className="row price-item">
                            <div className="col-6">
                                <div>Private Lesson </div>
                            </div>
                            <div className="col-6 d-flex justify-content-end">
                                <div>$75</div>
                            </div>
                        </div>
                        <div className="row mt-3 price-item">
                            <div className="col-6">
                                <div>Semi Private </div>
                            </div>
                            <div className="col-6  d-flex justify-content-end">
                                <div>$40/player</div>
                            </div>
                        </div>
                        <div className="row mt-3 price-item">
                            <div className="col-6">
                                <div>Group Lesson/Clinics (3+ players) </div>
                            </div>
                            <div className="col-6 d-flex justify-content-end">
                                <div>$25/player</div>
                            </div>
                        </div>
                        <div className="row mt-3 price-item">
                            <div className="col-6">
                                <div>Hitting Sessions </div>
                            </div>
                            <div className="col-6 d-flex justify-content-end">
                                <div>$60</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row mt-5">
            <div className="col-12">
                <div className="banner-btnWrap text-center">
                    <Link className="SP-requestBtn" to="/request">Request Lesson</Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
// Icons from www.flaticon.com 

export default Services
