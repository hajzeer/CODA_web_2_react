import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';


import './App.css';
import './Services.js';


import Services from './Services.js';
import logo from './media/logo.jpg';
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
      {title: 'MONTAŻ DOMOFONÓW',img:domofon,disc:'', id:3}
    ],
    workers: [
      {name: 'Kamil Rzychoń', number:'+ 48-123-456-789', id:0},
      {name: 'Kamil Rzychoń', number:'+ 48-123-456-789', id:1}
    ]
  }

  render() {
    return(
      <div className="App">
        <Fade top>
          
          <img
            className="logo"
            src={logo}
            alt="logo"
          />     
            <form className="contact">            
              <ul className="list-1">
                <li>Grupa CODA Kamil Rzychoń</li>
                <li>Chrobrego 1/1A 41-500 Chorzów</li>
              </ul>
              <ul>
                <li>Kamil Rzychoń</li>              
                <li>kamil@codagroup.pl</li>
                <li>+ 48-123-456-789</li>
              </ul>     
          </form>
        </Fade>
        <div>
          <Services services={this.state.services} />
        </div>        
      </div>
    )
  };
}

export default App;