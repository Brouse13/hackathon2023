import styled from "styled-components";
import jodi from '../assets/Jodi.png'

const Player = styled.div`
    width: 100px;
    height: 100px;
    background-image: url(${jodi});
    display: flex;
    position: relative;
    top: ${props => props.position.top};
    left: ${props => props.position.left};
    transition: all 0.75s ease-out;
`

export default Player