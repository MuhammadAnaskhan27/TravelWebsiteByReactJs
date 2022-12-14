import { Component } from "react";
import "./Destination.css";


class DestinationData extends Component{
    render(){
        return(
           
            <div className="first-des">
                <div className="description-text">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>

                    </div>
                    <div className="image">
                        <img src={this.props.img1} alt="img" />
                        <img src={this.props.img2} alt="img" />

                    </div>
                </div>
            
            
        )
    }
    
}
export default DestinationData;