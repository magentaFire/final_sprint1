var estudiantes = [];

function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes
    return estudiantes;
}

function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado
    var nombre = prompt("Ingresa el nokmbre del(a) alumnx").toUpperCase();
    var puntosTec = parseInt(prompt("Ingresa el puntaje técnico del(a) alumnx"));
    var puntosHse = parseInt(prompt("Ingresa el puntaje de HSE del(a) alumnx"));
    var estudiante = {nombre, puntosTec, puntosHse}
    estudiantes.push(estudiante);
    return estudiante;

/* intento "fallido" de filtrar datos
    nombre = prompt("Ingresa el nombre");
    if (typeof nombre != "string")
    {
      alert("El nombre debe tener únicamente caracteres");
    }
    else
    {
      puntosTec = parseInt(prompt("Ingresa los puntos tecnológicos"));
      if (puntosTec == NaN || puntosHse == NaN)
      {
        alert ("Los puntos deben ser números enteros");
      }
      else
      {
        puntosHse = parseInt(prompt("Ingresa los puntos de HSE"));
        if(puntosTec == NaN || puntosHse == NaN || puntosTec < 0 || puntosHse < 0)
        {
          alert ("Los puntos deben ser números enteros positivos");
        }
        else
        {
          nombre = nombre.toUpperCase();
          var estudiante = {nombre, puntosTec, puntosHse}
          estudiantes.push(estudiante);
          return estudiante;
        }
      }
    }
*/
}




function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.nombre + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.puntosTec + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.puntosHse + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes


    var resultado = "";
    var longitud = estudiantes.length

    for (var i = 0; i < longitud; i++)
    {
      resultado += mostrar(estudiantes[i]);
    }
    return resultado;

    /*
    var resultado = "";
    estudiantes.forEach(function(estudiante)
    {
      resultado += mostrar(estudiante);
    });
    return resultado;
    */
}


function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS

    var resultado = estudiantes.filter(function(estudiante)
      {
        return estudiante.nombre == nombre.toUpperCase();
      }
    );
    return resultado;

}


function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor
    var resultado = estudiantes.sort(function(a, b)
    {
      return a.puntosTec - b.puntosTec;
    });
    return resultado;
}


function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
    var resultado = estudiantes.sort(function(a, b)
    {
      return a.puntosHse - b.puntosHse;
    });
    return resultado;
}
