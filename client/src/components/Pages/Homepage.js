import React, {Component} from 'react';
import {Link} from "react-router-dom";
import API from "../../utils/API";
import TrailCard from "../TrailCard";
import "./pages.css";

class Homepage extends Component {
    state = {
        trails: []
    }

    componentDidMount() {
        this.loadTrail();
    }

    loadTrail = () => {
       API.getTrails()
        .then(response => this.setState({trails: response.data }))
        .catch(err => console.log(err));
    }

    // deleteTrail = id => {
    //     API.deleteTrail(id)
    //       .then(res => this.loadTrail())
    //       .catch(err => console.log(err));
    //   };


//     handleFormSubmit = event => {
//     event.preventDefault();
//     if (this.state.title && this.state.author) {
//       API.saveBook({
//         title: this.state.title,
//         author: this.state.author,
//         synopsis: this.state.synopsis
//       })
//         .then(res => this.loadBooks())
//         .catch(err => console.log(err));
//     }
//   };

    render() {
        return(
            <div>
            <nav className="navbar navbar-success bg-success">
                    <Link className="navbar-brand" to="/">
                        <svg fill="#000000" height="38" viewBox="0 0 24 24" width="38" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z"
                            />
                            <path d="M0 0h24v24H0z" fill="none" />
                        </svg>
                    </Link>
                </nav>

            <section className="banner" role="banner">
                <div className="container">
                    <div className="col-md-10 col-md-offset-1">
                        <div className="banner-text text-center">
                            <h1>Choose A Trail</h1>
                            <p>to view</p>

                            <Link to="/CreateTrail"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAMCSURBVGhD7ZpPT9RAGMb37H/jvy8kycaWnVZ3lWBiQqIxImcPXnHVD2CIN2MgRtZsF8EY9KJ4QFQCHOULCPEieMf1eXdfYixv6bTbmW42fZJfQrad933eznQ6nVIqVKiQPflN/7wT+DU38OrgFVhyW94q4bTUR/6t7sxVqnQuN+sPqZY65QTeBAx+A39guq0FnRt4K9SWYnA4+6LkMPIYRn6LRpMQeLugbr0gDI0bbkv9FE31AC7KttP0r3Mac6rMVY6jgBnJRLaomVqjdozTZqvh18MXcMXW5MRGWKWcnD4blWer53CVNoVkhlGblJtt9CYeThtyIgtgNsxkmGH+fyEmsIqaZjvp1J2dpMD2ST2bOW+c07gSqabY6sJI+8n6lAgdk9rEQVNzqucMPeykgDqMLd5qR4mOSW30UA/Znp542ZH6iW2wkJ1EvYIiJuRAepgrhFDjbDNeOPmLHEQPk4VgFv3MNg8XLa9xf+ivYgUMF7Lnzrtn2W60Ou8TQoAkmCyki7rCdqNFM4Pc+H+uLoy2b76/LXJv6T7bPig6JrUhKKaUKwx65QHbjRYKaUiNw0xtPGVr2YliSrnCYDJ6yXajhfvjk9Q4TK6F4LWZ7UYLhaxLjcPk3CNrbDdadJLUOEzfFzI4Q2uAbva61DhMztPvJNuN1sA8EDvv532+RPEC7wzbPVwoZEUKoovhQpbZZrzcpn9XCqKL0UIC7w7bjBdvh+5KgXQwVQiK+JX4dRdd+EgKpoOxQnQWi2Hx6+62FDAOE5sPmKm2ym/LJ9heMtEWjBw0D9Q1tpVOCDAtB7ZI4D1nO+lF25UYm1/FBDagR8G8e4Tt9Ka8NrFxj37PbBN7X7TFj+D0PVBMmjU0CjIvYl80zNAzxj/0oCeeDb0bOsppzak7m6ktyURvqB+IPcJp7Iif/vQZOvUK4B9qB0Np8mKjdpLD21enIKzNYGQZ7MlGD0LnUhsUMZ5rAZJoB/BS4F2mqwtm0VsfYLrzDwP0N/1Gx+gc7aV4oUKFMlCp9BeibgQccPa8DwAAAABJRU5ErkJggg=="></img></Link>
                            <center><h6>Add a Trail</h6></center>

                            <div className="row">
                                
                                {this.state.trails.map((trail) => <TrailCard key={trail._id} trail={trail} trailName={trail} location={trail}/>)}
                        
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