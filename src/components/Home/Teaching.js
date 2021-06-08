import React from 'react'
import Brain from '../../images/brain.png'
import Gym2 from '../../images/gym2.png'
import Tennis from '../../images/tennis.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Teaching = () => {
  return (
    <div className="container teachingStyle">
    <h2 className="teachingStyle-title text-center mb-4">Our Philosophy</h2>
        
        <div className="row">
          <div className="col-12 text-center">
            <div className="teachingStyle-intro">
              We believe in taking a holistic approach when coaching our students in order to help them attain all of their personal and performance goals. That is why our coaching style is designed to target 3 different aspects: 
            </div>
            
          </div>
          {/* focuses not only on fitness enhancement and perfecting technique, but also on mental toughness and strategy.  */}
        </div>
        <div className="row text-center">
          <div className="col-md-4 col-12">
            <img className="teaching-icons mt-5 mb-3" src={Gym2} data-aos="flip-right" data-aos-duration="1000" alt=""/>
            <div className="icon-description">Fitness Enhancement</div>
          </div>
          <div className="col-md-4 col-12">
            <img className="teaching-icons mt-5 mb-3" src={Brain} data-aos="flip-right" data-aos-duration="1000" alt=""/>
            <div className="icon-description">Mental Toughness</div>
          </div>
          <div className="col-md-4 col-12">
            <img className="teaching-icons mt-5 mb-3" src={Tennis} data-aos="flip-right" data-aos-duration="1000" alt=""/>
            <div className="icon-description">Technique</div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="teachingStyle-intro mt-5 text-center">
              Regardless of your current level and tennis-related goals, whether it is to perfect your technique, improve overall shot production, understand strategy/tactics, mental toughness, fitness/footwork, general mind-body awareness, we are certain that based on my experience, skills, and love for the sport, we will create a customized and tailored approach to your learning style.
            </div>
          </div>
        </div>
        <div className="text-center my-5">
      </div>
    </div>
  )
}
// Icons from www.flaticon.com 
export default Teaching




