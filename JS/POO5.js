// 5- Crea una clase llamada Persona que siga las siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
// Los métodos que se debe poder utilizar  son:
// mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.

class Persona {
    constructor(nombre, edad, dni, sexo, peso, altura, fechaNacimiento) {
      this.nombre = nombre;
      this.edad = edad;
      this.dni = dni;
      this.sexo = sexo;
      this.peso = peso;
      this.altura = altura;
      this.fechaNacimiento = fechaNacimiento;
    }
    generacion() {
      if (this.fechaNacimiento >= 1930 && this.fechaNacimiento <= 1948) {
        document.write("<p>Generacion: Silent Generation</p>");
        document.write("<p>Rasgo caracteristico: Austeridad</p>");
      } else if (this.fechaNacimiento >= 1949 && this.fechaNacimiento <= 1968) {
        document.write("<p>Generacion: Baby Boom</p>");
        document.write("<p>Rasgo caracteristico: Ambicion</p>");
      } else if (this.fechaNacimiento >= 1969 && this.fechaNacimiento <= 1980) {
        document.write("<p>Generacion X</p>");
        document.write("<p>Rasgo caracteristico: Obsesion por el exito</p>");
      } else if (this.fechaNacimiento >= 1981 && this.fechaNacimiento <= 1993) {
        document.write("<p>Generacion Y</p>");
        document.write("<p>Rasgo caracteristico: Frustacion</p>");
      } else if (this.fechaNacimiento >= 1994 && this.fechaNacimiento <= 2010) {
        document.write("<p>Generacion Z</p>");
        document.write("<p>Rasgo caracteristico: Irreverencia</p>");
      } else {
        document.write("<p>Generacion no declarada</p>");
      }
    }
    mayor() {
      if (this.edad >= 18) {
        document.write(`<p>${this.nombre} es mayor de edad</p>`);
      } else {
        document.write(`<p>${this.nombre} no es mayor de edad</p>`);
      }
      document.write('<hr>')
      document.write('<hr>')
      document.write('<hr>')
    }
    datos() {
      document.write(`<ul>
         <li> <p>Nombre: ${this.nombre}</p>
         <li> <p>Edad: ${this.edad}</p>
         <li> <p>DNI: ${this.dni}</p>
         <li> <p>Sexo: ${this.sexo}</p>
         <li> <p>Peso: ${this.peso} kg</p>
         <li> <p>Altura: ${this.altura} mts</p>
         <li> <p>Año de Nacimiento: ${this.fechaNacimiento}</p></ul>`);
    }
    generaDni() {
      this.dnialeatorio = Math.floor(
        Math.random() * (10000000 - 99999999) + 99999999
      );
      document.write(`<ul> <li><p> Dni Aleatorio: ${this.dnialeatorio}</p> </ul>`);
    }
    
    }
  
  let persona1 = new Persona("José", 30, 36420894, "H", 106, 1.80, 1991);
  let persona2 = new Persona("Carlos", 62, 14481138, "H", 90, 1.75, 1963);
  let persona3 = new Persona("Andrea", 60, 18944111, "M", 70, 1.55, 1965);
  let persona4 = new Persona("Juan", 50, 22334455, "H", 70, 1.40, 1971);
  let persona5 = new Persona("Julio", 80, 22334455, "H", 60, 1.70, 1931);
  let persona6 = new Persona("Eugenia", 20, 22334455, "M", 48, 1.70, 2002);
  
  persona1.datos();
  persona1.generaDni();
  persona1.generacion()
  persona1.mayor()
  
  persona2.datos();
  persona2.generaDni();
  persona2.generacion()
  persona2.mayor()
  
  persona3.datos();
  persona3.generaDni();
  persona3.generacion()
  persona3.mayor()

  persona4.datos();
  persona4.generaDni();
  persona4.generacion()
  persona4.mayor()

  persona5.datos();
  persona5.generaDni();
  persona5.generacion()
  persona5.mayor()

  persona6.datos();
  persona6.generaDni();
  persona6.generacion()
  persona6.mayor()

