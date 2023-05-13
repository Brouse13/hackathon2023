import React, { useState } from "react";
import Character from "./Character"
import '../styles/Container.css'

const Container = () => {
    const [position, setPosition] = useState({x:0, y:0})
    
   const handleClick = function(evento) {    
        let clickX = evento.clientX;
        let clickY = evento.clientY;
        setPosition({x: clickX, y: clickY})
        // console.log(clickX);
        // console.log(clickY);
    }

    return(
        <div id="container" onClick={handleClick}>
            <Character position={position}/>
        </div>
    );
}

export default Container