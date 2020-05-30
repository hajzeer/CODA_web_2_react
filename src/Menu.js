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
                            <li><span className="company__name">Grupa CODA</span></li>
                            <br/>
                            <li><a className="contact__data" href="https://goo.gl/maps/b6dzvJTXp7DhXcL18">ul. Bolesława Chrobrego 1/1A<br/>41-500 Chorzów</a></li>
                            <br/>
                            <li><a className="contact__data" href="mailto: kamil@grupacoda.pl">kamil@grupacoda.pl</a></li>
                            <br/>
                            <li><a className="contact__data" href="tel: +48 518 781 784">518 781 784</a></li>
                        </ul>
                    </div>
                </Fade>
          </div>
        )
    }

} export default Menu;