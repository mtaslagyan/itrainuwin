
import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Request_Sticky extends Component {
  state = {
      modal: false,
      firstname : null,
      lastname : null,
      lessontype: null,
      age: null,
    }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  toggle = () => {
    console.log(this.state.modal)
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
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    this.toggle();
    e.preventDefault();
  }

  render() {
    console.log(this.state)
    return (

      <div>
        <Button className="req_sticky-btn" onClick={this.toggle}>Request Lesson</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Request a Lesson/Availability</ModalHeader>
          <ModalBody>
            <form onSubmit={this.handleSubmit}>
              <p className="bot-field">
                <label>Don’t fill this out: <input name="bot-field"/></label>
              </p>
              <div>
                <label htmlFor="firstname">First Name: <br/></label> 
                <input onChange={this.handleChange} type="text" name="firstname"/>
              </div>
              <div>
                <label htmlFor="lastname">Last Name: <br/></label> 
                <input onChange={this.handleChange} type="text" name="lastname"/>
              </div>
              <div>
                <label htmlFor="lessontype">Lesson Type: <br/></label> 
                <input onChange={this.handleChange} type="text" name="lessontype"/>
              </div>
              <div>
                <label htmlFor="age">Age: <br/></label> 
                <input onChange={this.handleChange} type="number" name="age"/>
              </div>
              
            </form>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" color="primary" >Submit Request</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Request_Sticky;