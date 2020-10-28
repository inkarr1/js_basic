if (true) {
    console.log("Hola");
} else{
    console.log("Soy falso");
}

if (false) {
    console.log("Hola");
} else{
    console.log("Soy falso");
}

if () {
    console.log("Hola");
} else if{
    console.log("Soy falso");
} else{
    console.log("No sé el valor");
}

//Problema

var edad =18;

if (edad === 18) {
    console.log("Puede votar, será tu 1ra votación");
} else if (edad >18 ){
    console.log("Puedes votar de nuevo");
} else{
    console.log("Aún no puedes votar.");
}

//

condition ? true : false;

var numero = 1;

var resultado = numero === 1 ? "Si soy un uno" : "No, no soy uno";

//Reto de papel o tijera

var piedra = "piedra";
var papel = "papel";
var tijera = "tijera";
var choque = function(hand,machine){
    if (hand === piedra && machine === papel){
        console.log("Piedra pierde con papel");
    } else if(hand === papel && machine === tijera){
        console.log("Papel pierde contra tijera");

    }else if (hand === tijera && machine === piedra){
        console.log("Tijera pierde contra piedra");
    } else {
        console.log("Máquina gana");
    }
} else if(hand === machine){
    console.log("Quedan empate");
}