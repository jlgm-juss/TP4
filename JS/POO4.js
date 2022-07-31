// 4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
// Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
// Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.

class Producto{
    constructor(codigo, nombre, precio ){
this.codigo = codigo;
this.nombre = nombre;
this.precio = precio;
    }
    imprimeDatos(){
        propiedades = document.write(`<h4>Propiedades</h4><ul><li>Codigo: ${this.codigo}</li><li>Nombre: ${this.nombre}</li><li>Precio: ${this.precio}</li></ul>`);
        
    }
    imprimeDatos1(){
        propiedades1 = document.write(`<h4>Propiedades</h4><ul><li>Codigo: ${this.codigo}</li><li>Nombre: ${this.nombre}</li><li>Precio: ${this.precio}</li></ul>`);
    }
}
let propiedades = new Producto ('Fa387Z', 'Shampoo', '350$');
let propiedades1 = new Producto ('Zf487', 'Cafe', '400$');
let almacenar = [];
almacenar.push(propiedades1, propiedades);
propiedades.imprimeDatos();
propiedades1.imprimeDatos1();
console.log(almacenar);





