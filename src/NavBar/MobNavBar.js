import React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
import * as Icon from 'react-feather';
import { connect } from 'react-redux';
import * as actionType from '../store/action.js'

 class MobNavBar extends Component {
    state = {
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
            <div className="mob-nav">
                <div className="logo-div">
                    
                <h2 onClick={() => this.props.toggleMenu()}>Bar</h2>
                <div style={{transform: this.props.menu ? 'rotate(-90deg)' : 'rotate(90deg)'}}>
                <Icon.Play   className="icon"/>
                </div>
                
                </div>
                
                {/* <div className="icon-container">
                    {this.state.home ? <a href="/home"><h3 onMouseLeave={() => this.setState({ home: false })}>Home</h3></a> : <Icon.Home onMouseEnter={() => this.setState({ home: true })} className="icon" />}
                    {this.state.about ? <a href="/about"><h3 onMouseLeave={() => this.setState({ about: false })}>About</h3></a> : <Icon.User onMouseEnter={() => this.setState({ about: true })} className="icon" />}
                    {this.state.skills ? <a href="/skills"><h3 onMouseLeave={() => this.setState({ skills: false })}>Skills</h3></a> : <Icon.Settings onMouseEnter={() => this.setState({ skills: true })} className="icon" />}
                    {this.state.contact ? <a href="/contact"><h3 onMouseLeave={() => this.setState({ contact: false })}>Contact</h3></a> : <Icon.Briefcase onMouseEnter={() => this.setState({ contact: true })} className="icon" />}
                    {this.state.work ? <h3 onMouseLeave={() => this.setState({ work: false })}>Work</h3> : <Icon.Mail onMouseEnter={() => this.setState({ work: true })} className="icon" />}
                </div> */}
                <div className="icon-container-mob links">
                    <Icon.GitHub onClick={() => this.openLink('github')} className="icon" />
                    <Icon.Linkedin onClick={() => this.openLink('linkedin')} className="icon" />
                    <Icon.Facebook onClick={() => this.openLink('facebook')} className="icon" />

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
  
  const mapDispatchToProps = dispatch => {
    return {
      toggleMenu: () => dispatch({ type: actionType.TOGGLE_MENU}),
    }
  }
export default connect(mapstateToProps, mapDispatchToProps)(MobNavBar);