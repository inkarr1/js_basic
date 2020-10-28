//For
var estudiantes =["Maria", "Sergio","Rosa", "Daniel"];

function saludarEstudiantes(estudiante){
    console.log('Hola, ${estudiante}');
}

for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}


//For... of
var estudiantes =["Maria", "Sergio","Rosa", "Daniel"];

function saludarEstudiantes(estudiante){
    console.log('Hola, ${estudiante}');
}

for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}

//While
var estudiantes =["Maria", "Sergio","Rosa", "Daniel"];

function saludarEstudiantes(estudiante){
    console.log('Hola, ${estudiante}');
}

while(estudiantes.length > 0){
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}