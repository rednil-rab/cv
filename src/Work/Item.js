import React from 'react';
import * as utils from '../utils'

export default function Item(props) {
    const textId = props.id;
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
                <h2 id={textId} onMouseOver={() => handleMOuseEnter()}>{props.name}</h2>
            <img
                onClick={() => handleClick()}
                onMouseOver={() => handleMOuseOver()}
                src={props.image}
                alt={props.name}></img>

        </div>
    )
}