import React, { useState } from 'react';
import { Component } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as actionType from '../store/action.js';
import { Link } from 'react-router-dom'

export default function Item(props) {
    const dispatch = useDispatch();
    const [display, setDisplay] = useState(false);
    const id = `circle_${props.id}`;
    const textId = `text_${props.id}`;
    const circle = <Link onClick={() => handleClick()}><div id={id} className="work-circle">
        more info
</div></Link>
    const handleMOuseOver = () => {
        if (document.getElementById(textId) == null) {
            return;
        }
        document.getElementById(textId).style.animation = 'text-shadow 1.5s ease-in-out 1';
        setTimeout(()=>{
            if (document.getElementById(textId) == null) {
                return;
            }
            document.getElementById(textId).style.animation = ''
        },1500)

    }
    const handleClick = () => {
        window.open(props.link);
    }
    const handleMOuseEnter = () => {
        
    }
    return (
        <div
            className="single-item">
                <h2 id={textId} onMouseover={() => handleMOuseEnter()}>{props.name}</h2>
            <img

                onMouseOver={() => handleMOuseOver()}
                src={props.image}></img>
            
            {/* {display ? circle : ''} */}

        </div>
    )
}