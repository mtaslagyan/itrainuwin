import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';



// class Request_Sticky extends Component {

  
//     state = { 
//       name: '',
//       email: '',
//       message: '',
//       canSubmit: false,
//       submitResponse: false
//     };  
  

//   handleSubmit = e => {

//     e.preventDefault();

//     if (!this.state.canSubmit) {
//       return false;
//     }

//     let formData = {
//       "form-name": this.props.name,
//       "name": this.state.name,
//       "email": this.state.email,
//       "message": this.state.message,
//     }

//     fetch( window.location.href + "/", {
//       method: "POST",
//       headers: { "Content-Type": "application/x-www-form-urlencoded" },
//       body: qs.stringify(formData)
//     })
//     .then(
//       response => {
//         console.log(response)
//         console.log(response.status)
//         if (response.status > 199 && response.status < 300){
//           this.setState(prevState=>({
//             submitResponse: 'success'
//           }))
//         } else {
//           this.setState(prevState=>({
//             submitResponse: 'error'
//           }))
//         } 
//       }
//     )
//     .catch(
//       error => {
//         console.log(error)
//         this.setState(prevState=>({
//           submitResponse: 'error'
//         }))
//       }
//     );
//   }

//   handleChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//     if ( this.state.name !== '' && this.state.email !== '' && this.state.message !== '') {
//       console.log('fields filled in');
//       this.setState(prevState => ({
//         canSubmit: true
//       }));
//     } else {
//       this.setState(prevState => ({
//         canSubmit: false
//       }));
//     }
//   }

//   render() {

//     const { name, email, message, canSubmit } = this.state;
//     let containerClasses = 'jo-contact-form-container';
//     if (!canSubmit) { containerClasses += ' inactive'; }
//     if (this.props.colorScheme == 'dark' ) containerClasses += ' dark-bg';
//     let nameClasses = 'input100';
//     if (name !== '') nameClasses += ' has-val';
//     let emailClasses = 'input100';
//     if (email !== '') emailClasses += ' has-val';
//     let messageClasses = 'input100';
//     if (message !== '') messageClasses += ' has-val';


//     return <div className="jo-contact-form">
//       <h2 className="jo-contact-form-title">Contact</h2>
//       {!this.state.submitResponse &&
//         <form name={this.props.name} method="post" onSubmit={this.handleSubmit} data-netlify-recaptcha="true">
//           <div className={containerClasses}>
//             <input type="hidden" name="form-name" value="contactpageform"/>
//             <div>
//               <div className="wrap-input100 rs1-wrap-input100 validate-input">
//                 <label htmlFor="name">Your Name</label>
//                 <input className={nameClasses} type="text" name="name" value={name} onChange={this.handleChange}/>
//                 <span className="focus-input100"></span>
//               </div>
//               <div className="wrap-input100 rs1-wrap-input100 validate-input">
//                 <label htmlFor="email">Your Email</label>
//                 <input className={emailClasses} type="email" name="email" value={email} onChange={this.handleChange}/>
//                 <span className="focus-input100"></span>
//               </div>
//               <div className="wrap-input100 validate-input">
//                 <label htmlFor="message">Message</label>
//                 <textarea className={messageClasses} name="message" onChange={this.handleChange} value={message}/>
//                 <span className="focus-input100"></span>
//               </div>
//               {canSubmit && <LinkButton size="large" text="Send" linkType="form" />}
//               {!canSubmit && <LinkButton size="large" text="Send" linkType="form" inactive={true} />}
//             </div>
//           </div>
//         </form>
//       }
//       {this.state.submitResponse == 'success' &&
//         <div className="jo-contact-form-submission-message jo-contact-form-success">
//           <div>Thanks for the message! Expect a reply shortly.</div>
//         </div>
//       }
//       {this.state.submitResponse == 'error' &&
//         <div className="jo-contact-form-submission-message jo-contact-form-error">
//           <div>Your information was not sent. Please try again later.</div>
//         </div>
//       }
//     </div>
//   }
// }





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
    // console.log(this.state.modal)
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
      console.log(this.state + 'getting hereeeee');

    this.toggle();
    e.preventDefault();
  }

  render() {
    return (

      <div>
        <Button className="req_sticky-btn" onClick={this.toggle}>Request Lesson</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Request a Lesson/Availability</ModalHeader>
          <ModalBody>
            <form onSubmit={this.handleSubmit} name="request" method="post" action="/success" data-netlify="true" data-netlify-honeypot="bot-field">
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
              <Button type="submit" color="primary" >Submit Request</Button>
              <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Request_Sticky;