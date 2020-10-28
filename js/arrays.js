var frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];

console.log(frutas);

console.log(frutas.length);

console.log(frutas[0]);
//Manzana

console.log(frutas[3]);
//Fresa


//

var frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];

var masFrutas = frutas.push("Uvas");
//["Manzana","Plátana","Cereza", "Fresa", "Uvas"]

var masFrutas = frutas.pop("Uvas");
//["Manzana", "Plátano", "Cereza", "Fresa"]

var nuevaLongitud = frutas.unshift("Uvas");
//["Uvas","Manzana","Plátana","Cereza","Fresa"]

var borrarFruta = frutas.shift("Uvas");
//[Manzana","Plátana","Cereza","Fresa"]
//Solo borra el primero

var posicion = frutas.index0f("Cereza");

posicion;
//2
frutas[2];
//"Cereza"