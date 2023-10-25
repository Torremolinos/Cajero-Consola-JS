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

}
function iniciarSesion() { //esto seria nuestro inicio por lo evidente.

}
function operacionesCajero() { //esto seria el menu.

}

iniciarSesion();
mostrarSaldo();
depositarSaldo();
retirar();