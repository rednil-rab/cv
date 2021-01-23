
import React from 'react';
import { Component } from 'react';
import { Route } from 'react-router-dom';
import './home.css'
import image from './giantface.jpg'

class Home extends Component {

    render() {
        return (
            <div className="main-home">
                <Route exec path="/home" >
                    <div className="main-container-home">
                        <div className="text-container-home">
                            <h1>Hi,</h1>
                            <h1>I'm Bar,</h1>
                            <h1>A Web developer.</h1>
                            <h3>Frontend developer / Fullstack developer.</h3>
                            <a href="/contact"><div className="talk-btn-home">
                                <h3>Let's talk</h3>
                            </div></a>
                        </div>

                    </div>

                <img className="giant-face" src={image}></img>
                </Route>
            </div>
        )
    }
}

export default Home;