
import React from 'react';
import { Component } from 'react';
import { Route } from 'react-router-dom';
import './home.css'

class Home extends Component {

    render() {
        return (
            <div>
                <Route exec path="/home" >
                    <div className="main-container">
                        <div className="text-container">
                            <h1>Hi,</h1>
                            <h1>I'm Bar,</h1>
                            <h1>A Web developer.</h1>
                            <h3>Frontend developer / Fullstack developer.</h3>
                            <div className="talk-btn">
                                <h3>Let's talk</h3>
                            </div>
                        </div>

                    </div>


                </Route>
            </div>
        )
    }
}

export default Home;