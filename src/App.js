import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Services from './components/Services/SP_Home'
import BannerImg from './images/crissbanner3.png'
import Qualifications from './components/Bio/Qualifications'
import Request_Sticky from './components/Navbar/Request_Sticky'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <img className="homeImg" src={BannerImg} alt="banner of Criss playing tennis with green to blue gradient overlay"/>
          <Navbar/>
          <Request_Sticky/>
          {/* <hr className="navbar-divider mt-0 mt-lg-2"/> */}
          <Switch>
            <Route exact path="/" activeStyle={{ color: 'red' }} component={Home}/>
            <Route exact path="/services" activeStyle={{ color: 'red' }} component={Services}/>
            <Route exact path="/qualifications" activeStyle={{ color: 'red' }} component={Qualifications}/>
          </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
