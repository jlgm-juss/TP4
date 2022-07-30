// 1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado.
//  Crea los métodos necesarios para permitir encender y apagar el auto.

let auto = {
  color: ["Rojo", "Negro", "Azul", "Plateado"],
  marca: "Citroen",
  modelo: "Cactus Shine THP 1.6",
  estado: "Comprobando el estado.....",
  encender (on) {
    if (ignicion == 0){
        
        return document.write(`<p>El auto está encendido....</p>`)
    } 
    },
  apagar (off) {
if (ignicion == 1)

    return document.write(`<p>El auto esta apagado</p>`)
    },
};

color = prompt(
  `Ingrese un color: Sus opciones son Rojo = 0, Negro =1, Azul =2 o Plateado = 3`
);
document.write(`El color elegido es: ${auto.color[color]}`);
document.write(`<p> La marca es ${auto.marca}`);
document.write(`<p> Su modelo es: ${auto.modelo}`);
let ignicion = prompt("Presione 0 si quiere encender y 1 para apagar: ");
document.write(`<p>${auto.estado}</p>`);
auto.encender();

auto.apagar();





