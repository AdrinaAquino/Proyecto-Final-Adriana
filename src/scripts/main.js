/**
 * Aquí estará la lógica principal de la aplicación.
 * Este bloque de código contiene la funcionalidad principal
 * que define el comportamiento del programa.
 */

import { stays } from "./stays.js";

const principal = document.querySelector("#principal");
const boton=document.querySelector(".bo")
console.log(boton)

function enviar(datos, indexhtml) {
    indexhtml.innerHTML = ""
    datos.forEach((elemento) => {
        const template = `
        <div class="w-85 flex flex-col items-center my-3" >
                    <div class=" w-80 h-70 rounded-3xl overflow-hidden">
                        <img
                            src="${elemento.photo}"
                            alt="" class="w-full h-full object-cover">
                    </div>
                    <div class=" w-80 flex flex-col items-start px-2">
                        <div class="w-full flex justify-between">
                            <span>${elemento.type}</span>
                            <span>${elemento.beds}</span>
                            <div class="flex">
                                <img src="./src/images/icons/star.svg" alt="" class="w-6">
                                <span>${elemento.rating}</span>
                            </div>
                            
                        </div>
                        <p class="font-bold"> ${elemento.title}</p>
                    </div>
                </div>`
        indexhtml.innerHTML += template
    })
}
enviar(stays, principal)