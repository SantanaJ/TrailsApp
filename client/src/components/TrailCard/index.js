import React from 'react';
import {Link} from "react-router-dom";

// gather other componets
//import otherComponent from "../otherComponent";




const TrailCard = (props) => {
    console.log(props);
	return(
        <div className="col-sm-6">
            <Link to={
                {
                    search: "",
                    pathname:`/dashboard`,
                    state: { trail: props.trail }
                }}
            >
                <div className={`weather-card ${props.imgClass}`}>
                    <div className="top">
                        <div className="wrapper">
                                <h1 className="heading">{props.trail.name}</h1>
                            <h3 className="location">{props.trail.state}</h3>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
	);
}

export default TrailCard;