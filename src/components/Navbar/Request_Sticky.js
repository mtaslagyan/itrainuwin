import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

class Request_Sticky extends Component {
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

      <div>
        <a  target="blank" href="https://docs.google.com/forms/d/1-psI_och4kSnEA_8fEhFcPp9FMXL55M9R6JUyKWgrmE/edit" className="req_sticky-btn">Request Lesson</a>
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
                  {/* <label htmlFor="lessontype">Lesson Type: <br/></label>  */}
                  <input placeholder="Preferred Coach" onChange={this.handleChange} type="text" name="preferredcoach"/>
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
    );
  }
}

export default Request_Sticky;
