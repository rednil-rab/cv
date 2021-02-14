import React from 'react';
import { Component } from 'react';
import * as Icon from 'react-feather';
import { connect } from 'react-redux';
import * as actionType from '../store/action.js';


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
            case 'phone':
                window.open('tel: +972504527530');
                break;
            default:
                return;
        }
    }
    render() {
        return (
                <div className="icon-container-mob links">
                    <Icon.GitHub onClick={() => this.openLink('github')} className="icon" />
                    <Icon.Linkedin onClick={() => this.openLink('linkedin')} className="icon" />
                    <Icon.Facebook onClick={() => this.openLink('facebook')} className="icon" />
                    <Icon.Phone onClick={() => this.openLink('phone')} className="icon" />
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
        toggleMenu: () => dispatch({ type: actionType.TOGGLE_MENU }),
    }
}
export default connect(mapstateToProps, mapDispatchToProps)(MobNavBar);