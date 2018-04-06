import React from 'react';
import {Link} from "react-router-dom";

// gather other componets
//import otherComponent from "../otherComponent";

const TrailCard = (props) => {
	return(
        <div className="col-sm-6">
            <Link to={`/dashboard/${props.trailName}`}>
                <div className={`weather-card ${props.imgClass}`}>
                    <div className="top">
                        <div className="wrapper">
                                <h1 className="heading">{props.trailName}</h1>
                            <h3 className="location">{props.location}</h3>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
	);
}

export default TrailCard;