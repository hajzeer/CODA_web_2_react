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
                            <li>ul. Bolesława Chrobrego 1/1A<br/>41-500 Chorzów</li>
                            <li><p>kamil@grupacoda.pl</p></li>
                            <li><p>518-781-784</p></li>
                        </ul>
                    </div>
                </Fade>
          </div>
        )
    }

} export default Menu;