
/* let numeroUsuarioPrimero = prompt("Introducir el primer numero obtenido");
let numeroUsuarioSegundo = prompt("Introducir el segundo numero obtenido");
let numeroUsuarioTercero = prompt("Introducir el tercer numero obtenido"); */


/* if ((numeroUsuarioPrimero == numeroUsuarioSegundo) && (numeroUsuarioPrimero == numeroUsuarioTercero)) {
    document.write("FELICIDADES GANASTE " + PRIMER_PREMIO + " SOS EL MEJOR");
} else if ((numeroUsuarioPrimero == numeroUsuarioSegundo) || (numeroUsuarioPrimero == numeroUsuarioTercero) || (numeroUsuarioSegundo == numeroUsuarioTercero)) {
    document.write("FELICIDADES GANSTE " + SEGUNDO_PREMIO + " MAS SUERTE PARA LA PROXIMA");
} if ((numeroUsuarioPrimero !== numeroUsuarioSegundo) && (numeroUsuarioPrimero !== numeroUsuarioTercero) && (numeroUsuarioSegundo !== numeroUsuarioTercero)) {
    document.write("Premio consueldo de " + TERCER_PREMIO)
}
*/
/* 
const PRIMER_PREMIO = "1000000 USD!!!!";
const SEGUNDO_PREMIO = "500000 USD!!";
const TERCER_PREMIO = "Un Helado de limon" */


const numero1 = document.querySelector("#numero1");
const numero2 = document.querySelector("#numero2");
const numero3 = document.querySelector("#numero3");
const premioBingo = document.querySelector("#premio")

function bingo() {
 let numeroa = numero1.value
let numerob = numero2.value
let numeroc = numero3.value

if ((numeroa == numerob) && (numerob == numeroc)) {
    premioBingo.innerHTML = "GANASTE 1.000.000 USD!!!!!!!"
} else if ((numeroa == numerob) || (numeroa == numeroc) || (numerob == numeroc)) {
    premioBingo.innerHTML = "GANASTE 500.000 USD!!!!!"
} else { premioBingo.innerHTML = "ganaste un helado de limon"
} 
}
