/**
 * Aquí estará la lógica principal de la aplicación.
 * Este bloque de código contiene la funcionalidad principal
 * que define el comportamiento del programa.
 */
import { stays } from "./stays";
const principal=document.querySelector("#principal")
function enviar(datos, indexhtml){
    stays.forEach(elemento=>{
        const template=`<div class="flex flex-col items-center ">
                <div class="w-70 rounded-3xl overflow-hidden">
                    <img class="object-cover"
                        src="${elemento.photo}"
                        alt="">
                </div>
                <div class=" w-70 flex flex-col">
                    <div class="w-full flex justify-between p-4">
                        <span>entire apartament</span>
                        <span>3 beds</span>
                        <span>4.75</span>
                    </div>
                    <p class="font-bold"> nice apart</p>
                </div>
            </div>`
    indexhtml.innerHTML+=template
        })
}
enviar(stays,principal)