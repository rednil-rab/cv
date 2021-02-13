
import './App.css';
import React from 'react';
import { Component } from 'react';
import NavBar from './NavBar/navBar';

import SideNav from './NavBar/SideNav';
import Home from './Home/MainHome';
import About from './About/AboutMain';
import Skills from './Skills/MainSkills';
import Contact from './Contact/MainContact';
import Work from './Work/MainWork';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionType from './store/action.js'


 class App extends Component {
  state = { width: window.innerWidth, height: window.innerHeight };
 render () {
  return (
    <BrowserRouter>
        <div className="App">
          {this.state.width <= 768 ? '' : <NavBar />}
          {this.state.width <= 768 ? <SideNav /> : ""}
      <Home
      width={this.state.width}
       />
      <About />
      <Work />
      <Skills />
      <Contact />
    </div>
    </BrowserRouter>
  );
 }
 updateDimensions = () => {
  this.setState({ width: window.innerWidth, height: window.innerHeight });
};
componentDidMount() {
  window.addEventListener('resize', this.updateDimensions);
}
componentWillUnmount() {
  window.removeEventListener('resize', this.updateDimensions);
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
export default connect(mapstateToProps,mapDispatchToProps)(App);
