// Crear una clase Libro que contenga al menos las siguientes propiedades:
// ISBN
// Título
// Autor
// Número de páginas

// Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

// “El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

// Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
// Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.

class Libro {
  constructor(isbn, titulo, autor, numPaginas) {
    this.isbn = isbn;
    this.titulo = titulo;
    this.autor = autor;
    this.numPaginas = numPaginas;
  }
  mostrarLibro() {
    document.write(
      `<p>El libro "${this.isbn}" con ISBN ${this.titulo} creado por el autor ${this.autor} tiene ${this.numPaginas} paginas</p>`
    );
  }
  compararLibros() {
    if (libro1.numPaginas > libro2.numPaginas) {
      document.write(`<p>El libro ${libro1.titulo} tiene mas páginas</p>`);
    } else {
      document.write(`<p>El libro ${libro2.titulo} tiene mas páginas</p>`);
    }
  }
}

let libro1 = new Libro(
  "9780936388878",
  "Don Quijote de la Mancha",
  "Miguel de Cervantes",
  1345
);
let libro2 = new Libro(
  "9780585091747",
  "Martín Fierro",
  "José Hernandez",
  320
);

libro1.mostrarLibro();
libro2.mostrarLibro();
libro1.compararLibros();
