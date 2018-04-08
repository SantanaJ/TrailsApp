import React from 'react';
import {Link} from "react-router-dom";

const SignUp = (props) => {

    const divStyle = {
        'max-width': '18rem'
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

                            <h1>Sign Up</h1>
                            <p>
                                & let's explore.
                            </p>

                            <center>
                                <div className="card border-success mb-3" style={divStyle}>

                                    <div className="card-body text-success">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            placeholder="Enter email"></input>
                                        &nbsp;
                                        <label for="exampleInputPassword1">Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="exampleInputPassword1"
                                            placeholder="Password"></input>
                                        <div className="card-footer bg-transparent border-success">
                                            <Link to="/homepage">
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-success">ENTER</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </center>

                        </div>
                    </div>
                </div>
            </section>
            <section id="intro" className="section intro no-padding">
                <div className="container-fluid">
                    <div className="row no-gutter">
                        <div className="col-md-6"></div>
                    </div>
                </div>

            </section>
        </div>

    )
};

export default SignUp;