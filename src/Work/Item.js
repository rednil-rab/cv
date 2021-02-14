import React, { useState } from 'react';
import * as utils from '../utils'

export default function Item(props) {
    const handleMOuseOver = () => {
        if (document.getElementById(props.id) == null) {
            return;
        }
        document.getElementById(props.id).style.animation = 'text-shadow 1.5s ease-in-out 1';
        setTimeout(()=>{
            if (document.getElementById(props.id) == null) {
                return;
            }
            document.getElementById(props.id).style.animation = ''
        },1500)

    }
    const handleClick = () => {
        if (utils.isMobile) {
            handleMOuseOver();
            setTimeout(()=>{
                window.open(props.link);
            }, 1500)
        } else {
            window.open(props.link);
        }
        
    }
    const handleMOuseEnter = () => {
        
    }
    return (
        <div
            className="single-item">
                <h2 id={props.id} onMouseOver={() => handleMOuseEnter()}>{props.name}</h2>
            <img
                onClick={() => handleClick()}
                onMouseOver={() => handleMOuseOver()}
                src={props.image}></img>

        </div>
    )
}