/**
 * @Autor: Adrian Iglesias Riño (Estudiante)
 * @github:https://github.com/Torremolinos/Cajero-Consola-JS
 */
/*  <!--funcionalidades del cajero, *depositar(), *retirar(), *transferir(), *iniciar sesion(), *operaciones del Cajero()-->*/

/*Lo primero seria tener en mente el SALDO. Que será una variable que cambie.*/
/*Luego otra que seria el pin, se pondra en mayusculas PIN_CORRECTO*/
/*luego estarian los intentos. Que seran 3.*/

let saldo = 1000; //estarian en una base de datos
const PIN_CORRECTO = "1234"; //lo mismo que la de arriba.
let intentosRestantes = 3;

let saldoActual = document.getElementById("saldoActual");
let cantidad = document.getElementById("ingreso");
let error = document.getElementById("error");
const btnDepositar = document.getElementById("btnDepositar");
const btnRetirar = document.getElementById("btnRetirar");
const btnTransferir = document.getElementById("btnTransferir");
const btnSalir = document.getElementById("btnSalir");

function mostrarSaldo() {
    saldoActual.innerHTML = `Su saldo actual es ${saldo.toFixed(2)} €`;
}
function depositarSaldo() {
    const deposito = parseFloat(prompt(`Inserta la cantidad que quieres ingresar`));
    if (isNaN(deposito) || deposito <= 0) {
        alert(`Cantidad inválida. Intente de nuevo`);
    } else {
        saldo += deposito;
        //ahora imprimo el saldo depositado 
        alert(`Saldo depositado ${deposito.toFixed(2)}€`);
        //despues el saldo actual.
        mostrarSaldo();
    }
}
function retirar() {
    const retiro = parseFloat(prompt(`Inserta la cantidad a retirar`));
    if (isNaN(retiro) || retiro <= 0 || retiro > saldo) {
        alert(`Cantidad inválida. Intente de nuevo`);
    } else {
        saldo -= retiro;
        alert(`Saldo retirado ${retiro.toFixed(2)}€`);
        mostrarSaldo();
    }
}
function transferir() {
    //monto es una cantidad de dinero con la que vamos hacer movimientos
    const monto = parseFloat(prompt(`Inserta la catidad que quieres transferir`))
    if (isNaN(monto) || monto <= 0 || monto > saldo) {
        alert(`Cantidad inválida o insuficiente. Intente de nuevo.`);
    } else {
        const cuentaDestino = prompt(`Ingrese el numero de cuenta de destino:`)
        // isValidStructureIBAN(cuentaDestino);
        alert(`se han transferido ${monto.toFixed(2)}€`);
        saldo -= monto;
        mostrarSaldo();
    }
}
function iniciarSesion() { //esto seria nuestro inicio por lo evidente.
    let pin = prompt(`Ingrese su PIN:`);
    while (pin !== PIN_CORRECTO && intentosRestantes > 1) {
        intentosRestantes--;
        alert(`Pin incorrecto te quedan ${intentosRestantes} intentos`);
        pin = prompt(`Ingrese su PIN:`);
    }
    if (pin === PIN_CORRECTO) {
        alert(`Inicio de sesión existoso`);
        alert(`Tu saldo es de: ${saldo}€`);
        // operacionesCajero();
    } else {
        alert(`PIN incorrecto. El cajero se ha bloqueado.`)
        bloqueado() 
    }
}
const salir = () => {
    window.location.href ='salir.html';
 };
 const bloqueado = () => {
        window.location.href = 'bloqueo.html'
 };
 iniciarSesion();
mostrarSaldo();
btnDepositar.addEventListener("click", () => {
    depositarSaldo();
})
btnRetirar.addEventListener("click", () => {
    retirar();
});
btnTransferir.addEventListener("click", () => {
    transferir();
});
btnSalir.addEventListener("click", () => {
 salir();
});
// function operacionesCajero() { //esto seria el menu.
//     //para mostrar un menu necesitamos una variable que no es constante
//     let continuar = true;

//     while (continuar) {//aqui si pones true es lo mismo que poner continuar.
//         console.log(`Menú del cajero:`);
//         console.log(`1. Consultar saldo:`);
//         console.log(`2. Depositar saldo:`);
//         console.log(`3. Retirar dinero:`);
//         console.log(`4. Transferir dinero:`);
//         console.log(`5. Salir`);
//         const opcion = prompt(`Por favor, elija  una opcion:\nMenú del cajero\n1. Consultar saldo:\n2. Depositar saldo:\n3. Retirar dinero:\n4. Transferir\n5. Salir`);
//         switch (opcion) {
//             case "1":
//                 mostrarSaldo();
//                 break;

//             case "2":
//                 depositarSaldo();
//                 break;

//             case "3":
//                 retirar();
//                 break;

//             case "4":
//                 transferir();
//                 break;

//             case "5":
//                 console.log(`Saliendo del programa....`)
//                 continuar = false;
//                 break;

//             default:
//                 console.log(`Opción equivocada.`)
//                 break;
//         }
//     }
// }

// function isValidStructureIBAN(cuenta_a_validar){
// return /[a-zA-Z]{2}[0-9]{20}$/g.test(strValue);
// }

// iniciarSesion();
// mostrarSaldo();
// depositarSaldo();
// retirar();
// transferir();
// operacionesCajero();