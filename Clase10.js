let nombre = "Programación" + " Fácil.";
let saludo = "Les doy la bienvenida a ";
let año= " 2022"
let fraseCompleta = saludo + nombre + año;
console.log(fraseCompleta);

let frase = "JavaScript " + "es un lenguaje" + "esencial para crear" + " sitios web poderosos.";
console.log(frase);

let numeroString1 = "10";
let numeroString2 = "20";
let numeroString3 = "30";
let texto1= " Es mayor a "
let texto2= " y menor a "
let concatenaNumeros = numeroString2 + texto1 + numeroString1 + texto2 + numeroString3;
console.log(concatenaNumeros);

var age= prompt("¿Cuál es tu edad?");
console.log(age);

var name= prompt("¿Cuál es tu nombre?");
console.log(name);

console.warn (`Tu nombre es ${name}, tu edad es ${age}`);

let edad;
edad = prompt("Introduce tu edad");
sexo = prompt("Introduce tu sexo en minúsculas")
if (edad >= 20 && sexo=="femenino"){
 alert(" Femenino - Puedes entrar, eres mayor de edad.");
} else if (edad >= 18 && sexo=="masculino") {
alert(" Maculino - Puedes entrar, eres mayor de edad.");} 
else { alert("No puedes ingresar")}


