import React, { useState } from "react";
import Character from "./Character"
import '../styles/Container.css'

import { io } from 'socket.io-client';

// "undefined" means the URL will be computed from the `window.location` object
const URL = process.env.NODE_ENV === 'production' ? undefined : 'http://localhost:5000';

export const socket = io(URL);


const players = [
    
]

let id = 1;

const Container = () => {

    socket.on('connect', () => {
        console.log('WebSocket connection established.');
        socket.on('user_login', (username) => {
            addPlayer(username)
            //TODO ESTO ESA CASI ECHO, SOLO FALA FUNCAR EL ADDPLAYER
        })
    }); 
   
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
            {players.map(
                player => (
                    <Character key={player.id} position={position} />
                )
            )}
        </div>
    );
}

export const addPlayer = (username) => {
    players.concat({id , username});
    id = id + 1;
}

export default Container