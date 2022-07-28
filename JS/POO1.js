// 1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado.
//  Crea los métodos necesarios para permitir encender y apagar el auto.

let auto = {
color: ['Rojo', 'Negro', 'Azul', 'Plateado'],
marca: 'Citroen',
modelo: 'Cactus Shine THP 1.6',
encender: ()=> {document.write(`<p>El auto está encendido....</p>`)},
apagar : ()=> {document.write(`<p>El auto esta apagado</p>`)}

}
console.log(auto);
document.write(`El color elegido es: ${auto.color[3]}`);
document.write(`<p> La marca es ${auto.marca}`);
document.write(`<p> Su modelo es: ${auto.modelo}`);
auto.encender();
document.write('Todo funciona correctamente, ahora sí...');
auto.apagar();


