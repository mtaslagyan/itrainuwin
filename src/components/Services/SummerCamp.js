import React, {Component} from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

class SummerCamp extends Component {
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
          here is the flyer
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

export default SummerCamp
