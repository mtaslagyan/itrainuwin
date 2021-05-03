import React, {Component} from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import Flyer1 from '../../images/flyer1.jpg'
import Flyer2 from '../../images/flyer2.jpg'

class SummerCamp extends Component {
    
  render() {
      return (
        <div className="summercamp">
          <div className="container">
          <div className="row">
                <div className="col-12 text-center">
                 <div className="banner-btnWrap text-center">
                    <a href="https://forms.gle/C8UAGW1CA2wL21K19" target="_blank" className="SP-requestBtn">Register Now!</a>
                  </div>
                </div>
            </div>
            <div className="row mt-5 summercamp-flyers">
              <div className="col-12 col-lg-6 text-center"><a target="_blank" href="https://forms.gle/C8UAGW1CA2wL21K19"><img className="imageflyer1" src={Flyer1} alt="Summer Tennis Camp for kids/juniors at Calabasas High SChool run by Criss and Josh"/></a></div>
              <div className="col-12 col-lg-6 text-center mt-5 mt-lg-0"><a target="_blank" href="https://forms.gle/C8UAGW1CA2wL21K19"><img className="imageflyer2" src={Flyer2} alt="Summer Tennis Camp for kids/juniors at Calabasas High SChool run by Criss and Josh"/></a></div>
            </div>
          </div>
        </div>
  )}
}
// Icons from www.flaticon.com 

export default SummerCamp
