/* PUNTO 1) 
Escribir una lista de usuarios con los siguientes datos: nombre, número de documento, contraseña, tipo de usuario. 
El tipo de usuario será: 1: administrador Y 2: cliente. 
Guardarla en un array de objetos.
*/

//El codigo hace que el mismo usuario cree el array de objetos ya que inicialmente le pregunta cuantos usuarios quiere guardar
//el array se va llenando con un for que arma cada objeto  


let cantidadUsuarios = parseInt(prompt("por favor indique la cantidad de usuarios que van a usar el cajero"))
let usuarios = []
let usuario = {}
let billetes = []
let billete = {}
let montoAcomulado = 0

function iniciarCajero(){
    for (let index = 0; index < cantidadUsuarios; index++) {

        usuario =
        {
            nombre: prompt("ingresa el nombre").trim().toLocaleUpperCase(),
            numeroDocumento: prompt("ingresa el numero de documento").trim(),
            contrasena: prompt("ingresa una contraseña").trim(),
            tipoUsuario: parseInt(prompt("Ingresa el tipo de usuario \nSi es administrador digita el numero 1\nsi es cliente digita el 2"))
        }
        usuarios.push(usuario)
    }
}
iniciarCajero()
console.log(usuarios)

/*
    PUNTO 2) Realizar un programa que al inicio solicite ingresar documento y contraseña, 
    si el usuario no existe debe indicar que no existe y volver a preguntar usuario y contraseña

    PUNTO 3) si el usuario es administrador, debe permitir cargar el cajero de la siguiente manera:
    Solicitar la cantidad de billetes de 5, 10, 20, 50 y 100 mil pesos COP

    PUNTO 4) Almacenar esta información en un array de objetos.

    punto 5) Una vez tenga la información, debe mostrar en consola la suma por cada 
    denominación y el total general. 
*/

function inicioSesion() {
    let user = prompt("Ingresa tu usuario").trim().toLocaleUpperCase()
    let pass = prompt("ingresa la contraseña").trim().toLocaleUpperCase()
    while (user != "ADMINISTRADOR" && user != "CLIENTE") {
        alert("usuario no existe ")

        user = prompt("Ingresa tu usuario").trim().toLocaleUpperCase()
        pass = prompt("ingresa la contraseña").trim().toLocaleUpperCase()
    }
    if (user == "ADMINISTRADOR") {
        alert("Bienvenido Administrador, recarga el cajero")
        recargarCajero()
    }
    if (user == "CLIENTE") {
        alert("Bienvenido cliente")
        retirarDinero()
    }
}
inicioSesion()



function recargarCajero() {
    let montoTotal = 0
    let respuesta = parseInt(prompt("¿Quieres ingresar una denominación?\nNO: Digita 2 \nSI: Digita 1"))
    while (respuesta == 1) {
        billete =
        {
            denominacion: parseInt(prompt("ingresa la denominacion del billete\n 5000, 10000, 20000, 50000 y 100000")),
            cantidadBilletes: parseInt(prompt("ingresa la cantidad de billetes de esa denominacion"))
        }
        billetes.push(billete)
        respuesta = parseInt(prompt("¿Quieres ingresar una denominación?\nNO: Digita 2 \nSI: Digita 1"))
        montoDenominacion = billete.denominacion * billete.cantidadBilletes
        montoTotal = montoTotal + montoDenominacion
        console.log("El monto por la denominación " + billete.denominacion + " es " + montoDenominacion)
        console.log("El monto total va en: " + montoTotal)
        montoAcomulado = montoTotal
    }
    /*
        PUNTO 6) Una vez el cajero esté cargado, debe volver a solicitar usuario y contraseña, 
        si es administrador, se repite el mismo proceso, sumar a la Cantidad actual 
    */
    console.log(billetes)
    while (respuesta == 2) {
        inicioSesion()
    }
   
}
    /*
        PUNTO 7) si es cliente debe proseguir de la siguiente manera:
        Si el cajero no tiene dinero cargado, debe aparecer un mensaje en 
        consola: “Cajero en mantenimiento, vuelva pronto.” Y reiniciar desde el 
        inicio.
        PUNTO 8) Si el cajero ya tiene dinero cargado, debe preguntar la cantidad deseada 
        a retirar. Una vez obtenida la información, debe indicar cuánto dinero 
        puede entregar basado en la cantidad disponible y los tipos de billetes. 
    */
   
function retirarDinero() {
    
    if (montoAcomulado === 0 ) {
        alert("Cajero en mantenimiento, vuelva pronto")
        iniciarCajero()
    } else {
        cantidadARetirar = parseInt(prompt("Ingrese la cantiad que necesita retirar"))
        alert("Actualmente el cajero le puede entregar hasta "+montoAcomulado+" COP  en billetes de:\n5000, 10000, 20000, 50000 o 100000")
        while (cantidadARetirar) {
            
        }
        
    }
}


// billetes.forEach(element => {
//     console.table([5000, 10000, 20000, 50000, 100000])
// });




