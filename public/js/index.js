const imagen = document.getElementById("contenedor");
const persona = document.getElementById("persona");
imagen.addEventListener("click",(evento) => {

    console.log("asdasds");
    var clickX = evento.clientX //Posición absoluta de 100px a la derecha del extremo izquierdo del elemento.
    var clickY = evento.clientY; //Posición absoluta de 50px hacia abajo del extremo superior del elemento.
    console.log(clickX);
    console.log(clickY);
    
    persona.style.left = (clickX) - 64 + "px";
    persona.style.top = (clickY) - 64 + "px";
});

function border(){
    if(persona.style.left>imagen.clientWidth){
        persona.style.left = imagen.clientWidth;
    }
    
    if(persona.style.top>imagen.clientHeight){
        persona.style.top = imagen.clientHeight;
    }
}