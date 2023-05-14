import React from "react";
import '../styles/Puzzle.css'

const Puzzle = () => {

    var piezas = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    var contador = 0;
    var casilla1;
    var casilla2;

    function desordenar() {
        piezas.sort(function () { return Math.random() - 0.5 });
    }
    function deseleccionar() {
        for (let i = 0; i < 9; i++) {
            document.getElementById("img_" + i).style.border = null;
        }
    }

    function seleccionar(casilla) {
        contador++;
        if (contador == 1) {
            casilla1 = casilla;
        }
        deseleccionar();
        document.getElementById("img_" + casilla).style.border = "solid 2px red";
        if (contador == 2) {
            contador = 0;
            casilla2 = casilla;
            // permutar casillas
            var aux = piezas[casilla1];
            piezas[casilla1] = piezas[casilla2];
            piezas[casilla2] = aux;
            console.log(piezas);
            deseleccionar();
            comprobarCorrecto()
            pintarPuzle();
        }
    }

    function comprobarCorrecto() {
        var ordenado = true;
        for (let i = 0; i < piezas.length; i++) {
            if (piezas[i] != i) {
                ordenado = false
            }
        }
        if (ordenado) {
            document.getElementById("textganador").style.visibility = "visible";
        }
    }

    function pintarPuzle() {
        for (let i = 0; i < 9; i++) {
            document.getElementById("img_" + i).src = "../assets/" + piezas[i] + ".jpg";
        }
    }

    function reset() {
        document.getElementById("textganador").style.visibility = "hidden";
        desordenar();
        pintarPuzle();
    }
    desordenar();
    pintarPuzle();

    return(
        <table>
        <div class="flexbox">
            <h1 class="text"><strong>PUZZLE</strong></h1>
            <button onclick={reset()} class="text"> Reset</button>
        </div>
        <tr>
            <td><img id="img_0" src="./piezas/0.jpg" onclick={seleccionar(0)} /></td>
            <td><img id="img_1" src="./piezas/1.jpg" onclick={seleccionar(1)} /></td>
            <td><img id="img_2" src="./piezas/2.jpg" onclick={seleccionar(2)} /></td>
        </tr>

        <tr>
            <td><img id="img_3" src="./piezas/3.jpg" onclick={seleccionar(3)} /></td>
            <td><img id="img_4" src="./piezas/4.jpg" onclick={seleccionar(4)} /></td>
            <td><img id="img_5" src="./piezas/5.jpg" onclick={seleccionar(5)} /></td>
        </tr>

        <tr>
            <td><img id="img_6" src="./piezas/6.jpg" onclick={seleccionar(6)} /></td>
            <td><img id="img_7" src="./piezas/7.jpg" onclick={seleccionar(7)} /></td>
            <td><img id="img_8" src="./piezas/8.jpg" onclick={seleccionar(8)} /></td>
        </tr>
        <h1 id="textganador">¡HAS GANADO!</h1>
    </table>
    )
}

export default Puzzle