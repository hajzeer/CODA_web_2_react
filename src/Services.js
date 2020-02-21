import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';




class Services extends Component {

    render(){
        const {services} = this.props;
        const serviceList = services.map(service => {
            return(
            <div  className="service" key={service.id} >
                <Fade  left cascade>
                    <div >
                        <div   className="service-form">
                            <img
                                className="service-img"
                                src={service.img}
                                alt={service.title}
                            />
                            <Fade left>
                            <div className="ser-disc-form">
                                <h1> { service.title }   </h1>
                                <p> {service.disc} </p>
                            </div>
                            </Fade>
                        </div>
                    </div>

                </Fade>

            </div>
            )
        });

        return(
            <div className="service-list">
                {serviceList}
            </div>
        )
    }
}
export default Services;