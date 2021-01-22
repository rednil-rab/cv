
import React from 'react';
import { Component } from 'react';
import { Route } from 'react-router-dom';
import './about.css'

class About extends Component {

    render() {
        return (
            <div>
                <Route exec path="/about" >
                    <div className="main-container">
                        <div className="text-container">
                            <h1>Hi, I'm Bar.</h1><br></br>
                            <h3>For the past 2 year I’m working as a Frontend<br></br>
                            developer.<br></br>

                            I’m a hard hard worker, problem solver, motivated,<br></br>
                            self learner and independent employee.<br></br><br></br>


                            A family person, father of amazing little Gaia.<br></br>

                            Fan of movies, comic books and video games.<br></br><br></br>
                            </h3>
                            <div className="flex-text">
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