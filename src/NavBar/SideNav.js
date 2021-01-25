import React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
import * as Icon from 'react-feather';
import { connect } from 'react-redux';
import * as utils from '../utils'
class SideNav extends Component {
    state = {
        home: utils.createRegExpTest('/home').test(window.location.href) ? true : false,
        about: utils.createRegExpTest('/about').test(window.location.href) ? true : false,
        skills: utils.createRegExpTest('/skills').test(window.location.href) ? true : false,
        contact: utils.createRegExpTest('/contact').test(window.location.href) ? true : false,
        work: utils.createRegExpTest('/work').test(window.location.href) ? true : false,
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
                {this.state.home ? <a href="/home"><h3 onMouseLeave={() => this.setState({ home: utils.createRegExpTest('/home').test(window.location.href) ? true : false })}>Home</h3></a> : <Icon.Home onMouseEnter={() => this.setState({ home: true })} className="icon" />}
                    {this.state.about ? <a href="/about"><h3 onMouseLeave={() => this.setState({ about: utils.createRegExpTest('/about').test(window.location.href) ? true : false })}>About</h3></a> : <Icon.User onMouseEnter={() => this.setState({ about: true })} className="icon" />}
                    {this.state.skills ? <a href="/skills"><h3 onMouseLeave={() => this.setState({ skills: utils.createRegExpTest('/skills').test(window.location.href) ? true : false })}>Skills</h3></a> : <Icon.Settings onMouseEnter={() => this.setState({ skills: true })} className="icon" />}
                    {this.state.work ? <h3 onMouseLeave={() => this.setState({ work: utils.createRegExpTest('/work').test(window.location.href) ? true : false })}>Work</h3>: <Icon.Briefcase onMouseEnter={() => this.setState({ work: true })} className="icon" />}
                    {this.state.contact ? <a href="/contact"><h3 onMouseLeave={() => this.setState({ contact: utils.createRegExpTest('/contact').test(window.location.href) ? true : false })}>Contact</h3></a> : <Icon.Mail onMouseEnter={() => this.setState({ contact: true })} className="icon" />}
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