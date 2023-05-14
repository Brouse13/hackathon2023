import React, { useEffect, useState } from "react";
import '../styles/Character.css'
import Player from './Character.styled'

const Character = (props) => {
    const id = 'Jesús';
    const [relativePos, setRelativePos] = useState({top:0, left:0})

    const image = document.getElementById("container");
    
    useEffect(()=> {
        const {x,y} = props.position
        //console.log({x,y})
        let top = 0
        let left = 0

        if(x <= 40) {
           left = 40 + "px";
        } else if((x + 128) > image.clientWidth) {
            left = image.clientWidth - 128 + "px";
        } else {
            left = (x - 64) + "px";
        }
    
        if((y <= 65)) {
            top = 65 + "px";
        } else if((y + 128) > image.clientHeight){
            top = image.clientHeight - 128 + "px";
        } else {
            top = (y - 64) + "px";
        }

        setRelativePos({top,left})
        //console.log({relativePos});
    },[props.position])

    return(
        <>
            <Player position={relativePos}/>
        </>
        
    );
}

export default Character