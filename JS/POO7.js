class Contacto {
    constructor(nombre, telefono) {
      this.nombre = nombre;
      this.telefono = telefono;
    }
  }
  
  class Agenda {
    constructor(tamanio = 10) {
      this.contactos = [];
      this.tamanio = tamanio;
    }
  
    agregarContacto(contactoNuevo) {
      // verificar si el contacto existe
      if (this.existeContacto(contactoNuevo.nombre) === true) {
        console.log("el contacto ya existe, no lo agrego");
      } else {
        // verificar si la agenda esta llena o tiene huecos vacios
        if (this.agendaLlena() === false) {
          // if(!this.agendaLlena()){
          this.contactos.push(contactoNuevo);
        }else{
          document.write('No se agrego el contacto, la agenda esta llena')
        }
      }
      console.log(this.contactos);
    }
  
    existeContacto(nombre) {
      // es porque el contacto existe
      const contactoExistente = this.contactos.find((itemContacto) => {
        return nombre === itemContacto.nombre;
      });
      console.log(contactoExistente);
      if (contactoExistente) {
        console.log("el contacto existe");
        return true;
      } else {
        console.log("el contacto NO existe");
        return false;
      }
    }
    
    agendaLlena() {
      if (this.contactos.length === this.tamanio) {
        console.log("la agenda esta llena");
        return true;
      } else {
        console.log("hay espacio disponible");
        return false;
      }
    }
    eliminarContacto(nombre) {
      let contactosFiltrados = this.contactos.filter((itemContacto) => {
        return itemContacto.nombre != nombre;
      });
      this.contactos = contactosFiltrados;
      console.log("Contacto eliminado: " + nombre);
      document.write("Contacto eliminado: " + nombre);
      console.log(this.contactos);
    }
    listarAgenda() {
      for (let i = 0; i < this.contactos.length; i++) {
        console.log(this.contactos[i]);
      }
    }
    huecosLibres() {
      console.log(
        `La agenda tiene ${this.tamanio - this.contactos.length} huecos libres`
      );
    }
    set modificarTamanio(nuevoTamanio) {
      this.tamanio = nuevoTamanio;
      console.log(agendaTelefonica);
    }
  }
  
  // crear agrenda
  let agendaTelefonica = new Agenda();
  console.log(agendaTelefonica);
  
  // menu de opicones
  do {
    let opcion = parseInt(
      prompt(`Seleccione una opcion:
        1- Agregar un contacto,
        2- Consultar si el contacto existe,
        3- Listar los contactos,
        4- Buscar un contacto,
        5- Eliminar un contacto,
        6- Consultar si la agenda esta llena,
        7- Consultar cuantos huecos libres tiene la agenda,
        8- Cambiar el tamaño de la agenda
        `)
    );
  
    switch (opcion) {
      case 1:
        //     1- Agregar un contacto,
        //   pedir el nombre y telefono
        let nombre = prompt("Ingrese un nombre").toLocaleLowerCase();
        let telefono = prompt("Ingrese un telefono");
        // crear el contacto
        let nuevoContacto = new Contacto(nombre, telefono);
        // invocar a agregarContacto
        agendaTelefonica.agregarContacto(nuevoContacto);
        break;
      case 2:
        // 2- Consultar si el contacto existe,
        let nombreBuscado = prompt("Ingrese un nombre").toLocaleLowerCase();
        agendaTelefonica.existeContacto(nombreBuscado);
        break;
      case 3:
        // 3- Listar los contactos,
        agendaTelefonica.listarAgenda();
        break;
      case 4:
        // 4- Buscar un contacto,
        let nombreAEncontrar = prompt("Ingrese un nombre").toLocaleLowerCase();
        agendaTelefonica.existeContacto(nombreAEncontrar);
        break;
      case 5:
        // 5- Eliminar un contacto,
        let contactoBorrar = prompt("Ingrese un nombre").toLocaleLowerCase();
        agendaTelefonica.eliminarContacto(contactoBorrar);
        break;
      case 6:
        // 6- Consultar si la agenda esta llena,
        agendaTelefonica.agendaLlena();
        break;
      case 7:
        // 7- Consultar si la agenda tiene huecos libres,
        agendaTelefonica.huecosLibres();
        break;
      case 8:
        // 8- Cambiar el tamaño de la agenda
        let cambiarTamanio = parseInt(prompt("Elija el tamaño de la agenda"));
        agendaTelefonica.modificarTamanio = cambiarTamanio;
        break;
      default:
        alert(`Ingreso una opcion incorrecta`);
    }
  } while (confirm(`¿Quiere realizar otra operacion?`));