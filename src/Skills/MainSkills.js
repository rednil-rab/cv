import React from 'react';
import { Component } from 'react';
import { Route } from 'react-router-dom';
import './skills.css'

class Skills extends Component {

    render() {
        return (
            <div>
                <Route exec path="/skills" >
                    <div className="main-container-skills">
                        <div className="text-container-skills">
                            <h1>Skills & Experience</h1><br></br>
                            <h3>Experienced with HTML5, CSS, Javascript, React.js,<br></br>
redux, node.js, jQuery, Git, Typescript, SQL, Ajax,<br></br>
jira and cross browser compatibility.
                            </h3>
                            <h3><u>2019 - present</u></h3>
                            <div className="flex-text-skills">
                                <h3><strong>Dolphin Soft,</strong> Netanya</h3>
                                <ul className="round">
                                    <li>Building one-page interactive ads.</li>
                                    <li>Developing several systems with unique functionalities.</li>
                                    <li>Building landing pages for corporations</li>
                                </ul>
                            </div>

                        </div>

                    </div>


                </Route>
            </div>
        )
    }
}

export default Skills;