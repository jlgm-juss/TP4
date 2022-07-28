// 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
// Una propiedad titular con el valor "Alex".
// Una propiedad saldo, teniendo como valor inicial 0.
// Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
// Un método extraer() que permita retirar la cantidad pasada como parámetro.
// Un método informar() que retorne la información del estado de la cuenta. 

// Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

let titular = 'Alex';
let saldo = 0;

class cuenta {
    constructor(titular, saldo,){
        this.titular = titular;
        this.saldo = saldo;
    }
    mostrarDatos(){
        
document.write(`<p> el titular es ${this.titular}</p>`);
document.write(`<p> el saldo de inicio es: ${this.saldo}</p>`)
    }
ingresar (objeto, deposito){
    objeto.saldo += deposito;
    console.log(objeto.saldo);
}
extraer (objeto, retiro){
    if(objeto.saldo >= retiro){
        objeto.saldo -= retiro;
        document.write(`<p>Se retiró $${retiro}</p>`);
    }else{
        document.write(`<p>Saldo insuficiente</p>`);
    }
}
informar (objeto){
    console.log(objeto);
    document.write(`<p> La cuenta de ${objeto.titular}, posee un saldo de $${objeto.saldo}</p>`)
}
}

 let deposito = parseFloat(prompt('Ingrese el monto deseado'));
 objeto.ingresar();

 let retiro = parseFloat(prompt('Ingrese el monto a extraer'));
 objeto.extraer();

 titular.informar();


// let cuenta = {
//     titular: 'Alex',
//     saldo: 0,
//     ingresar: (objeto, deposito)=>{
//         objeto.saldo += deposito; // c.saldo = deposito + c.saldo;
//         console.log(objeto.saldo);
//     },
//     extraer:(objeto, retiro)=>{
//         if(objeto.saldo >= retiro){
//             objeto.saldo -= retiro;
//             document.write(`<p>Se retiro $${retiro}</p>`);
//         }else{
//             document.write(`<p>Saldo insuficiente</p>`);
//         }
//     },
//     informar:(objeto)=>{
//         console.log(objeto)
//         document.write(`<p>La cuenta de ${objeto.titular}, posee un saldo de $${objeto.saldo}</p>`)
//     }
// }

// cuenta.informar(cuenta);
// // console.log(this)

// let deposito = parseFloat(prompt('Ingrese el monto deseado'));
// cuenta.ingresar(cuenta, deposito);

// let retiro = parseFloat(prompt('Ingrese el monto a extraer'));
// cuenta.extraer(cuenta, retiro);

// cuenta.informar(cuenta);
