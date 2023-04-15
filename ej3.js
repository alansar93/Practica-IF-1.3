const PRIMER_PREMIO = "1000000 USD!!!!";
const SEGUNDO_PREMIO = "500000 USD!!";
const TERCER_PREMIO = "Un Helado de limon =(";

let numeroElegir = prompt("Elegi un numero del 1 al 5");
let numeroUno = "1";
let numeroDos = "2";
let numeroTres = "3";

if ((numeroElegir >= 1) && (numeroElegir <= 5)) {
    if (numeroElegir == numeroUno) {
        document.write ("GANASTE " + PRIMER_PREMIO + " FELICITACIONES CAMPEON")
    } else if (numeroElegir == numeroDos) {
        document.write ("FELICITACIONES GANASTE " + SEGUNDO_PREMIO)
            }else if (numeroElegir == numeroTres) {
                document.write ("POR LO MENOS TE LLEVAS" + TERCER_PREMIO + " MAS SUERTE PARA LA PROXIMA")
            } else if ((numeroElegir = 4) || (numeroElegir = 5))  {
                document.write ("NO GANASTE NADA MAS SUERTE PARA LA PROXUMA")
            }
} else if ((numeroElegir <= 0) || (numeroElegir >= 6)){
    document.write ("Game Over")
    
}





