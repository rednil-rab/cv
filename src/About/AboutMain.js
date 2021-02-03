
import React from 'react';
import { Component } from 'react';
import { Route } from 'react-router-dom';
import './about.css'

class About extends Component {

    render() {
        return (
            <div>
                <Route exec path="/about" >
                    <div className="main-container-about">
                        <div className="text-container-about">
                            <h1>Hi, I'm Bar.</h1><br className="deskBr"></br>
                            <h3>And for the past 2 years i've been working <br className="mobBr"></br> as a <br className="deskBr"></br>Frontend 
                            developer.<br className="deskBr"></br><br className="deskBr"></br><br className="mobBr"></br><br className="mobBr"></br>

                            I’m a hard working, problem <br className="mobBr"></br>solving, motivated,<br className="deskBr"></br>
                            self learning, <br className="mobBr"></br> independent employee.<br className="deskBr"></br><br className="deskBr"></br>
                            <br className="mobBr"></br><br className="mobBr"></br><br className="mobBr"></br>

                            A family man, father<br className="mobBr"></br> of amazing little Gaia.<br className="deskBr"></br>

                            Fan of cinema, comic books and <br className="mobBr"></br>video games.<br className="deskBr"></br><br className="deskBr"></br>
                            </h3>
                            <div className="flex-text-about">
                                <h3 className="lang">Languages:</h3>
                                <h3>                             Hebrew - native<br></br>
                                        English - native level</h3>
                            </div>

                        </div>

                    </div>


                </Route>
            </div>
        )
    }
}

export default About;