import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';

import './App.css';

import Services from './Services.js';
import Menu from './Menu.js';
import Footer from './Footer.js';

import kamera from './media/kamera.jfif';
import ppoz from './media/ppoz.jpg';
import internet from './media/internet.jpg';
import domofon from './media/domofon.jpg';

import netia from './media/netia logo.png';
import orange from './media/orange logo.png';
import maxinvest from './media/maxinvest logo.png';
import kaufland from './media/Kaufland logo.png';
import koala from './media/koala logo.jpg';
import impresjanet from './media/impresjanet logo.png';

import logo from './media/logo.jpg';



class App extends Component {

  state = {
    services: [
      {title: 'MONITORING',img:kamera,
        disc:'Poczuj się bezpiecznie i trzymaj pieczę nad swoim majątkiem z dowolnego miejsca na ziemi, z monitoringiem który założymy dla Ciebie z najwyższą jakością',
        id:0 },

      {title: 'PPOŻ.',img:ppoz,
          disc:'Nie czekaj na niekrzystny rozwój wypadków, zamontuj usługi PPOŻ już dziś i ciesz się na codzień spokojem i bezpieczeństwem swojego domu lub biura',
          id:1 },
      {title: 'INTERNET',img:internet,
          disc:'Jest to dziedzina, w której możemy pochwalić się największym doświadczeniem. Wszyscy z naszych zleceniodawców zaufali naszej jakości pracy, Ty również możesz nam zaufać',
          id:2 },
      {title: 'DOMOFONY',img:domofon,
         disc:'Jesteś właścicielem kamienicy, lub należysz do zarządu wspólnoty? Zaufało nam już wielu właścicieli kamienic w Chorzowie oraz Siemianowicach Śląskich. Dołącz do tego grona już dziś', 
         id:3 },
    ],
    partners: [
      {name: 'maxinvest', img:maxinvest, id:0},
      {name:'orange', img: orange, id:1},
      {name: 'netia',img: netia, id:2},
      {name:'kaufland', img: kaufland, id:3},
      {name:'koala', img: koala, id:4},
      {name:'impresjanet', img: impresjanet, id:5},
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