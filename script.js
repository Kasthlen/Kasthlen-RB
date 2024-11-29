//alert("Bienvenidoooooo"); "muestra una ventana emergente"
//alert(5*3+2)


//let saludo = "helllooooooo";

//let despedida;
//despedida = "bye byeeeee";
//let edad = 16;
//saludo = "que mas pueeees";

let nombreUsuario = " kasthlen";

/*alert(saludo+""+nombreUsuario); //puedo concatenar strings usando +  (camellCase) cada inicial en mayuscula

alert(despedida);*/

function saludarUsuario() {
    let inputUsuario = document.querySelector("#nombre-usuario").value
    console.log(inputUsuario)
    alert("Hola de nuevo" + inputUsuario)
}

function createFlower() {
    const flower = document.createElement('div');
    flower.classList.add('flower');
    flower.style.left = Math.random() * 100 + 'vw'; //vista del ancho
    flower.style.animationDuration = Math.random() * 20 + 150 + 's';
    document.body.appendChild(flower);
    setTimeout(() => {
        flower.remove();
    }, 5000);
}
setInterval(createFlower, 100);


edad = 17; // cambio mi valor
edad + 1; // suma 1
edad++; // suma 1
edad--; // resta 1
// estos sirven para sumar mi numero

console.log(edad);
// muestra lo que pongamos entre parentesis en mi consola

//LAS CONSTANTES LAS PONGO  EN MAYUSCULAS PARA DIFERENCIAR MIS VARIABLES
//const SALUDO_USUARIO = saludo+""+nombreUsuario;
//saludo += nombreUsuario; //le suma el valor
//saludo = nombreUsuario //cambia el valor 

//alert(SALUDO_USUARIO)//


// let= despedida;
// despedida = "adios";
// despedida 

// OPERADORES LOGICOS
console.log("Hola");
console.log(5 > 4);// mayor que
console.log(5 < 4);// menor que
console.log(5 >= 5); //mayor o igual
console.log(5 <= 6);// menor oigual
console.log(5 === 5); //etictamente igual
console.log(5 == 5);//igual que
console.log(5 == 4);//igual que
console.log(5 != 7); // no es igual
let mayor = 5 > 8;
console.log("a" > "b");
let articulo = ("texto");
console.log("Cortazar" > "Navarro");


// if (edad >= 18) {
//     alert("eres mayor de edad");
// } 
// else {
//     alert("no eres mayor de edad");
// }
// if (edad >= 18) {
//     console.log("eres mayor de edad");
// } 
// else {
//     console.log("no eres mayor de edad");
// }
// let premium = true;
// if (premium) {
//     console.log("tienes cuenta premium");
//     alert("bienvenido" + nombreUsuario)
// } else if (edad >= 18) {
//     console.log("puedes crear una cuenta");
// } 
// else {
//     ("no puedes crear una cuenta");}


//TIPOS DE SELECTORES

document.getElementById("texto").innerHTML = "holaaaa" + nombreUsuario;
document.getElementById("caja").innerHTML = "<p>Hasta luego</p>"
//con .innerhtml voy agregarle texo directamrnte desde java a html

//seleccinar primer elemento que encuentre con la caracteristica que le doy
document.querySelector("#texto").innerHTML = "metiendo codigo en primer Texto"

//seleccinar todos los elementos
document.querySelectorAll("p").innerHTML = "metiendo codigo en P"

// texto.innerHTML = "he guardado mi selector dentro de una variable"
//cree una variable para no tener que pooner todo el texto, sobretodo cuando voy a 
//utilizar mi selector muchas veces seguidas en mi pagina
let texto = document.getElementById("texto")



//FUNCIONES
function saludar() {

    alert("Bienvenido")
}
saludar();

function modoNoche() {
    document.body.style.backgroundColor = "black";

}
function modoDia() {
    document.body.style.background = "white";
}
function saludarUsuario() {
    let inputUsuario = document.querySelector("#nombre-usuario").value
    let generoFemenino = document.getElementById("femenino")
    let generoMasculino = document.getElementById("masculino")

    if (generoFemenino.checked) {
        alert("Bienvenida " + inputUsuario);
    } else if (generoMasculino.checked) {
        alert("bienvenido " + inputUsuario);
    } else {
        alert("hola caracola " + inputUsuario);
    }
    mostrarUsuario(inputUsuario);
}

function mostrarUsuario(inputUsuario) {
    const contenedorUsuarios = document.querySelector("#contenedor-usuarios")
    const elementoUsuario = document.createElement("li")

    //ejemplos de usar texto + datos js
    //elementoUsuario.innerHTML = "hola" + inputUsuario;
    //elementoUsuario.innerHTML = `hola ${inputUsuario}`
    elementoUsuario.innerHTML = inputUsuario;
    contenedorUsuarios.appendChild(elementoUsuario);
}

const carousel = document.querySelector('.carousel');
const imageFolder = 'imagenes/arte';
const imageCount = 10;

for (let i = 1; i <= imageCount; i++) {
    const img = document.createElement('img');
    img.src = `imagenes/arte/imagen${i}.jpg`;
    carousel.appendChild(img);
}





