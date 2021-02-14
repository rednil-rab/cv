
import React from 'react';
import { Component } from 'react';
import { Route } from 'react-router-dom';
import portfolio from './portfolio';
import Item from './Item';
import './work.css';
import * as utils from '../utils';


class Work extends Component {

    render() {
        const content = portfolio.map((item, index) =>
            <Item
                key={utils.ID()}
                image={item.image}
                image2={item.image2}
                name={item.name}
                campaign={item.campaign}
                link={item.link}
                id={index}
            />
        )
        return (

                <Route exec path="/work" >
                    <div className="main-container">
                        <div className="text-container-work">
                            <h1>Work</h1>
                            <div className="portfolio-div">
                                {content}
                            </div>
                        </div>

                    </div>
                </Route>
        )
    }
}

export default Work;