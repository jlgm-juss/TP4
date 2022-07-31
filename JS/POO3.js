//3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, 
//mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro (P= 2 l + 2 a) y el área (A= l * a).

class Rectangulo {
    constructor(alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
    }
    perimetro (){
 rectangulo = 2* (this.alto + this.ancho)
    }
    area (){
rectangulo1 = this.alto * this.ancho
    }
}



let rectangulo = new Rectangulo (4, 5);
rectangulo.perimetro();
document.write(`El perimetro es: ${rectangulo}<br>`)
let rectangulo1 = new Rectangulo (3,8);
rectangulo1.area();
document.write(`El area es: ${rectangulo1}`)