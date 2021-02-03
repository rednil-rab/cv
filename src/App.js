
import './App.css';
import React from 'react';
import { Component } from 'react';
import NavBar from './NavBar/navBar';
import MobNavBar from './NavBar/MobNavBar';
import SideNav from './NavBar/SideNav';
import Home from './Home/MainHome';
import About from './About/AboutMain';
import Skills from './Skills/MainSkills';
import Contact from './Contact/MainContact';
import Work from './Work/MainWork';
import SubWork from './Work/SubWork';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionType from './store/action.js'


 class App extends Component {
   state = {
    width: window.innerWidth,
   }

 isMobile = this.state.width <= 768 ? true : false;
 render () {
  window.addEventListener('resize', this.handleWindowSizeChange);
  return (
    <BrowserRouter>
        <div className="App">
          {this.isMobile ? <MobNavBar /> : <NavBar />}
          {this.isMobile ? <SideNav /> : ""}
      <Home />
      <About />
      <Work />
      <SubWork />
      <Skills />
      <Contact />
    </div>
    </BrowserRouter>
  );
 }
}

const mapstateToProps = state => {
  return {
    menu: state.sideMenu,
  };
}

export default connect(mapstateToProps)(App);
