import React from 'react'
import quotesImage from '../../images/quotesImage.png'
import quotesImageEnd from '../../images/quotesImageEnd.png'



const Testimonials = () => {
  return (
    <div class="testimonials">
      <h2 className="testimonials-title">Testimonials</h2>
      <hr class="testimonials-divider"/>
      <div className="row">
        <div className="col-lg col-12">
            {/* <img src={woman1} alt=""/> */}
            <div className="card cardOnLeft" data-aos="slide-right" data-aos-duration="1000">
              <div className="card-body">
              <img src={quotesImage} alt=""/>
              {/* <span className="testimonials-quotes">"</span> */}
              <p className="testimonials-content  text-center px-3">Coach C-Rod has been like family to my children. She has been working with both of them for over 2 years and the improvement has been amazing. She is professional, fun and reliable. Thanks to her, my oldest daughter made her high school team. I highly recommend her!</p>
                <p className="testimonials-nameLeft   d-flex justify-content-end">- Claire, Woodland Hills</p>
              </div>
            </div>
        </div>
        <div className="col-lg col-12">
            {/* <img src={woman1} alt=""/> */}
            <div className="card cardOnRight" data-aos="slide-left" data-aos-duration="1000">
              <div className="card-body">
              <img className="quotesImageEnd" src={quotesImageEnd} alt=""/>
              {/* <span className="testimonials-quotes">"</span> */}
              <p className="testimonials-content  text-center px-3">Coach Criss is one of the best out there. She's truly knowledgable about the sport both tactically and technically. She cares so much about her students learning, improvement and success. I'd definitely recommend her to anyone looking for lessons!</p>
              <p className="testimonials-nameRight   d-flex justify-content-end">- Mariah, Chatsworth</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
