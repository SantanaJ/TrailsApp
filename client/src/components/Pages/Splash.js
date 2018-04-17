import React from 'react';
import {Link} from "react-router-dom";
import "./pages.css";

const Splash = (props) => {
    return (
        <div>
            <section className="banner" role="banner">
                <div className="container">
                    <div className="col-md-10 col-md-offset-1">
                        <div className="banner-text text-center">

                            <h1>Trails</h1>
                            <p>Discovering uncharted areas</p>

                            <p className="text-center-auto">
                                <Link to="/signin">
                                    <button type="button" className="btn btn-outline-success">Log In</button>
                                </Link>
                                &nbsp;
                                <Link to="/signup">
                                    <button type="button" href="signup.html" className="btn btn-outline-success">Sign Up</button>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default Splash;