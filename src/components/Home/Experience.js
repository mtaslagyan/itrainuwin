import React from 'react'
import CrissStanding from '../../images/crissStanding.png'
import Exp1 from '../../images/exp1.png'


const Experience = () => {
  return (
      <div className="experience">
      <hr/>
        <h2 className="text-center experience-title">Experience</h2>
        
        <p className="experience-content">
          <ul>
            <div className="container">
              <div className="row">
                <div className="col-4 experience-listed">              
                  <li>Coaching both adults & kids, all levels from beginners to advanced/nationally competitive.</li>
                  <li className="mt-5 exp-middleLeft">Coaching the fundamentals of the sport to novice players of all ages (5 years old and up).</li>
                  <li className="mt-5">Coaching High School tennis, bringing the team (Harvard-Westlake) into the finals of CIF, along with other coaching staff.</li>
                </div>
                <div className="col-4 mx-auto">
                  <img className="crissStanding" src={CrissStanding} alt="Criss standing hugging racquet"/>
                </div>
                <div className="col-4 experience-listed">
                  <li className="mt-4">Working with aspiring juniors, women’s clinics, seniors, etc.</li>
                  <li className="mt-5 exp-middleRight">Working with top ranked juniors, ranked as high as Top 5 in their age group in Southern California.</li>
                  <li className="mt-5">Training with recreational players who are in search of a great workout and a better approach to health-and-fitness.</li>
                </div>
                {/* <div id="div1" ></div>
                <div id="div2" ></div> */}
                {/* <svg width="500" height="500"><line x1="50" y1="50" x2="50" y2="50" stroke="#37a9fa"/></svg> */}
              </div>
            </div>
          </ul>
        </p>
      </div>
  )
}

export default Experience
