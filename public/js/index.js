const imagen = document.getElementById("contenedor");
const persona = document.getElementById("persona");
imagen.addEventListener("click",(evento) => {
    
    let clickX = evento.clientX //Posición absoluta de 100px a la derecha del extremo izquierdo del elemento.
    let clickY = evento.clientY; //Posición absoluta de 50px hacia abajo del extremo superior del elemento.
    console.log(clickX);
    console.log(clickY);
    
    moveCharacter(clickX,clickY);
});

function moveCharacter(x,y){
    //Look if the character gets out of the map from the left
    if(x <= 40) {
        persona.style.left = 40 + "px";
    } else if((x + 128) > imagen.clientWidth) {
        persona.style.left = imagen.clientWidth - 128 + "px";
    } else {
        persona.style.left = (x - 64) + "px";
    }

    if((y <= 65)) {
        persona.style.top = 65 + "px";
    } else if((y + 128) > imagen.clientHeight){
        persona.style.top = imgaen.clientHeight - 128 + "px";
    } else {
        persona.style.top = (y - 64) + "px";
    }
}