let nombre ="juan";
let apellido="pineda";
let frase ="no nombre es juan pinedo";

let nombreCompleto = nombre.concat(apellido);

let nombreRepetido = nombre.repeat(3);
let respuesta = frase.includes(nombre);
let indexNombre = frase.indexOf(nombre);

let arrayFrase = frase.split(" ");

let subFrase = frase.substring(3,14);

document.write(respuesta);
document.write("<hr>");
document.write(indexNombre);
document.write("<hr>");
document.write(nombreRepetido);
document.write("<hr>");
document.write("el tercer token: "+arrayFrase[2]);
document.write("<hr>");
document.write("el sub string: "+subFrase);