import React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
import * as Icon from 'react-feather';
import * as utils from '../utils'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
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

    url = {
        home: '/home',
        about: '/about',
        skills: '/contact',
        work: '/work'
    }



    render() {

        const resetNavBar = () => {
            this.setState({
                home: utils.createRegExpTest('/home').test(window.location.href) ? true : false,
                about: utils.createRegExpTest('/about').test(window.location.href) ? true : false,
                skills: utils.createRegExpTest('/skills').test(window.location.href) ? true : false,
                work: utils.createRegExpTest('/work').test(window.location.href) ? true : false,
                contact: utils.createRegExpTest('/contact').test(window.location.href) ? true : false
            })
        }
        const handleEnter = (num) => {
            resetNavBar();
            switch (num) {
                case 1:
                    this.setState({ home: true })
                break;
                case 2:
                    this.setState({ about: true })
                break;
                case 3:
                    this.setState({ skills: true })
                break;
                case 4:
                    this.setState({ work: true })
                break;
                case 5:
                    this.setState({ contact: true })
                break;
                default: 
                return;
            }
        }
        return (
            <div className="side-nav">
                <h2>Bar</h2>
                <div className="icon-container">
                    {this.state.home ? <Link to="/home"><h3 onMouseLeave={() => resetNavBar()}>Home</h3></Link> : <Icon.Home onMouseEnter={() => handleEnter(1)} className="icon" />}
                    {this.state.about ? <Link to="/about"><h3 onMouseLeave={() => resetNavBar()}>About</h3></Link> : <Icon.User onMouseEnter={() => handleEnter(2)} className="icon" />}
                    {this.state.skills ? <Link to="/skills"><h3 onMouseLeave={() => resetNavBar()}>Skills</h3></Link> : <Icon.Settings onMouseEnter={() => handleEnter(3)} className="icon" />}
                    {this.state.work ? <Link to="/work"><h3 onMouseLeave={() => resetNavBar()}>Work</h3></Link> : <Icon.Briefcase onMouseEnter={() => handleEnter(4)} className="icon" />}
                    {this.state.contact ? <Link to="/contact"><h3 onMouseLeave={() => resetNavBar()}>Contact</h3></Link > : <Icon.Mail onMouseEnter={() => handleEnter(5)} className="icon" />}
                </div>
                <div className="icon-container links">
                    <Icon.GitHub onClick={() => this.openLink('github')} className="icon" />
                    <Icon.Linkedin onClick={() => this.openLink('linkedin')} className="icon" />
                    <Icon.Facebook onClick={() => this.openLink('facebook')} className="icon" />

                </div>
            </div>
        );
    }
}