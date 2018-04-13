import React from 'react';
import {Link} from "react-router-dom";

const CreateTrail = (props) => {

    const divStyle = {
        'max-width': '18rem',
        'margin': 'auto'
    };

    return (
        <div>
            <nav className="navbar navbar-success bg-success">
                <Link className="navbar-brand" to="/">
                    <svg
                        fill="#000000"
                        height="38"
                        viewBox="0 0 24 24"
                        width="38"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z"/>
                        <path d="M0 0h24v24H0z" fill="none"/>
                    </svg>
                </Link>
            </nav>
            <section className="banner" role="banner">
                <div className="container">
                    <div className="col-md-10 col-md-offset-1">
                        <div className="banner-text text-center">

                            <h1>Create</h1>
                            <p>
                                a new trail
                            </p>

                            
                                <div className="card border-success mb-3 " style={divStyle}>

                                    <div className="card-body text-success">
                                        <label for="inputCity">Trail Name</label>
                                        <input type="text" className="form-control" id="inputCity"></input>
                                        &nbsp;
                                        <label for="inputCity">Latitude</label>
                                        <input type="text" className="form-control" id="inputCity"></input>
                                        &nbsp;
                                        <label for="inputCity">Longitude</label>
                                        <input type="text" className="form-control" id="inputCity"></input>
                                        &nbsp;
                                        <label for="inputCity">State | Providence</label>
                                        <input type="text" className="form-control" id="inputCity"></input>
                                        &nbsp;
                                        <label for="inputCity">National Park Name</label>
                                        <input type="text" className="form-control" id="inputCity"></input>

                                        <div className="card-footer bg-transparent border-success">
                                            <Link to="/homepage">
                                                <button type="button" className="btn btn-outline-success">ENTER</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                           

                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
};

export default CreateTrail;