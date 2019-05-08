import React from 'react'
import Services from './Services'

const SP_Home = () => {
  return (
    <div className="SP_home">
        <div className="container SP_banner">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <h1 className="SP-title">Services and Pricing</h1>
                  {/* <span className="SP-intro">Each lesson is tailored based on student’s needs, age, level, and goals. Nothing fills me up more than seeing my students excel and achieve their goals.</span> */}
                  <div className="SP-intro">You deserve to have an incredible tennis experience in an encouraging and constructive environement. Lessons are designed to make learning enjoyable for everyone of all ages and all levels of play. </div>
              </div>
            </div>
          </div>
        </div>
        <Services/>
    </div>
  )
}

export default SP_Home
