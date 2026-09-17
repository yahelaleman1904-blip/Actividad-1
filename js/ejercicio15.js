// Arreglo para almacenar los objetos de estudiantes[cite: 7]
let estudiantes = [];

function agregarEstudiante() {
    let nombre = document.getElementById("nombreEstudiante").value.trim();
    let calificacionInput = document.getElementById("calificacionEstudiante").value;
    
    // Validar que no estén vacíos y que sea número[cite: 7]
    if (nombre === "" || calificacionInput === "") {
        alert("Por favor, llena ambos campos.");
        return;
    }

    let calificacion = parseFloat(calificacionInput);
    if (isNaN(calificacion) || calificacion < 0 || calificacion > 100) {
        alert("Ingresa una calificación válida.");
        return;
    }

    // Agregar el objeto al arreglo[cite: 7]
    estudiantes.push({ nombre: nombre, calificacion: calificacion });
    alert(`Estudiante ${nombre} agregado con éxito.`);
    
    // Limpiar campos
    document.getElementById("nombreEstudiante").value = "";
    document.getElementById("calificacionEstudiante").value = "";
}

function calcularResultados() {
    if (estudiantes.length === 0) {
        alert("Agrega al menos un estudiante primero.");
        return;
    }

    // Calcular promedio[cite: 7]
    let suma = estudiantes.reduce((total, estudiante) => total + estudiante.calificacion, 0);
    let promedio = suma / estudiantes.length;

    // Encontrar calificación más alta y más baja[cite: 7]
    let calificacionMaxima = Math.max(...estudiantes.map(e => e.calificacion));
    let calificacionMinima = Math.min(...estudiantes.map(e => e.calificacion));

    // Buscar el nombre de esos estudiantes
    let mejorEstudiante = estudiantes.find(e => e.calificacion === calificacionMaxima).nombre;
    let peorEstudiante = estudiantes.find(e => e.calificacion === calificacionMinima).nombre;

    // Mostrar resultados en las cajas readonly[cite: 7]
    document.getElementById("resPromedio").value = promedio.toFixed(2);
    document.getElementById("resAlta").value = mejorEstudiante;
    document.getElementById("resBaja").value = peorEstudiante;
}