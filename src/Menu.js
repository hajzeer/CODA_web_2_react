import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';
//import Pulse from 'react-reveal/Pulse';

import contactbutton from './media/kontakt button.png';

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
            <div>                            
                <img
                    className="contact-button"
                   src={contactbutton}
                   alt="contact-button"
                   onClick={this.handleSubmit}
                />       
                                            
                <Fade right when={this.state.show}>
                    <div className="contact">            
                        <ul className="list-1">
                            <li>Grupa CODA  </li>
                            <li>Chrobrego 1/1A 41-500 Chorzów</li>
                        </ul>
                        <ul>
                            <li>Kamil </li>              
                            <li>kamil@codagroup.pl</li>
                            <li>+48 123-456-789</li>
                        </ul>                
                    </div>            
                </Fade>
                
          </div>         
        )
    }

} export default Menu;