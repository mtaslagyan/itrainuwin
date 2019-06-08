import React, {Component} from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import Single from '../../images/1man.png'
import Double from '../../images/2men.png'
import Group from '../../images/3ormore.png'
import Clinic from '../../images/clinic.png'
import Cardio from '../../images/cardio.png'
import Weights from '../../images/weights.png'

class Services extends Component {
    state = {
        modal: false,
        name : null,
        email : null,
        lessontype: null,
        age: null,
      }
  
    handleChange = (e) => {
      this.setState({
        [e.target.name] : e.target.value
      })
    }
  
    toggle = () => {
      const currentState = this.state.modal;
      this.setState({ 
        modal: !currentState 
      });
    };
  
    
  
    encode = (data) => {
      return Object.keys(data)
          .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
          .join("&");
    }
  
    handleSubmit = (e) => {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({ "form-name": "request", ...this.state })
      })
        .then(() => alert("Thank you for your submission!"))
        .catch(error => alert(error));
  
      this.toggle();
      e.preventDefault();
    }
    render() {
  return (
    <div className="services">
      <div className="container">
        <div className="row">
            <div className="col-12 services-info">
                <h2 className="mb-5 services-title">Services</h2>
                <div className="row">
                    <div className="col-lg-6 col-12">
                       <div><img className="mr-4" src={Single} data-aos="flip-right" data-aos-duration="1000" alt=""/> <span className="services-offered">Private Lessons</span></div> 
                    </div>
                    <div className="col-lg-6 col-12 mt-5 mt-lg-0">
                       <div><img className="mr-4" src={Double} data-aos="flip-right" data-aos-duration="1000" alt=""/> <span className="services-offered">Semi-Private Lessons</span></div> 
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-lg-6 col-12">
                       <div><img className="mr-4" src={Group} data-aos="flip-right" data-aos-duration="1000" alt=""/> <span className="services-offered">Group Lessons (3+ players)</span></div> 
                    </div>
                    <div className="col-lg-6 col-12 mt-5 mt-lg-0">
                       <div><img className="mr-4" src={Clinic} data-aos="flip-right" data-aos-duration="1000" alt=""/> <span className="services-offered">Clinics (competition, fitness, skill)</span></div> 
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-12">
                       <div><img className="mr-4" src={Cardio} data-aos="flip-right" data-aos-duration="1000" alt=""/> <span className="services-offered">Cardio Tennis (aerobic workout)</span></div> 
                    </div>
                    <div className="col-lg-6 col-12 mt-5 mt-lg-0">
                       <div><img className="mr-4" src={Weights} data-aos="flip-right" data-aos-duration="1000" alt=""/> <span className="services-offered">Footwork and Weight Training</span></div> 
                    </div>
                </div>
            </div>
        </div>
        <div className="row">

            <div className="col-12 mt-5">
                <div className="pricing">
                    <hr/>
                    <h2 className="my-5 pricing-title">Pricing</h2>
                    
                    <div className="pricing-info">
                        <div className="row price-item">
                            <div className="col-9">
                                <div>Private Lesson </div>
                            </div>
                            <div className="col-3 d-flex justify-content-end">
                                <div>$75</div>
                            </div>
                        </div>
                        <div className="row mt-3 price-item">
                            <div className="col-9">
                                <div>Semi Private </div>
                            </div>
                            <div className="col-3  d-flex justify-content-end">
                                <div>$40/player</div>
                            </div>
                        </div>
                        <div className="row mt-3 price-item">
                            <div className="col-9">
                                <div>Group Lesson/Clinics (3+ players) </div>
                            </div>
                            <div className="col-3 d-flex justify-content-end">
                                <div>$25/player</div>
                            </div>
                        </div>
                        <div className="row mt-3 price-item">
                            <div className="col-9">
                                <div>Hitting Sessions </div>
                            </div>
                            <div className="col-3 d-flex justify-content-end">
                                <div>$60</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row mt-5">
            <div className="col-12">
                <div className="banner-btnWrap text-center">
                    <Button className="SP-requestBtn" onClick={this.toggle}>Request Lesson</Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader className="form-header text-center" toggle={this.toggle}>Request a Lesson</ModalHeader>
                    <ModalBody>
                        <form onSubmit={this.handleSubmit} name="request" method="post" action="/success" data-netlify="true" data-netlify-honeypot="bot-field">
                        <p className="bot-field">
                            <label>Don’t fill this out: <input name="bot-field"/></label>
                        </p>
                        <div className="form-fields">
                            {/* <label htmlFor="name">* Name: <br/></label>  */}
                            <input className="form-required" placeholder="Name*" required onChange={this.handleChange} type="text" name="name"/>
                        </div>
                        <div className="form-fields">
                            {/* <label htmlFor="email">* Email: <br/></label>  */}
                            <input className="form-required" placeholder="Email*" required onChange={this.handleChange} type="email" name="email"/>
                        </div>
                        <div className="form-fields">
                            {/* <label htmlFor="phone">Phone: <br/></label>  */}
                            <input placeholder="Phone" onChange={this.handleChange} type="tel" name="phone"/>
                        </div>
                        <div className="form-fields">
                            {/* <label htmlFor="location">Preferred Location: <br/></label>  */}
                            <input placeholder="Preferred Location" onChange={this.handleChange} type="text" name="location"/>
                        </div>
                        <div className="form-fields">
                            {/* <label htmlFor="age">Age: <br/></label>  */}
                            <input placeholder="Age" onChange={this.handleChange} type="number" name="age"/>
                        </div>
                        <div className="form-fields">
                            {/* <label htmlFor="lessontype">Lesson Type: <br/></label>  */}
                            <input placeholder="Lesson Type" onChange={this.handleChange} type="text" name="lessontype"/>
                        </div>
                        <div className="form-fields">
                            {/* <label htmlFor="notes">About Yourself: <br/></label>  */}
                            <input placeholder="About Yourself" onChange={this.handleChange} type="text" name="notes" maxlength="300"/>
                        </div>
                        <div className="required text-center">* Required</div>
                        <div className="form-response text-center my-4">You will be contacted within 24 hours.</div>
                        <div className="form-buttons text-center">
                            <Button type="submit" color="success" className="mr-1">Submit</Button>
                            {/* <Button color="secondary" onClick={this.toggle}>Cancel</Button> */}
                        </div>

                        </form>
                    </ModalBody>
                </Modal>
                </div>
            </div>
        </div>
      </div>
    </div>
  )}
}
// Icons from www.flaticon.com 

export default Services
