import React, {Component} from 'react';


import './App.css';

import Services from './Services.js';
import Menu from './Menu.js';
import Footer from './Footer.js';

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
          <Footer/>
        </div> 
      </div>
    )
  };
}

export default App;