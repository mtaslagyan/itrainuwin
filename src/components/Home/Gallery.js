import React from 'react'
import gal1 from '../../images/gal1.png'
import gal2 from '../../images/gal2.png'
import gal3 from '../../images/gal3.png'
import gal4 from '../../images/gal4.png'
import gal5 from '../../images/gal5.png'
import gal6 from '../../images/gal6.png'
import gal7 from '../../images/gal7.png'
import gal8 from '../../images/gal8.jpeg'
import gal9 from '../../images/gal9.jpeg'
import gal10 from '../../images/gal10.jpeg'
import gal11 from '../../images/gal11.jpeg'
import gal12 from '../../images/gal12.jpeg'


const Gallery = () => {
  return (
    <div>
      <div className="col-12 gallery px-0">
          <img data-aos="zoom-in" data-aos-duration="500" src={gal1} alt=""/>
          <img data-aos="zoom-out" data-aos-duration="500" src={gal2} alt=""/>
          <img data-aos="zoom-in" data-aos-duration="500" src={gal3} alt=""/>
          <img data-aos="zoom-out" data-aos-duration="500" src={gal4} alt=""/>
          <img data-aos="zoom-in" data-aos-duration="500" src={gal5} alt=""/>
          <img data-aos="zoom-out" data-aos-duration="500" src={gal6} alt=""/>
          <img data-aos="zoom-in" data-aos-duration="500" src={gal7} alt=""/>
          <img data-aos="zoom-out" data-aos-duration="500" src={gal8} alt=""/>
          <img data-aos="zoom-in" data-aos-duration="500" src={gal9} alt=""/>
          <img data-aos="zoom-out" data-aos-duration="500" src={gal10} alt=""/>
          <img data-aos="zoom-in" data-aos-duration="500" src={gal11}alt=""/>
          <img data-aos="zoom-out" data-aos-duration="500" src={gal12} alt=""/>
      </div>
    </div>
  )
}

export default Gallery
