import React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
import * as Icon from 'react-feather';
import { connect } from 'react-redux';

class SideNav extends Component {
    state = {
        home: false,
        about: false,
        skills: false,
        contact: false,
        work: false
    }
    openLink = (media) => {
        switch (media) {
            case 'facebook':
                window.open('https://www.facebook.com/bar.linder');
                break;
            case 'linkedin':
                window.open('https://www.linkedin.com/in/bar-linder-2242a9166');
                break;
            case 'github':
                window.open('https://github.com/rednil-rab');
                break;
            default:
                return;
        }
    }
    render() {
        return (
            <div className="side-nav" style={{height: this.props.menu ? '300px' : '0'}}>
                <div className="icon-container">
                    {this.state.home ? <a href="/home"><h3 onMouseLeave={() => this.setState({ home: false })}>Home</h3></a> : <a href="/home"><Icon.Home onMouseEnter={() => this.setState({ home: true })} className="icon" /></a>}
                    {this.state.about ? <a href="/about"><h3 onMouseLeave={() => this.setState({ about: false })}>About</h3></a> : <Icon.User onMouseEnter={() => this.setState({ about: true })} className="icon" />}
                    {this.state.skills ? <a href="/skills"><h3 onMouseLeave={() => this.setState({ skills: false })}>Skills</h3></a> : <Icon.Settings onMouseEnter={() => this.setState({ skills: true })} className="icon" />}
                    {this.state.work ? <h3 onMouseLeave={() => this.setState({ work: false })}>Work</h3> : <Icon.Briefcase onMouseEnter={() => this.setState({ work: true })} className="icon" />}
                    {this.state.contact ? <a href="/contact"><h3 onMouseLeave={() => this.setState({ contact: false })}>Contact</h3></a> : <Icon.Mail onMouseEnter={() => this.setState({ contact: true })} className="icon" />}
                </div>
            </div>
        );
    }
}
const mapstateToProps = state => {
    return {
      menu: state.sideMenu,
    };
  }
export default connect(mapstateToProps)(SideNav);