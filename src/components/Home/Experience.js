import React from 'react'
import CrissStanding from '../../images/crissStanding.png'

const Experience = () => {
  return (
      <div className="experience">
      <hr/>
        <h2 className="text-center experience-title">Experience</h2>
        
        <p className="experience-content">
          <ul>
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-12 experience-listed">              
                  <li data-aos="fade-in" data-aos-duration="1500">Coaching both adults & kids, all levels from beginners to advanced/nationally competitive.</li>
                  <li data-aos="fade-in" data-aos-duration="1500" className="mt-5 exp-middleLeft">Coaching the fundamentals of the sport to novice players of all ages (5 years old and up).</li>
                  <li data-aos="fade-in" data-aos-duration="1500" className="mt-5">Coaching High School tennis, bringing the team (Harvard-Westlake) into the finals of CIF, along with other coaching staff.</li>
                </div>
                <div className="col-lg-4 col-12 mx-auto">
                  <img className="crissStanding" src={CrissStanding} alt="Criss standing hugging racquet"/>
                </div>
                <div className="col-lg-4 col-12 experience-listed">
                  <li data-aos="fade-in" data-aos-duration="1500" className="mt-md-4 mt-2">Working with aspiring juniors, women’s clinics, seniors, etc.</li>
                  <li data-aos="fade-in" data-aos-duration="1500" className="mt-5 exp-middleRight">Working with top ranked juniors, ranked as high as Top 5 in their age group in Southern California.</li>
                  <li data-aos="fade-in" data-aos-duration="1500" className="mt-5">Training with recreational players who are in search of a great workout and a better approach to health-and-fitness.</li>
                </div>
              </div>
            </div>
          </ul>
        </p>
      </div>
  )
}

export default Experience
