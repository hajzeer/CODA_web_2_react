import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';




class Services extends Component {

    render(){ 
        const {services} = this.props;
        const serviceList = services.map(service => {      
            return(            
            <div className="service" key={service.id}>
                <Fade  left cascade>
                    <div>
                        <form className="service-form">
                            <br/><br/>
                            <img
                                className="service-img"
                                src={service.img}
                                alt={service.title}                           
                            />
                            <h1> { service.title }   </h1>                            
                                <div className="ser-disc-form">
                                       <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempus eget lectus vel commodo. Cras non dolor pellentesque, gravida velit non, auctor quam. Fusce blandit posuere diam. Nullam sagittis metus a eleifend condimentum. Aliquam auctor tristique pretium. Suspendisse a lectus sit amet justo semper sodales. </p>                                   
                                </div>                                                            
                            <br/>                            
                        </form>                                     
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