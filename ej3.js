const PRIMER_PREMIO = "1000000 USD!!!!";
const SEGUNDO_PREMIO = "500000 USD!!";
const TERCER_PREMIO = "Un Helado de limon =(";

let numeroUsuarioPrimero = prompt("Introducir el primer numero obtenido");
let numeroUsuarioSegundo = prompt("Introducir el segundo numero obtenido");
let numeroUsuarioTercero = prompt("Introducir el tercer numero obtenido");


if ((numeroUsuarioPrimero == numeroUsuarioSegundo) && (numeroUsuarioPrimero == numeroUsuarioTercero)) {
    document.write("FELICIDADES GANASTE " + PRIMER_PREMIO + " SOS EL MEJOR");
} else if ((numeroUsuarioPrimero == numeroUsuarioSegundo) || (numeroUsuarioPrimero == numeroUsuarioTercero) || (numeroUsuarioSegundo == numeroUsuarioTercero)) {
    document.write("FELICIDADES GANSTE " + SEGUNDO_PREMIO + " MAS SUERTE PARA LA PROXIMA");
} if ((numeroUsuarioPrimero !== numeroUsuarioSegundo) && (numeroUsuarioPrimero !== numeroUsuarioTercero) && (numeroUsuarioSegundo !== numeroUsuarioTercero)) {
    document.write("Premio consueldo de " + TERCER_PREMIO)
}



