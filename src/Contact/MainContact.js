import React from 'react';
import { Component } from 'react';
import { Route } from 'react-router-dom';
import './contact.css'
import { connect } from 'react-redux';
import Form from './Form'
import * as actionType from '../store/action.js';
class Contact extends Component {

    render() {
        return (
            <div className="main-home">
                <Route exec path="/contact" >
                    <div className="main-container-contact">
                        <div className="text-container-contact">
                            <h1>Let’s talk</h1>
                            <h3>I always love to hear about new opportunities.</h3>
                            {this.props.loading ? <div className="lds-dual-ring"></div> : <Form />}
                            
                            
                        </div>

                    </div>
                </Route>
            </div>
        )
    }
}

const mapstateToProps = state => {
    return {
        loading: state.loading,
    };
}

export default connect(mapstateToProps)(Contact);