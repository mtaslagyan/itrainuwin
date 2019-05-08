import React from 'react'
import woman1 from '../../images/woman1.jpeg'
import woman2 from '../../images/woman3.jpeg'
import man1 from '../../images/man2.jpeg'



const Testimonials = () => {
  return (
    <div class="testimonials">
      <h2 className="testimonials-title">Testimonials</h2>
      <hr class="testimonials-divider"/>
      <div className="row">
        <div className="col">
            <img src={woman1} alt=""/>
            <div className="text-center">" Lorem ipsum dolor sit amet, consectetur adipisicing elit."</div> 
        </div>
        <div className="col">
            <img src={man1} alt=""/>
            <div className="text-center">" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam."</div> 
        </div>
        <div className="col">
            <img src={woman2} alt=""/>
            <div className="text-center">" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, amet consectetur a! "</div> 
        </div>
      </div>
      <div className="row">
          <div className="col">
              <img src={man1} alt=""/>
              <div className="text-center">" Lorem ipsum dolor sit amet, consectetur adipisicing elit."</div> 
              
          </div>
          <div className="col">
              <img src={woman2} alt=""/>
              <div className="text-center">" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, amet consectetur a!"" </div> 
          </div>
          <div className="col">
              <img src={woman1} alt=""/>
              <div className="text-center">"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam. "</div> 
          </div>
      </div>
    </div>
  )
}

export default Testimonials
