import React, {Component} from 'react';


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
            <div className="footer">
                <div>
                    <h1  className="footer-title">Nasi partnerzy:</h1>
                </div>
                <div className="partners-list">    
                    {partnerList}
                </div>
            </div>

        )
    }

} export default Footer;