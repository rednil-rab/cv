import React from 'react';
import { Component } from 'react';
import { Route } from 'react-router-dom';
import './contact.css'
import { connect } from 'react-redux';
import Form from './Form'

class Contact extends Component {

    render() {
        return (

                <Route exec path="/contact" >
                    <div className="main-container">
                        <div className="text-container-contact text-container">
                            <h1>Let’s talk</h1>
                            <h3>I always love to hear about new opportunities.</h3>
                            {this.props.loading ? <div className="lds-dual-ring"></div> : <Form />}
                            
                            
                        </div>

                    </div>
                </Route>
        )
    }
}

const mapstateToProps = state => {
    return {
        loading: state.loading,
    };
}

export default connect(mapstateToProps)(Contact);