import React, {Component} from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import Flyer1 from '../../images/crissflyer1.jpeg'
import Flyer2 from '../../images/crissflyer2.jpeg'

class SummerCamp extends Component {
    
  render() {
      return (
        <div className="summercamp">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6 text-center"><img className="imageflyer1" src={Flyer1} alt="Flyer1 for Summer Camp"/></div>
              <div className="col-12 col-lg-6 text-center"><img className="imageflyer2" src={Flyer2} alt="Flyer2 for Summer Camp"/></div>
            </div>
          </div>
        </div>
  )}
}
// Icons from www.flaticon.com 

export default SummerCamp
