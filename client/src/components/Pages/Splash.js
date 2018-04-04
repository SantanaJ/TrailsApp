import React from 'react';
import {Link} from "react-router-dom";


const Splash = (props) =>{
    return (
    <div>
        <section className="banner" role="banner">
            <div className="container">
                <div className="col-md-10 col-md-offset-1">
                    <div className="banner-text text-center">

                        <h1>Trails</h1>
                        <p>Discovering uncharted areas</p>

                        <p>
                            <Link to="/SignIn">
                                <button type="button" className="btn btn-outline-success">Log In</button>
                            </Link>
                            &nbsp;
                            &nbsp;
                            <Link to="/SignUp">
                                <button type="button" href="signup.html" className="btn btn-outline-success">Sign Up</button>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section id="intro" className="section intro no-padding">
            <div className="container-fluid">
                <div className="row no-gutter">
                    <div className="col-md-6">
                           
                    </div>
                </div>
            </div>

        </section>
    </div>
    )
};


export default Splash;