/**
 * Aquí estará la lógica principal de la aplicación.
 * Este bloque de código contiene la funcionalidad principal
 * que define el comportamiento del programa.
 */

import { stays } from "./stays.js";

const principal = document.querySelector("#principal");


function enviar(datos, indexhtml) {
    indexhtml.innerHTML = ""
    datos.forEach((elemento) => {
        if (elemento.superHost === true&& elemento.beds!==null) {
            const template = `
        <div class="w-85 flex flex-col items-center my-3" >
                    <div class=" w-80 h-70 rounded-3xl overflow-hidden">
                        <img
                            src="${elemento.photo}"
                            alt="" class="w-full h-full object-cover">
                    </div>
                    <div class=" w-80 flex flex-col items-start px-2">
                        <div class="w-full flex justify-between my-3">
                            <div>
                            <span class="border rounded-2xl px-1 font-semibold text-sm">SUPERHOST</span>
                            <span>${elemento.type} .</span>
                            <span>${elemento.beds} beds</span>
                            </div>
                            <div class="flex">
                                <img src="./src/images/icons/star.svg" alt="" class="w-6">
                                <span>${elemento.rating}</span>
                            </div>
                            
                        </div>
                        <p class="font-bold"> ${elemento.title}</p>
                    </div>
                </div>`
            indexhtml.innerHTML += template
        }else if(elemento.superHost === true&& elemento.beds===null){
            const template = `
        <div class="w-85 flex flex-col items-center my-3" >
                    <div class=" w-80 h-70 rounded-3xl overflow-hidden">
                        <img
                            src="${elemento.photo}"
                            alt="" class="w-full h-full object-cover">
                    </div>
                    <div class=" w-80 flex flex-col items-start px-2">
                        <div class="w-full flex justify-between my-3">
                            <div>
                            <span class="border rounded-2xl px-1 font-semibold text-sm">SUPERHOST</span>
                            <span>${elemento.type} .</span>
                            <span></span>
                            </div>
                            <div class="flex">
                                <img src="./src/images/icons/star.svg" alt="" class="w-6">
                                <span>${elemento.rating}</span>
                            </div>
                            
                        </div>
                        <p class="font-bold"> ${elemento.title}</p>
                    </div>
                </div>`
            indexhtml.innerHTML += template
        }else if(elemento.beds===null){
            const template = `
        <div class="w-85 flex flex-col items-center my-3" >
                    <div class=" w-80 h-70 rounded-3xl overflow-hidden">
                        <img
                            src="${elemento.photo}"
                            alt="" class="w-full h-full object-cover">
                    </div>
                    <div class=" w-80 flex flex-col items-start px-2">
                        <div class="w-full flex justify-between my-3">
                        <div>
                            <span>${elemento.type} .</span>
                            <span></span>
                            </div>
                            <div class="flex">
                                <img src="./src/images/icons/star.svg" alt="" class="w-6">
                                <span>${elemento.rating}</span>
                            </div>
                            
                        </div>
                        <p class="font-bold"> ${elemento.title}</p>
                    </div>
                </div>`
        indexhtml.innerHTML += template
        }else if (elemento.null!==null){
            const template = `
            <div class="w-85 flex flex-col items-center my-3" >
                        <div class=" w-80 h-70 rounded-3xl overflow-hidden">
                            <img
                                src="${elemento.photo}"
                                alt="" class="w-full h-full object-cover">
                        </div>
                        <div class=" w-80 flex flex-col items-start px-2">
                            <div class="w-full flex justify-between my-3">
                            <div>
                                <span>${elemento.type} .</span>
                                <span>${elemento.beds}</span>
                                </div>
                                <div class="flex">
                                    <img src="./src/images/icons/star.svg" alt="" class="w-6">
                                    <span>${elemento.rating}</span>
                                </div>
                                
                            </div>
                            <p class="font-bold"> ${elemento.title}</p>
                        </div>
                    </div>`
            indexhtml.innerHTML += template
        }
       
    })
}
enviar(stays, principal)