import React, {Component} from 'react';
import {Link} from "react-router-dom";
import API from "../../utils/API";
import TrailCard from "../TrailCard";
import "./pages.css";

const divStyle = {
    'maxWidth': '18rem',
    'margin': 'auto'
};

class Homepage extends Component {
    state = {
        trails: []
    }

    componentDidMount() {
        this.loadTrail();
    }

    loadTrail = () => {
        API
            .getTrails()
            .then(response => this.setState({trails: response.data}))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <nav className="navbar navbar-success bg-success">
                   
                    <img className="profile-icon" src="https://png.icons8.com/metro/50/333333/gender-neutral-user.png"></img>
                   
                    
                    <button type="button" className="btn btn-dark" onClick={this.props.handleLogout}>Log Out</button>
                   
                </nav>

                <section className="banner" role="banner">
                    <div className="container">
                        <div className="col-md-10 col-md-offset-1">
                            <div className="banner-text text-center">
                                <h1>Choose A Trail</h1>
                                <p>to view</p>

                                <Link to="/CreateTrail">
                                    <img src="https://png.icons8.com/color/50/27ae60/plus.png"></img>
                                </Link>
                                <h6 divStyle={'margin:auto'}>Add a Trail</h6>

                                <div className="row">
                                    {this
                                        .state
                                        .trails
                                        .map((trail) => <TrailCard key={trail._id} trail={trail} trailName={trail} location={trail}/>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Homepage;