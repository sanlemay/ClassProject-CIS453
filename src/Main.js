import React, { Component } from "react";
import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Help from "./Help";




class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
			      <li><NavLink to="/help">How to Help</NavLink></li>
          </ul>
          <div className="content">
             <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/help" component={Help}/>
          </div>
        </div>
        
      </BrowserRouter>

  
     
    );
    
  }
 
}



export default Main;
