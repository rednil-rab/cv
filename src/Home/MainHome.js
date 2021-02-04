
import React from 'react';
import { Component } from 'react';
import { Route } from 'react-router-dom';
import './home.css'
import image from './giantface.jpg'
import {Animated} from "react-animated-css";
import { Link } from 'react-router-dom'

class Home extends Component {
    state = {
        rubber: 'none',
    }
    render() {
        const handleMOuseOver = () => {
            if (this.state.rubber == 'rubberBand') {
                return;
            }
            this.setState({rubber: 'rubberBand'})
            setTimeout(()=>{
                this.setState({rubber: 'none'})
            }, 1000)
        }
        return (
            <div className="main-home">
                <Route exec path="/home" >
                    <div className="main-container-home">
                        <div className="text-container-home">
                            <Animated animationIn="bounceInLeft">
                                <h1 >Hi,</h1>
                            </Animated>
                            <Animated animationInDelay="250" ani animationIn="bounceInLeft">
                            <h1>I'm Bar,</h1>
                            </Animated>
                            <Animated animationInDelay="500" animationIn="bounceInLeft">
                            <h1>A Web developer.</h1>
                            </Animated>
                            <Animated animationInDelay="1000" animationIn="fadeIn">
                            <h3>Frontend developer / Fullstack developer.</h3>
                            </Animated>
                            <Link to='/contact'>
                            <div className="talk-btn-home">
                                    <div className={`animated ${this.state.rubber}`} onMouseOver={()=>handleMOuseOver()}>
                                        <h3>Let's talk</h3>
                                    </div>
                                
                            </div>
                            </Link>

                        </div>

                    </div>

                <img className="giant-face" src={image}></img>
                {/* <div class="ag-format-container">
    <ul  class="ag-glitch_list">
      <li style={{backgroundImage: image}} class="ag-glitch_item"><img className="giant-face" src={image}></img></li>
      <li style={{background: image}} class="ag-glitch_item"><img className="giant-face" src={image}></img></li>
      <li style={{background: image}} class="ag-glitch_item"><img className="giant-face" src={image}></img></li>
      <li style={{background: image}} class="ag-glitch_item"><img className="giant-face" src={image}></img></li>
      <li style={{background: image}} class="ag-glitch_item"><img className="giant-face" src={image}></img></li>
    </ul>
  </div> */}
                </Route>
            </div>
        )
    }
}

export default Home;