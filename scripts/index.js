/**
 * @Autor: Adrian Iglesias Riño (Estudiante)
 * @github:
 */
/*  <!--funcionalidades del cajero, *depositar(), *retirar(), *transferir(), *iniciar sesion(), *operaciones del Cajero()-->*/

/*Lo primero seria tener en mente el SALDO. Que será una variable que cambie.*/
/*Luego otra que seria el pin, se pondra en mayusculas PIN_CORRECTO*/
/*luego estarian los intentos. Que seran 3.*/

let saldo = 1000; //estarian en una base de datos
const PIN_CORRECTO = "1234"; //lo mismo que la de arriba.
let intentosRestantes = 3;

function mostrarSaldo() {
    console.log(`Su saldo actual es ${saldo.toFixed(2)} €`);
}
function depositarSaldo() {
    const deposito = parseFloat(prompt("Ingrese la cantidad a depositar"));
    if (isNaN(deposito) || deposito <= 0) {
        console.log(`Cantidad inválida. Intente de nuevo`);
    } else {
        saldo += deposito;
        //ahora imprimo el saldo depositado 
        console.log(`Saldo depositado ${deposito.toFixed(2)}€`);
        //despues el saldo actual.
        mostrarSaldo();
    }
}
function retirar() {
    const retiro = parseFloat(prompt("Ingresa la cantidad a retirar"));
    if (isNaN(retiro) || retiro <= 0 || retiro > saldo) {
        console.log(`Cantidad inválida. Intente de nuevo`);
    } else {
        saldo -= retiro;
        console.log(`Saldo retirado ${retiro.toFixed(2)}€`);
        mostrarSaldo();
    }
}
function transferir() {
    //monto es una cantidad de dinero con la que vamos hacer movimientos
    const monto = parseFloat(prompt(`Ingrese la cantidad a transferir:`))
    if (isNaN(monto) || monto <= 0 || monto > saldo) {
        console.log(`Cantidad inválida o insuficiente. Intente de nuevo.`)
    } else {
        const cuentaDestino = prompt(`Ingrese el numero de cuenta de destino:`)
        // isValidStructureIBAN(cuentaDestino);
        console.log(`se han transferido ${monto.toFixed(2)}€`);
        saldo -= monto;
        mostrarSaldo();
    }
}
function iniciarSesion() { //esto seria nuestro inicio por lo evidente.
    let pin = prompt(`Ingrese su PIN:`);
    while (pin !== PIN_CORRECTO && intentosRestantes > 1) {
        intentosRestantes--;
        console.log(`Pin incorrecto te quedan ${intentosRestantes} intentos`);
        pin = prompt(`Ingrese su PIN:`);
    }
    if (pin === PIN_CORRECTO) {
        console.log(`Inicio de sesión existoso`);
        console.log(`Tu saldo es de: ${saldo}€`);
        operacionesCajero();
    } else {
        console.log(`PIN incorrecto. El cajero se ha bloqueado.`)
    }
}
function operacionesCajero() { //esto seria el menu.

}

// function isValidStructureIBAN(cuenta_a_validar){
// return /[a-zA-Z]{2}[0-9]{20}$/g.test(strValue);
// }

iniciarSesion();
mostrarSaldo();
depositarSaldo();
retirar();
transferir();