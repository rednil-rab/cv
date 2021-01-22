import React from 'react';
import { Component } from 'react';
import emailjs from 'emailjs-com';

class Form extends Component {


    sendEmail(e) {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

        emailjs.sendForm('service_7egxwda', 'template_lw6b5la', e.target, 'user_TCXMaNyjBwQF4ayKFjyN3')
            .then((result) => {
                window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
            }, (error) => {
                console.log(error.text);
            });
    }
    render() {
        return (

            <form onSubmit={this.sendEmail}>
                <div className="bl-form">
                    <div id="nameDiv" className="input-div">
                        <label>Name</label>
                        <input name="from_name" className="top-input" type="text"></input>
                    </div>
                    <div id="PhoneDiv" className="input-div">
                        <label>Phone Number</label>
                        <input name="phone" className="top-input" type="text"></input>
                    </div>
                    <div id="mailDiv" className="input-div">
                        <label>E-mail</label>
                        <input name="e_mail" className="top-input" type="text"></input>
                    </div>
                    <div id="subjectDiv" className="input-div">
                        <label>Subject</label>
                        <input name="subject" className="top-input" type="text"></input>
                    </div>
                    <div id="contentDiv" className="input-div">
                        <label>Content</label>
                        <textarea name="message" className="content-input top-input"></textarea>
                    </div>
                    <div id="submitDiv" className="input-div">
                        <input type="submit" className="bl-send-btn" value="Submit"></input>
                        
                    </div>
                </div>
            </form>


        )
    }
}

export default Form;