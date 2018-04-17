import React from 'react';
import {Link} from "react-router-dom";
import "./pages.css";
import axios from "axios";
import ReactDOM from 'react-dom';
import {OpenWeatherMap} from 'react-weather';

class Dashboard extends React.Component {
    state = {

        trail: {
            name: "",
            park: "",
            latitude: "",
            longitude: ""
        }
    }

    componentDidMount() {
        axios
            .get("/api/trail/" + this.props.match.params.id)
            .then((result) => {
                console.log(result.data);
                this.setState({trail: result.data})
            });
    }

    render() {

        return (

            <div>

                <nav className="navbar navbar-success bg-success">
                    <Link className="navbar-brand" to="/homepage">
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
                    <button
                        type="button"
                        className="btn btn-dark"
                        onClick={this.props.handleLogout}>Log Out
                    </button>
                </nav>

                <section className="banner" id="top">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="left-banner-content">
                                    <div className="text-content">
                                        <h2 className="trailname">{this.state.trail.name}</h2>
                                        <h5 className="parkname">{this.state.trail.park}</h5>

                                        <iframe
                                            className="googleMap"
                                            frameBorder="0"
                                            src={`https://www.google.com/maps/embed/v1/view?key=AIzaSyBqqFN4TDaFYBgsp-Rbq6eJYh35pw5Pplk&zoom=18&maptype=satellite&center=${this.state.trail.latitude},${this.state.trail.longitude}`}
                                            allowFullScreen></iframe>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="right-banner-content">
                                    <h5 className="dash-header">Write notes</h5>
                                    <div className="form-group">
                                        <textarea
                                            className="form-control note-pad"
                                            id="exampleFormControlTextarea1"
                                            rows="3"></textarea>
                                    </div>
                                    <Link to="/">
                                        <button type="button" className="btn btn-outline-warning">Send Email</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="best-offer" id="best-offer-section">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="best-offer-left-content">
                                <h3 className="dash-header">Current Weather</h3>   
                                   
                                
                                  
                                    
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="best-offer-right-content">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12">
                                            <h3 className="dash-header">Images</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );

    }
}

export default Dashboard;