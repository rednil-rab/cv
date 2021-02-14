import React from 'react';
import { Component } from 'react';
import { Route } from 'react-router-dom';
import './skills.css'

class Skills extends Component {

    render() {
        return (

                <Route exec path="/skills" >
                    <div className="main-container">
                        <div className="text-container-skills text-container">
                            <h1>Skills & <br className="mobBr"></br>Experience</h1><br className="deskBr mobBr"></br>
                            <h3>Experienced with HTML5, CSS, <br className="mobBr"></br>Javascript, React.js,<br className="deskBr"></br>
redux,<br className="mobBr"></br> node.js, jQuery, Git, Typescript,<br className="mobBr"></br> SQL, Ajax, <br className="deskBr"></br>Bootstrap
and jira.
                            </h3>
                            <a href='/Resume - Bar Linder.pdf' download>
                            <div className='download-btn'>
                               Download Resume
                           </div>
                            </a>

                            <h3><u>2019 - present</u></h3>
                            <div className="flex-text-skills">
                                <h3><strong>Dolphin Soft,</strong> Netanya</h3>
                                <ul className="round">
                                    <li>Building one-page interactive rich <br className="mobBr"></br>media ads</li>
                                    <li>Constructing and maintaining<br className="mobBr"></br> landing pages for <br className="deskBr "></br>a large <br className="mobBr"></br>corporation</li>
                                    <li>Implementing creative design <br className="mobBr"></br>concepts while <br className="deskBr "></br>maintaining <br className="mobBr"></br><br className="deskBr "></br>standards and usability</li>
                                    <li>Consistently displaying creative<br className="mobBr"></br> thinking and input to improve <br className="deskBr "></br>current products.</li>
                                    <li>Writing and executing SQL queries</li>
                                    <li>Development and maintenance of several<br className="mobBr"></br> systems with unique <br className="deskBr "></br>functionalities. <br className="mobBr"></br>for various small buisnesses</li>
                                    <li>Analyzing google analytics data</li>
                                    <li> Learned critical thinking and better<br className="mobBr"></br> decision making while<br className="deskBr"></br> attending <br className="mobBr"></br>various meetings and conferences<br className="mobBr"></br> through zoom</li>
                                   
                                </ul>
                            </div>

                        </div>

                    </div>


                </Route>
        )
    }
}

export default Skills;