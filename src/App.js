import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';

import './App.css';

import Services from './Services.js';
import Menu from './Menu.js';
import Footer from './Footer.js';

import kamera from './media/kamera.jpg';
import ppoz from './media/ppoz.jpg';
import internet from './media/internet.jpeg';
import domofon from './media/domofon.jpg';

import netia from './media/netia logo.png';
import orange from './media/orange logo.png';
import maxinvest from './media/maxinvest logo.png';
import kaufland from './media/Kaufland logo.png';
import koala from './media/koala logo.jpg';

import logo from './media/logo.jpg';



class App extends Component {

  state = {
    services: [
      {title: 'MONITORING',img:kamera,disc:'', id:0},
      {title: 'PPOŻ.',img:ppoz,disc:'', id:1 },
      {title: 'INTERNET',img:internet,disc:'', id:2},
      {title: 'MONTAŻ DOMOFONÓW',img:domofon,disc:'', id:3},
    ],
    partners: [
      {name: 'maxinvest', img:maxinvest, id:0},
      {name:'orange', img: orange, id:1},
      {name: 'netia',img: netia, id:2},
      {name:'kaufland', img: kaufland, id:3},
      {name:'koala', img: koala, id:4},
    ]
  }

  render() {
    return(
      <div className="App">
        <Fade top>
          <div>
            <img
              className="logo"
              src={logo}
              alt="logo"
            />
          </div>
        </Fade>

        <div>
          <Menu/>
        </div>
        <div>
          <Services services={this.state.services} />
        </div>
        <div>
          <Footer partners={this.state.partners}/>
        </div> 
      </div>
    )
  };
}

export default App;