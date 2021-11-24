let nombre ="juan";
let apellido="pineda";
let frase =" no nombre es juan pinedo ";

let nombreCompleto = nombre.concat(apellido);

let nombreRepetido = nombre.repeat(3);
let respuesta = frase.includes(nombre);
let indexNombre = frase.indexOf(nombre);

let arrayFrase = frase.split(" ");

let subFrase = frase.substring(3,14);

let fraseSinESpacio = frase.trim();

document.write(respuesta);
document.write("<hr>");
document.write(indexNombre);
document.write("<hr>");
document.write(nombreRepetido);
document.write("<hr>");
document.write("el tercer token: "+arrayFrase[2]);
document.write("<hr>");
document.write("el sub string: "+subFrase);
document.write("<hr>");
document.write("sin espaciosss: "+frase);
document.write("<hr>");
document.write("sin espaciosss: "+fraseSinESpacio);
document.write("<hr>");
document.write("lengh con espaciosss: "+frase.length);
document.write("<hr>");
document.write("lengh sin espaciosss: "+fraseSinESpacio.length);

const campo1 = document.getElementById("campo1");
document.write(campo1);
campo1.setAttribute("contentEditable","false");