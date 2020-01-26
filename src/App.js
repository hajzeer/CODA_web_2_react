import React, {Component} from 'react';

import './App.css';

import netia from './media/netia logo.png';
import orange from './media/orange logo.png';

import Services from './Services.js';
import Menu from './Menu.js';

import kamera from './media/kamera.jpg';
import ppoz from './media/ppoz.jpg';
import internet from './media/internet.jpeg';
import domofon from './media/domofon.jpg';

class App extends Component {

  state = {
    services: [
      {title: 'MONITORING',img:kamera,disc:'', id:0},
      {title: 'PPOŻ.',img:ppoz,disc:'', id:1 },
      {title: 'INTERNET',img:internet,disc:'', id:2},
      {title: 'MONTAŻ DOMOFONÓW',img:domofon,disc:'', id:3},
    ]
  }

  render() {
    return(
      <div className="App">
        <div>
          <Menu/>
        </div>
        <div>
          <Services services={this.state.services} />
        </div>
        <div>
          <div className="footer-title">
            <h1>Nasi partnerzy:</h1>
          </div>
          <div>
            <img className="partners-logo" src={netia} alt="netia"/>
            <img className="partners-logo" src={orange} alt="orange"/>
          </div>
        </div> 
      </div>
    )
  };
}

export default App;