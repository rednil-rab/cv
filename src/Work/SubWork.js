import React from 'react';
import { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import portfolio from './portfolio';
import Item from './Item'
import './work.css'



class SubWork extends Component {

    render() {
        const openLink = () => {
            window.open(this.props.project.link);
        }
        return (
            <div className="main-work">
                <Route exec path="/project" >
                    <div className="main-container-work project">
                            <img className="project-img" src={this.props.project.image2}></img>
                        <h1>{this.props.project.name}</h1>
                        <a onClick={() => openLink()} style={{cursor: 'pointer'}} className="project-anchor">to site</a>
                    </div>
                </Route>
            </div>
        )
    }
}

const mapstateToProps = state => {
    return {
      project: state.portfolioObj,
    };
  }
export default connect(mapstateToProps)(SubWork);