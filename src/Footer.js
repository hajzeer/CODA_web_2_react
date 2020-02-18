import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';

import logo from './media/logo.jpg';


class Footer extends Component {


    render(){
        const {partners} = this.props;
        const partnerList = partners.map(partner => {
            return(
                <div className="partners" key={partner.id}>
                    <ul >
                        <li>
                        <img  className="footer-img" src={partner.img} alt={partner.name}/>
                        </li>
                    </ul>
                </div>
            )
        });

        return(
            <Fade bottom>
            <div className="footer">
                <div>
                    <h1  className="footer-title">Nasi partnerzy:</h1>
                </div>
                <div className="partners-list">    
                    {partnerList}
                </div>
                <div className="footer-designer">
                    <img
                        className="footer-logo"
                        src={logo}
                        alt="logo"
                    />
                    <br/>
                    Polityka prywatności:
                    <br/>
                    © 2020  Designed by Krzysztof Hajder for Grupa CODA Kamil Rzychoń
                    <br/>
                    All rights reserved
                </div>
            </div>
            </Fade>


        )
    }

} export default Footer;