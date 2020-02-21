import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';


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
                            <li>Grupa CODA Kamil Rzychoń</li>
                            <br/>
                            <li>ul. Bolesłąwa Chrobrego 1/1A<br/>41-500 Chorzów</li>
                            <br/>
                            <li>Kamil Rzychoń</li>
                            <li>kamil@grupacoda.pl</li>
                            <li>+48 518 781 784</li>
                        </ul>
                    </div>
                </Fade>
          </div>
        )
    }

} export default Menu;