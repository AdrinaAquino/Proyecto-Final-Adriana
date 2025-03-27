/**
 * Aquí estará la lógica principal de la aplicación.
 * Este bloque de código contiene la funcionalidad principal
 * que define el comportamiento del programa.
 */

import { stays } from "./stays.js";
import { datosCondicionados } from "./utils.js";

const principal = document.querySelector("#principal");
const modalContent = document.querySelector("#modal-content")
const botonMobile = document.querySelector("#botonMobile")
const closeMobile = document.querySelector("#closeMobile")
const masMenos = document.querySelector("#mas-menos")
const listaFiltrada = document.querySelector("#lista-fitrada")
const guests = document.querySelector("#guests")
const location = document.querySelector("#location")
const autocompleteResults = document.querySelector("#autocomplete-results")
const buttonGuestsA = document.querySelector("#button-guestsA")
const buttonGuestsN = document.querySelector("#button-guestsN")
const display = document.querySelector("#display")
const displayN = document.querySelector("#displayN")
const contaStays = document.querySelector("#conta-stays")
const search = document.querySelector("#search")


function enviar(datos, indexhtml) {
    indexhtml.innerHTML = ""
    datos.forEach((e) => {
        let fila = datosCondicionados(e)
        indexhtml.innerHTML += fila
    })
}
enviar(stays, principal)

function toggleModal() {
    modalContent.classList.toggle("hidden");
}

function loadStays(array) {
    let contador = array.length;
    contaStays.textContent = contador >= 12 ? 12 + "+" : contador
}
loadStays(stays)


search.addEventListener("click", () => {
    let locationValue = (location.value).toLowerCase();
    let guestValue = parseInt(guests.value) || 0
    let listaFiltrada = stays;
    if (locationValue !== "" && guestValue === 0) {
        listaFiltrada = stays.filter((e) => e.city.toLowerCase()===locationValue)
    }else if(locationValue===""&& guestValue>0){
        listaFiltrada=stays.filter((e)=>e.maxGuests>=guestValue)
    }else if(locationValue!==""&&guestValue>=0){
        listaFiltrada=stays.filter((e)=>e.maxGuests>=guestValue && e.city.toLowerCase()===locationValue)
    }
enviar(listaFiltrada,principal)
}
)
buttonGuestsA.addEventListener("click", (e) => {
    const currentDisplay = parseInt(display.textContent)
    const currentInputValue = parseInt(guests.value)
    if (e.target.textContent === "-" && display.textContent > 0) {
        display.textContent = currentDisplay - 1
        guests.value = currentInputValue - 1
    } else if (e.target.textContent === "+") {
        display.textContent = currentDisplay + 1
        guests.value = currentInputValue + 1
    }
})
buttonGuestsN.addEventListener("click", (e) => {
    const currentDisplay = parseInt(displayN.textContent)
    const currentInputValue = parseInt(guests.value)
    if (e.target.textContent === "-" && displayN.textContent > 0) {
        displayN.textContent = currentDisplay - 1
        guests.value = currentInputValue - 1
    } else if (e.target.textContent === "+") {
        displayN.textContent = currentDisplay + 1
        guests.value = currentInputValue + 1
    }
})
botonMobile.addEventListener("click", toggleModal)
closeMobile.addEventListener("click", toggleModal)
modalContent.addEventListener("click", (e) => {
    if (e.target.id === "guests") {
        masMenos.classList.remove("hidden")
        listaFiltrada.classList.add("hidden")
    } else if (e.target.id === "location") {
        listaFiltrada.classList.remove("hidden")
        masMenos.classList.add("hidden")
    }
})
modal.addEventListener("click", (e) => {
    if (e.target.id !== "modalContent") {
        modalContent.classList.add("hidden");
    }
})