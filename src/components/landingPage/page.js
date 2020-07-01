import React, { Component } from 'react'
import NavBar from "./nav";
import Footer from "./footer"

class LandingPage extends Component {
    render() { 
        return ( 
            <div>
                <div><NavBar/></div>
                <div>Search</div>
                <div> Box </div>
                <div><Footer/></div>
            </div>
         );
    }
}
 
export default LandingPage;