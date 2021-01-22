import React from 'react';
import { Component } from 'react';
import { Route } from 'react-router-dom';
import './contact.css'
import Form from './Form'

class Home extends Component {

    render() {
        return (
            <div className="main-home">
                <Route exec path="/contact" >
                    <div className="main-container-contact">
                        <div className="text-container-contact">
                            <h1>Let’s talk</h1>
                            <h3>I always love to hear about new opportunities.</h3>
                            <Form />
                        </div>

                    </div>
                </Route>
            </div>
        )
    }
}

export default Home;