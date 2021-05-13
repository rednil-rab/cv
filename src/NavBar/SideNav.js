import React from 'react';
import { Component } from 'react';
import * as Icon from 'react-feather';
import { connect } from 'react-redux';
import * as utils from '../utils';
import { Link } from 'react-router-dom';

class SideNav extends Component {
    state = {
        home: utils.createRegExpTest('/cv').test(window.location.href) ? true : false,
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
            case 'phone':
                window.open('tel: +972504527530');
                break;
            default:
                return;
        }
    }
    render() {

        const resetNavBar = () => {
            this.setState({
                home:  false,
                about:  false,
                skills:  false,
                work:  false,
                contact:  false 
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
                <div className="icon-container-mob">
                {this.state.home ? <Link to="/cv"><h3 onClick={() => handleEnter(1)}>Home</h3></Link> : <Link to="/cv"><Icon.Home onClick={() => handleEnter(1)} className="icon" /></Link>}
                    {this.state.about ? <Link to="/about"><h3 onClick={() => handleEnter(2)}>About</h3></Link> :<Link to="/about"> <Icon.User onClick={() => handleEnter(2)} className="icon" /></Link>}
                    {this.state.skills ? <Link to="/skills"><h3 onClick={() => handleEnter(3)}>Skills</h3></Link> : <Link to="/skills"><Icon.Settings onClick={() => handleEnter(3)} className="icon" /></Link>}
                    {this.state.work ? <Link to="/work"><h3 onClick={() => handleEnter(4)}>Work</h3></Link> : <Link to="/work"><Icon.Briefcase onClick={() => handleEnter(4)} className="icon" /></Link>}
                    {this.state.contact ? <Link to="/contact"><h3 onClick={() => handleEnter(5)}>Contact</h3></Link > : <Link to="/contact"><Icon.Mail onClick={() => handleEnter(5)} className="icon" /></Link>}
                    
                    
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