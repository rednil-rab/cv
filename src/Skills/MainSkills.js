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
                            <h1>Skills & <br className="mobBr"></br>Experience</h1><br className="deskBr mobBr"></br>
                            <h3>Experienced with HTML5, CSS, <br className="mobBr"></br>Javascript, React.js,<br className="deskBr"></br>
redux,<br className="mobBr"></br> node.js, jQuery, Git, Typescript,<br className="mobBr"></br> SQL, Ajax,<br className="deskBr"></br>
jira.
                            </h3>
                            <h3><u>2019 - present</u></h3>
                            <div className="flex-text-skills">
                                <h3><strong>Dolphin Soft,</strong> Netanya</h3>
                                <ul className="round">
                                    <li>Building one-page interactive rich media ads.</li>
                                    <li>Development and maintenance of several systems<br className="mobBr"></br> with unique functionalities. for various small buisnesses</li>
                                    <li>Constructing and maintaining landing pages for <br className="mobBr"></br>a major corporation</li>
                                    <li>Writing and executing SQL queries</li>
                                    <li>Analyzing google analytics data</li>
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