import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';

import logo from './media/logo.jpg';


class Menu extends Component {
    constructor(){
        super();
        this.state = {
            show: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({show: !this.state.show})
    }

    render(){
        return(
            <div >
                <Fade top>          
                    <img
                    className="logo"
                    src={logo}
                    alt="logo"
                    />
                    
                    <button
                    className="b1"
                    onClick={this.handleSubmit}
                    >
                        <b>Kontakt</b>
                    </button>

                </Fade>
            
                <Fade left when={this.state.show}>
                    <form className="contact">            
                        <ul className="list-1">
                            <li>Grupa CODA  </li>
                            <li>Chrobrego 1/1A 41-500 Chorzów</li>
                        </ul>
                        <ul>
                            <li>Kamil </li>              
                            <li>kamil@codagroup.pl</li>
                            <li>+48 123-456-789</li>
                        </ul>                
                    </form>            
                </Fade>
                
          </div>         
        )
    }

} export default Menu;