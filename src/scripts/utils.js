/**
 * Módulo de funciones utilitarias.
 * Este archivo contiene funciones auxiliares que serán utilizadas y llamadas
 * desde el archivo principal para realizar varias operaciones.
 */


export function datosCondicionados(elemento) {
    if (elemento.superHost === true && elemento.beds !== null) {
        const template = `
    <div class="w-95 flex flex-col items-center my-3" >
                <div class=" w-90 h-70 rounded-3xl overflow-hidden">
                    <img
                        src="${elemento.photo}"
                        alt="" class="w-full h-full object-cover">
                </div>
                <div class=" w-90 flex flex-col items-start px-1">
                    <div class="w-full flex justify-between my-3">
                        <div>
                        <span class="border rounded-2xl px-1 font-semibold text-xs">SUPERHOST</span>
                        <span>${elemento.type} .</span>
                        <span>${elemento.beds} beds</span>
                        </div>
                        <div class="flex">
                            <img src="./src/images/icons/star.svg" alt="" class="w-6">
                            <span>${elemento.rating}</span>
                        </div>
                        
                    </div>
                    <p class="font-bold text-sm"> ${elemento.title}</p>
                </div>
            </div>`
        return template
    } else if (elemento.superHost === true && elemento.beds === null) {
        const template = `
    <div class="w-95 flex flex-col items-center my-3" >
                <div class=" w-90 h-70 rounded-3xl overflow-hidden">
                    <img
                        src="${elemento.photo}"
                        alt="" class="w-full h-full object-cover">
                </div>
                <div class=" w-90 flex flex-col items-start px-2">
                    <div class="w-full flex justify-between my-3">
                        <div>
                        <span class="border rounded-2xl px-1 font-semibold text-sm">SUPERHOST</span>
                        <span>${elemento.type}</span>
                        <span></span>
                        </div>
                        <div class="flex">
                            <img src="./src/images/icons/star.svg" alt="" class="w-6">
                            <span>${elemento.rating}</span>
                        </div>
                        
                    </div>
                    <p class="font-bold text-sm"> ${elemento.title}</p>
                </div>
            </div>`
        return template
    } else if (elemento.beds === null) {
        const template = `
    <div class="w-95 flex flex-col items-center my-3" >
                <div class=" w-90 h-70 rounded-3xl overflow-hidden">
                    <img
                        src="${elemento.photo}"
                        alt="" class="w-full h-full object-cover">
                </div>
                <div class=" w-90 flex flex-col items-start px-2">
                    <div class="w-full flex justify-between my-3">
                    <div>
                        <span>${elemento.type}</span>
                        <span></span>
                        </div>
                        <div class="flex">
                            <img src="./src/images/icons/star.svg" alt="" class="w-6">
                            <span>${elemento.rating}</span>
                        </div>
                        
                    </div>
                    <p class="font-bold text-sm"> ${elemento.title}</p>
                </div>
            </div>`
        return template
    } else if (elemento.null !== null) {
        const template = `
        <div class="w-95 flex flex-col items-center my-3" >
                    <div class=" w-90 h-70 rounded-3xl overflow-hidden">
                        <img
                            src="${elemento.photo}"
                            alt="" class="w-full h-full object-cover">
                    </div>
                    <div class=" w-90 flex flex-col items-start px-2">
                        <div class="w-full flex justify-between my-3">
                        <div>
                            <span>${elemento.type} .</span>
                            <span>${elemento.beds} beds</span>
                            </div>
                            <div class="flex">
                                <img src="./src/images/icons/star.svg" alt="" class="w-6">
                                <span>${elemento.rating}</span>
                            </div>
                            
                        </div>
                        <p class="font-bold text-sm"> ${elemento.title}</p>
                    </div>
                </div>`
        return template
    }

}


