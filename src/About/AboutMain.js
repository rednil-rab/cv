
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
                            <h3>For the past 2 year I’m working <br className="mobBr"></br> as a Frontend <br className="deskBr"></br>
                            developer.<br className="deskBr"></br><br className="mobBr"></br><br className="mobBr"></br>

                            I’m a hard hard worker, problem <br className="mobBr"></br>solver, motivated,<br className="deskBr"></br>
                            self learner <br className="mobBr"></br>and independent employee.<br className="deskBr"></br><br className="deskBr"></br>
                            <br className="mobBr"></br><br className="mobBr"></br><br className="mobBr"></br>

                            A family person, father<br className="mobBr"></br> of amazing little Gaia.<br className="deskBr"></br>

                            Fan of movies, comic books and <br className="mobBr"></br>video games.<br className="deskBr"></br><br className="deskBr"></br>
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