let usuarios = []
let userId = 1

function menu(){
    window.alert("Bienvenido a campusApp");
    while (true) {
        opt = window.prompt("Que deseas hacer? \n 1. Registrar Usuarios \n 2. Listar Usuarios \n 3. Salir");
        
        if (opt === "1") {
            window.alert("Registro")
        } else if (opt === "2"){
            window.alert("Listar")
        } else if (opt === "3"){
            window.alert("Saliendo...")
            break
        }
    }

}

function registro(){
    const identificacion = window.prompt("Ingrese su identificacion");
    const nombre = window.prompt("Ingresar nombre");
    const celular = window.prompt("Ingrese su numero de celular");
    let usuario = {
        "identificacion" : identificacion,
        "nombre" : nombre,
        "celular" : celular
    }
    usuarios.push(usuario);
    window.alert("Se registro correctamente!")
    
}

menu()