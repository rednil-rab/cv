
import React from 'react';
import { Component } from 'react';
import { Route } from 'react-router-dom';
import portfolio from './portfolio';
import Item from './Item'
import './work.css'



class Work extends Component {

    render() {
        const content = portfolio.map((item, index)=> 
            <Item
            image={item.image}
            image2={item.image2}
            name={item.name}
            campaign={item.campaign}
            link={item.link}
            id={index}
             />
)
        return (
            <div className="main-work">
                <Route exec path="/work" >
                    <div className="main-container-work">
                        <div className="text-container-work">
                            <h1>Work</h1>
                            <div className="portfolio-div">
                                {content}
                            </div>
                        </div>

                    </div>
                </Route>
            </div>
        )
    }
}

export default Work;