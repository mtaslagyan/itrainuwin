import React from 'react'
import Brain from '../../images/brain.png'
import Gym from '../../images/gym1.png'
import Gym2 from '../../images/gym2.png'
import Tennis from '../../images/tennis.png'

const Teaching = () => {
  return (
    <div className="container teachingStyle">
    <h2 className="teachingStyle-title text-center mb-4">My Philosophy</h2>
        
        <div className="row">
          <div className="col-12 text-center">
            <div className="teachingStyle-intro">
              I believe in taking a holistic approach when coaching my students in order to help them attain all of their personal and performance goals. That is why my coaching style is designed to target 3 different aspects: 
            </div>
            
          </div>
          {/* focuses not only on fitness enhancement and perfecting technique, but also on mental toughness and strategy.  */}
        </div>
        <div className="row text-center">
          <div className="col-4">
            <img className="teaching-icons mt-5 mb-3" src={Gym2} alt=""/>
            <div className="icon-description">Fitness Enhancement</div>
          </div>
          <div className="col-4">
            <img className="teaching-icons mt-5 mb-3" src={Brain} alt=""/>
            <div className="icon-description">Mental Toughness</div>
          </div>
          <div className="col-4">
            <img className="teaching-icons mt-5 mb-3" src={Tennis} alt=""/>
            <div className="icon-description">Technique</div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="teachingStyle-intro mt-5 text-center">
              Regardless of your current level and tennis-related goals, whether it is to perfect your technique, improve overall shot production, understand strategy/tactics, mental toughness, fitness/footwork, general mind-body awareness, I am certain that based on my experience, skills, and love for the sport, we will create a customized and tailored approach to your learning style.
            </div>
          </div>
        </div>
        <div className="text-center my-5">
          
          
          
        </div>
          
        
      {/* <div className="row">
        
        <div className="col-6">
        <div className="teachingStyle-content">I believe in taking a holistic approach when coaching my students in order to help them attain all of their personal and performance goals. That is why my coaching style focuses not only on fitness enhancement and perfecting technique, but also on mental toughness and strategy. 
        </div>
        </div>
        <div className="col-6">
          <div className="teachingStyle-content">
          Regardless of your current level and tennis-related goals, whether it is to perfect your technique, improve overall shot production, understand strategy/tactics, mental toughness, fitness/footwork, general mind-body awareness, I am certain that based on my experience, skills, and love for the sport, we will create a customized and tailored approach to your learning style.</div>
        </div>
      </div> */}
    </div>
  )
}
// Icons from www.flaticon.com 
export default Teaching




