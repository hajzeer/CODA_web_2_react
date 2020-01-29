import React, {Component} from 'react';

import netia from './media/netia logo.png';
import orange from './media/orange logo.png';
import maxinvest from './media/maxinvest logo.png';
class Footer extends Component {


    render(){
        return(
            <div>
                <div className="footer-title">
                    <h1>Nasi partnerzy:</h1>
                </div>
                <div>
                    <img className="footer-maxinvest" src={maxinvest} alt="max-invest"/>
                    <img className="partners-logo" src={netia} alt="netia"/>
                    <img className="partners-logo" src={orange} alt="orange"/>
                </div>
                <div className="footer-creator">
                    <p className="footer-creator">Designed by: Krzysztof Hajder | Powered by: ReactJS</p>
                </div>
            </div>
        )
    }

} export default Footer;