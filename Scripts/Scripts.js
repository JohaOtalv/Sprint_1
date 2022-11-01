/* PUNTO 1) 
Escribir una lista de usuarios con los siguientes datos: nombre, número de documento, contraseña, tipo de usuario. 
El tipo de usuario será: 1: administrador Y 2: cliente. 
Guardarla en un array de objetos.
*/

//El codigo hace que el mismo usuario cree el array de objetos ya que inicialmente le pregunta cuantos usuarios quiere guardar
//para armar cada objeto cree una funcion con los elementos  


let cantidadUsuarios = parseInt(prompt("por favor indique la cantidad de usuarios que van a usar el cajero"))
let usuarios = []
let usuario = []

function ingresarUsuario(_nombre, _númeroDocumento, _contraseña, _tipoUsuario) {
   usuario = {
    _nombre : prompt("ingresa el nombre").trim().toLocaleUpperCase(),
    _númeroDocumento : prompt("ingresa el numero de documento").trim(),
    _contraseña : prompt("ingresa una contraseña").trim(),
    _tipoUsuario : parseInt(prompt("Ingresa el tipo de usuario \nSi es administrador digita el numero 1\nsi es cliente digita el 2"))
    }
    return usuario;
}

function capturarForm() {
    let documento = document.getElementById("user").value;
    let contrasena = document.getElementById("password").value;
    alert("Los datos ingresados fueron:\nDocumento: "+documento+"\nContraseña: "+contrasena);
    
//Vamos a buscar si EL usuario existe

    let documentoYaExiste = usuarios.find(function(_númeroDocumento, _contraseña){
    return documento === usuario._númeroDocumento && contrasena === usuario._contrasena
    })

    do {
        alert("El usuario no existe") 
    } while(!documentoYaExiste())
}
// para armar el array lo hice con un for que llama la funcion y muestra por consola el objeto
for (let i = 0; i <= cantidadUsuarios; i++) {
    usuarios.push(ingresarUsuario())
    console.log(usuario);
}

// probando si la funcion guarda los elementos del objeto y si el for guarda la cantidad de objetos del array

console.log("Nombre: "+usuario.nombre+"\nDocumento: "+usuario.númeroDocumento+ "\nContraseña: "+usuario.contraseña+"\nTipo de Usuario: "+usuario.tipoUsuario)
console.log(usuarios)

/*PUNTO 2) Realizar un programa que al inicio solicite ingresar documento y contraseña, 
si el usuario no existe debe indicar que no existe y volver a preguntar usuario y contraseña*/

//Esta funcion me captura los datos del formulario: el documento y la contraseña


function ingresarBillete(_denominacion, _cantidadBilletes){
        billete = {
             denominacion : parseInt(prompt("ingresa la denominacion del billete\n 5000, 10000, 20000, 50000 y 100000")),
             cantidadBilletes : parseInt(prompt("ingresa la cantidad de billetes de esa denominacion"))
        }
        return billete;
}
    

    do {
        alert("Recarga el cajero")
        ingresarBillete()
        capturarForm()     
    } while(usuario._tipoUsuario === 1)

    let billetes = []
    let billete = []

    
//VERIFICAR SI EL USUARIO ES  1: administrador
// Solicitar la cantidad de billetes de 5, 10, 20, 50 y 100 mil pesos COP
// Almacenar esta información en un array de objetos.
//  mostrar en consola la suma por cada denominación y el total general.




