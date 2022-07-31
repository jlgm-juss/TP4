// 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
// Una propiedad titular con el valor "Alex".
// Una propiedad saldo, teniendo como valor inicial 0.
// Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
// Un método extraer() que permita retirar la cantidad pasada como parámetro.
// Un método informar() que retorne la información del estado de la cuenta.

// Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

let cuenta = {
    titular: 'Alex',
    saldo: 0,
    ingresar: (objeto, deposito)=>{
        objeto.saldo += deposito; // objeto.saldo = deposito + objeto.saldo;

    },
    extraer:(objeto, retiro)=>{
        if(objeto.saldo >= retiro){
            objeto.saldo -= retiro;
            document.write(`<p>Se retiro $${retiro}</p>`);
        }else{
            document.write(`<p>Saldo insuficiente</p>`);
        }
    },
    informar:(objeto)=>{

        document.write(`<p>La cuenta de ${objeto.titular}, posee un saldo de $${objeto.saldo}</p>`)
    }
    
}

cuenta.informar(cuenta);
// console.log(this)

let deposito = parseFloat(prompt('Ingrese el monto deseado'));
cuenta.ingresar(cuenta, deposito);

let retiro = parseFloat(prompt('Ingrese el monto a extraer'));
cuenta.extraer(cuenta, retiro);

cuenta.informar(cuenta);
