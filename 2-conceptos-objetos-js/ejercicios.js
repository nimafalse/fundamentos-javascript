/*

                            Objetos Literales

-----------------------------------------------------------------------
1.- Elige un pingüino de la lista de pingüinos ficticios de wikipedia 
    https://en.wikipedia.org/wiki/List_of_fictional_penguins
    Crea un objeto llamado myPenguin con propiedades que representen
    la información listada en cada columna en esa página de wikipedia
    (por ejemplo: character, origin...)
-----------------------------------------------------------------------
*/
const myPenguin = {
	character: "Captain Cook",
	origin: "Mr. Popper's Penguins",
	author: "Richard and Florence Atwater",
	notes: "Children's book about a housepainter who ends up with a flock of penguins."
};

/*
-----------------------------------------------------------------------
2.- Imprime el nombre del pingüino en consola, como si fuera un mensaje
    de bienvenida. La salida debe ser algo como:
    "Hola, soy un pingüino y mi nombre es [NOMBRE AQUÍ]"
-----------------------------------------------------------------------
*/
console.log("Hola, soy un pingüino y mi nombre es " + myPenguin.character);

/*
-----------------------------------------------------------------------
3.- Escribe otra línea de código que añada una nueva propiedad a tu 
    pingüino llamada puedeVolar y asignalo a falso.
    Nota: No modifiques el código original donde definiste a tu pingüino
-----------------------------------------------------------------------
*/
myPenguin.puedeVolar = false;

/*
-----------------------------------------------------------------------
4.- Añade un método a tu pingüino llamado 'graznar' que muestre en 
    consola: "kaww kaww!!"
    Nota: Sí, así suenan los pingüinos
    Nota de la Nota: No modifiques el código previo. Hazlo en una
    nueva línea de código.
-----------------------------------------------------------------------
*/
myPenguin.graznar = function() {
	console.log ("kaww kaww!!");
}

console.log(myPenguin.graznar());
/*
-----------------------------------------------------------------------
5.- Añade otro método a tu pingüino llamado 'saludar' que imprima en
    consola el mismo mensaje que escribimos para la bienvenida.
    Esta vez, emplea la palabra reservada "this" para resolverlo.
-----------------------------------------------------------------------
*/
myPenguin.saludar = function() {
    console.log("Hola, soy" + this.character);
};
/*
-----------------------------------------------------------------------
6.- Sin modificar el código previo, cambia el nombre del pingüino a 
    "Señor Pingu" y llama al método "saludar" para verificar que 
    se ha aplicado el cambio correctamente.
-----------------------------------------------------------------------
*/
myPenguin.character = "Señor Pingu";
myPenguin.saludar();
/*
-----------------------------------------------------------------------
7.- Escribe otro método llamado 'volar'. Con este método imprime en 
    consola el mensaje "¡Puedo volar!" si el pingüino tiene 'true' 
    en su atributo 'puedeVolar'. De lo contrario, muestra el mensaje
    "No puedo volar :("
-----------------------------------------------------------------------
*/
myPenguin.volar = function () {
    if (puedeVolar = true) {
        console.log("¡Puedo volar!")
    }
    else {
        console.log("No puedo volar :(")
    }
}
/*
-----------------------------------------------------------------------
8.- Cambia la propiedad "puedeVolar" de tu pingüino a "true". Manda a 
    llamar el método 'volar' para verificar que el cambio se efectuó
    correctamente.
-----------------------------------------------------------------------
*/
myPenguin.puedeVolar = true;
myPenguin.volar();
/*
-------------------------------------------------------------
9.- Crea un objeto que contenga información de una receta 
    para preparar Mole. Debe contener las propiedades de
    título (string), porciones (numero) e ingredientes (un
    arreglo de strings). Muestra la información de la receta
    para que luzca así:
    
    Mole
    Porciones: 2
    Ingredientes:
    canela
    comino
    cocoa
-------------------------------------------------------------
*/
const mole = {
    porciones: 2,
    ingredientes: ["Canela", "Comino", "Cocoa"]
};
/*
-------------------------------------------------------------
10.- Crea un arreglo de objetos, donde cada objeto describa 
    un libro y tenga las propiedades para titulo(string),
    autor(string) y leido(booleano para indicar si se ha 
    leido o no). Itera sobre el arreglo de libros, y por 
    cada libro imprime el titulo y autor, junto con su 
    status de lectura (si ya ha sido leído, o no).
-------------------------------------------------------------
*/
const libros = [
    {
        titulo : "La isla Misteriosa", 
        autor : "Julio Verne", 
        leido : false
    },
    {
        titulo : "1984", 
        autor : "George Orwell", 
        leido : true
    }
];

libros.forEach = function(item) {
    let estadoDeLectura = item.leido ? "ya ha sido leido" : "no ha sido leido aún";
    console.log(`${item.titulo}, por ${item.autor}, ${estadoDeLectura}.`);
}

/*

                            Objetos

-----------------------------------------------------------------------
11.- Haz una clase llamada Persona que siga las siguientes condiciones:
	 Sus atributos son: nombre, edad, RFC, sexo, peso y altura.
	 calcularIMC()
	 esMayorDeEdad()
	 El constructor pide nombre, edad,sexo,peso y altura
	 Generar el RFC a partir de el nombre, edad y sexo
-----------------------------------------------------------------------
*/





class Persona {
    constructor (nombre, edad, sexo, peso, altura) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.RFC = this.generarRFC();
    }

    saludar() {
        console.log(`hola soy ${this.nombre}, y mi edad es ${this.edad}`)
    }

    // Metoodo para calcular el IMC
    calcularIMC() {
        return this.peso / (this.altura * this.altura);
    }

    // Metodo para verificar si es mayor de edad

    esMayorDeEdad() {
        return this.edad >= 18;
    }

    // Metodo para generar el RFC

    generarRFC() {
        const nombreIniciales = this.nombre.substring(0, 2).toUpperCase();
        const sexoLetra = this.sexo.substring(0, 1).toUpperCase();
        const edadDosDigitos = this.edad.toString().padStart(2, "0");
        return `${nombreIniciales}${sexoLetra}${edadDosDigitos}`;
    }
}

const yo = new Persona("miguel", 22, "masculino", 89, 1.80);
yo.saludar();

const el = new Persona("javier", 22, "masculino", 89, 1.80);
el.saludar();
/*
-----------------------------------------------------------------------
12.- Crear una clase Cuenta que tenga los siguientes atributos y metodos:
	 -Titular y cantidad
	 -ingresar(cantidad)
	 -retirar(cantidad)
	 Hacer las validaciones previas
	 Como regla de negocio no debe de tener más de $900 y menos de $10
-----------------------------------------------------------------------
*/

class cuenta {
    constructor (titular, cantidad) {
        this.titular = titular;
        this.cantidad = cantidad;
    }
    
    ingresar(cantidad) {
        if (this.cantidad + cantidad > 900) {
            console.log("No se puede ingresar más de $900");
        } else {
            this.cantidad += cantidad;
            console.log(`Se ha ingresado $${cantidad}. Nuevos Saldo: $${this.cantidad}.`);
        }
    }

    retirar (cantidad) {
        if (this.cantidad - cantidad < 10 ) {
            console.log("No se puede retirar. El saldo no puede ser menor a $10");
        } else {
            this.cantidad -= cantidad;
            console.log(`Se ha retirado $${cantidad}. Nuevo Saldo: $${this.cantidad}.`);
        }
    }
}
