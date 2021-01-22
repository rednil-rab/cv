import React from 'react';
import { Component } from 'react';

class Form extends Component {

    render() {
        return (
            <div className="bl-form">
                <div id="nameDiv" className="input-div">
                    <label>Name</label>
                    <input className="top-input" type="text"></input>
                </div>
                <div id="PhoneDiv" className="input-div">
                    <label>Phone Number</label>
                    <input className="top-input" type="text"></input>
                </div>
                <div id="mailDiv" className="input-div">
                    <label>E-mail</label>
                    <input className="top-input" type="text"></input>
                </div>
                <div id="subjectDiv" className="input-div">
                    <label>Subject</label>
                    <input className="top-input" type="text"></input>
                </div>
                <div id="contentDiv" className="input-div">
                    <label>Content</label>
                    <textarea className="content-input top-input"></textarea>
                </div>
                <div id="submitDiv" className="input-div">
                    <button className="bl-send-btn">submit</button>
                </div>
            </div>
        )
    }
}

export default Form;