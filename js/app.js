var estudiantes = [];

function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes
    return estudiantes;
}

function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado

    //declaracion de variables
    var nombre = prompt("Agrega el Nombre");
    var puntosTec = prompt("Agrega los puntos técnicos");
    var puntosHse = prompt("Agrega los puntos de HSE");

    parseInt(puntosTec);
    parseInt(puntosHse);
    nombre = nombre.toUpperCase();

    //guarda un nuevo objeto en arreglo "estudiantes"
    estudiantes.unshift({nombre, puntosTec, puntosHse});
    console.log(estudiantes);
    return estudiantes;
}

function mostrar(estudiantes) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
    var resultado = "";
    var i = 0;
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiantes[i].nombre + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiantes[i].puntosTec + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiantes[i].puntosHse + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}


function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes
    var i = 0;
    var resultado2 = "";
    var longitud = estudiantes.length;

    for (i = 0; i < longitud; i++)
    {
      mostrar2(estudiantes);
    }
    return resultado2;

    function mostrar2(estudiantes) {
        // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
        resultado2 += "<div class='row'>";
        resultado2 += "<div class='col m12'>";
        resultado2 += "<div class='card blue-grey darken-1'>";
        resultado2 += "<div class='card-content white-text'>";
        resultado2 += "<p><strong>Nombre:</strong> " + estudiantes[i].nombre + "</p>";
        resultado2 += "<p><strong>Puntos Técnicos:</strong> " + estudiantes[i].puntosTec + "</p>";
        resultado2 += "<p><strong>Puntos HSE:</strong> " + estudiantes[i].puntosHse + "</p>";
        resultado2 += "</div>";
        resultado2 += "</div>";
        resultado2 += "</div>";
        resultado2 += "</div>";
        return resultado2;
    }
}


function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS

    var resultado2 = "";
    nombre = nombre.toUpperCase();

    for(var i = 0, longitud = estudiantes.length; i < longitud; i++)
    {
      if(nombre == estudiantes[i].nombre)
      {
        resultado2 += "<div class='row'>";
        resultado2 += "<div class='col m12'>";
        resultado2 += "<div class='card blue-grey darken-1'>";
        resultado2 += "<div class='card-content white-text'>";
        resultado2 += "<p><strong>Nombre:</strong> " + estudiantes[i].nombre + "</p>";
        resultado2 += "<p><strong>Puntos Técnicos:</strong> " + estudiantes[i].puntosTec + "</p>";
        resultado2 += "<p><strong>Puntos HSE:</strong> " + estudiantes[i].puntosHse + "</p>";
        resultado2 += "</div>";
        resultado2 += "</div>";
        resultado2 += "</div>";
        resultado2 += "</div>";
      }
    }

}

/*
function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor

}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor

}
*/
