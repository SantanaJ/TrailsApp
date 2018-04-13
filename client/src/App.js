import React, { Component } from 'react';

import './bootstrap.css';
import './main.css';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';

// import SignIn from "./components/SignIn";
// import SignUp from "./components/SignUp";
// import Home from "./components/Home";

import Splash from "./components/Pages/Splash";
import Homepage from "./components/Pages/Homepage";
import Dashboard from "./components/Pages/Dashboard";
import SignIn from "./components/Pages/SignIn";
import SignUp from "./components/Pages/SignUp";
import CreateTrail from "./components/Pages/CreateTrail";



class App extends Component {
  state = {
    username: "",
    password: "",
    auth: {
      userId:"",
      username:"",
      isAuthenticated:false
    }
  };

  componentWillMount(){
    axios.get("/auth/isAuthenticated").then((result)=>{
      const {userId, isAuthenticated,username} = result.data
      this.setState({
        auth:{
          userId,
          isAuthenticated,
          username
        }
      });
    });
  }

  handleChange = (event) => {
    const {name, value} = event.target;    
        // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    //call a sign In function
    const newUser = {
      username: this.state.username,
      password: this.state.password
    };
    this.setState({
      username: "",
      password: ""
    }); 
    const {name} = event.target;
    axios.post(name, newUser).then((data) => {
      if (data.data.isAuthenticated){
        const {userId, isAuthenticated,username} = data.data;
        this.setState({
          auth:{
            userId,
            isAuthenticated,
            username
          }
        });
      }
    });
  }

  handleLogout = (event) => {
    event.preventDefault();
    axios.get("/auth/logout").then((result)=>{
      this.setState({
        auth:{
          userId: "",
          username: "",
          isAuthenticated: false
        }
      });
    })
  };

  render() {
    // const loggedIn = this.state.auth.isAuthenticated;
    return (
      <Router>
        <div>

        <Route exact path="/" render={()=>{
            return <Splash />
        }} />

        <Route exact path="/signin" render={()=>{
            return <SignIn />
        }} />

        <Route exact path="/signup" render={()=>{
            return <SignUp />
        }} />

        <Route exact path="/homepage" render={()=>{
            return <Homepage />
        }} />

        <Route exact path="/dashboard/:id" render={(props)=>{
            return <Dashboard {...props}/>
        }} />

        <Route exact path="/createtrail" render={()=>{
            return <CreateTrail/>
        }} />

        </div>
      </Router>
    );
  }
}

export default App;