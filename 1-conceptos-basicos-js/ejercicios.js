/*

            Arrow Functions

---------------------------------------------
1.- Hacer una función que convierta de grados
    centígrados a Farenheit
---------------------------------------------
*/
function Farenheit() {
    let gradosCentigrados = prompt("Ingrese los grados centígrados");
    let farenheit = (gradosCentigrados * 9 / 5) + 32;
    return farenheit;

    console.log(gradosCentigrados + " grados centígrados son " + farenheit + " grados Farenheit");
}



/*
---------------------------------------------
2.- Hacer una función que muestre la tabla de
    multiplicar de un número
---------------------------------------------
*/

function tablaDeMultiplicar(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(numero + " x " + i + " = " + numero * i);
    }
}

//tablaDeMultiplicar(5);

/*
---------------------------------------------
3.- Función que pida N parametros y devuelva
    cuantos parámetros se le pasaron
---------------------------------------------
*/

function obtenerCantidadDeParametros() {
    return arguments.length;

}

/* El objeto "arguments" solo puede ser usado con las funciones
   clásicas; no puede ser utilizado dentro de arrow functions
*/


/*
---------------------------------------------
4.- Leer un arreglo de enteros y sacar su
    media y promedio
---------------------------------------------
*/

let enteros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
console.log( obtenerPromedio(enteros) );

/*
---------------------------------------------
5.- Leer el nombre y sueldo de 8 empleados y
    mostrar el nombre y sueldo del empleado
    que más gana
---------------------------------------------
*/
function leerSueldoEmpleado(){
    let nombre;
    let sueldo;
    let numeroEmpelados;

    for (let i = 0; i < numeroEmpelados; i++) {
        nombre = prompt("Ingrese el nombre del empleado");
        sueldo = prompt("Ingrese el sueldo del empleado");
        console.log(nombre + " tiene un sueldo de " + sueldo);
    }
}


/*
---------------------------------------------
6.- Guardar en un array los 20 primeros
    números pares
---------------------------------------------
*/
let array = [20];

for (i = 0; i < 20; i++) {
    array[i] = i * 2;
}

/*
---------------------------------------------
7.- Hacer una funcion que calcule el tiempo
    necesario para que un automóvil que se
    mueve con una velocidad de 73000 m/h
    recorra una distancia de 120 km.
              (TIEMPO = d/v)
---------------------------------------------
*/
function calcularMovimiento{
    let velocidad = 73000;
    let distancia = 120;
    let tiempo = distancia / velocidad;
    return tiempo;

    console.log("El tiempo que demora en moverse a una distancia de 120km es:" + tiempo);
}

/*
---------------------------------------------
8.- Crear una funcion que reciba como
    parametro una oración y defina si
    es palindromo
---------------------------------------------
*/
function palindromo{
    let oracion = prompt("Ingrese una oracion");
    let palindromo = oracion.split("").reverse().join("");

    if (oracion === palindromo) {
        console.log("La oracion es palindromo");
    } else {
        console.log("La oracion no es palindromo");
    }
}
/*
---------------------------------------------
9.- Mostrar los primeros 10 dígitos de la
    serie Fibbonacci
---------------------------------------------
*/

console.log("0,1,1,2,3,5,8,13,21,34");

/*

            Condicionales

---------------------------------------------
10.- Escribe una función que halle 
     el máximo entre dos números 
---------------------------------------------
*/
function calcularMaximo{
    let numero1 = prompt("Ingrese el primer numero");
    let numero2 = prompt("Ingrese el segundo numero");

    if (numero1 > numero2) {
        console.log(numero1 + " es el mayor");
    } else {
        console.log(numero2 + " es el mayor");
    }
}

/*
---------------------------------------------
11.- Escribe una función que halle 
     el máximo entre tres números
---------------------------------------------
*/

function calcularMaximo{
    let numero1 = prompt("Ingrese el primer numero");
    let numero2 = prompt("Ingrese el segundo numero");
    let numero3 = prompt("Ingrese el tercer numero");

    if (numero1 > numero2 && numero1 > numero3) {
        console.log(numero1 + " es el mayor");
    } else if (numero2 > numero1 && numero2 > numero3) {
        console.log(numero2 + " es el mayor");
    } else {
        console.log(numero3 + " es el mayor");
    }
}

/*
---------------------------------------------
12.- Escribe una función  que cheque si un 
     número es negativo, positivo o cero
---------------------------------------------
*/
function chequearNumeros{
    let numero = prompt("Ingrese un numero");
    
    if (numero < 0) {
        console.log(numero + " es negativo");
    }
    else if (numero > 0) {
        console.log(numero + " es positivo");
    }
    else {
        console.log(numero + " es cero");
    }
}

/*
---------------------------------------------
13.- Escribe una función para verificar si 
     un número es divisible entre 5 y 11 
     o no lo es
---------------------------------------------
*/

function verificarNumero{
    let numero = prompt("Ingrese un numero");

    if (numero % 5 === 0 && numero % 11 === 0) {
        console.log(numero + " es divisible entre 5 y 11");
    } else {
        console.log(numero + " no es divisible entre 5 y 11");
    }
}
/*
---------------------------------------------
14.- Escriba una función para ingresar 
     cualquier letra del alfabeto y verifique 
     si es vocal o consonante
---------------------------------------------
*/
function verificarLetra{
    let letra = prompt("Ingrese una letra");

    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
        console.log(letra + " es una vocal");
    } else {
        console.log(letra + " es una consonante");
    }
}

/*

            Ciclos For

---------------------------------------------
15.- Escribe una función que imprima todos
     los números naturales de 1 hasta n
---------------------------------------------
*/

function numerosNaturales{
    let numero = prompt("Ingrese un numero");

    for (let i = 1; i <= numero; i++) {
        console.log(i);
    }
}

/*
---------------------------------------------
16.- Escribe una función que imprima todos
     los números naturales en reversa, 
     desde n hasta 1.
---------------------------------------------
*/
function numerosNaturalesReversa{
    let numero = prompt("Ingrese un numero");

    for (let i = numero; i >= 1; i--) {
        console.log(i);
    }
}

/*
---------------------------------------------
17.- Escribe una función que imprima todos
     los números pares entre 1 y 100
---------------------------------------------
*/
function numerosPares{
    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

/*
---------------------------------------------
18.- Escribe una función que imprima todos
     los números nones entre 1 y 100
---------------------------------------------
*/
function numerosNones{
    for (let i = 1; i <= 100; i++) {
        if (i % 2!== 0) {
            console.log(i);
        }
    }
}

/*
---------------------------------------------
19.- Escribe una función que halle la suma
     de todos los numeros naturales entre 
     1 y n
---------------------------------------------
*/

function sumarNumerosNaturales{
    let numero = prompt("Ingrese un numero");
    let suma = 0;

    for (let i = 1; i <= numero; i++) {
        suma = suma + i;
    }
    console.log(suma);
}

/*
---------------------------------------------
20.- Escribe una función que imprima una
     pirámide de astericos como la siguiente:
       
                     *
                    * *
                   * * *
                  * * * *
                 * * * * *
---------------------------------------------
*/
function piramideAstericos{
    let altura = prompt("Ingrese la altura de la piramide");
    let espacios = altura - 1;
    let asteriscos = 1;

    for (let i = 1; i <= altura; i++) {
        for (let j = 1; j <= espacios; j++) {
            console.log(" ");
        }
        for (let j = 1; j <= asteriscos; j++) {
            console.log("*");
        }
        espacios--;
        asteriscos++;
        console.log("\n");
    }
}
