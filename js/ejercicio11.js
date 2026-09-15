function convertirDistancia() {
    // Capturamos el valor del campo de texto
    let kmIngresados = document.getElementById("inputKm").value;
    let resultadoInput = document.getElementById("resultadoMillas");

    // Validación 1: Asegurar que el campo no esté vacío
    if (kmIngresados.trim() === "") {
        alert("Por favor, ingresa una distancia.");
        return;
    }

    // Convertimos el texto a un número decimal
    let kilometros = parseFloat(kmIngresados);

    // Validación 2: Verificar que el valor sea numérico
    if (isNaN(kilometros)) {
        alert("Por favor, ingresa un valor numérico válido.");
        return;
    }

    // Realizamos la conversión con la fórmula
    let millas = kilometros * 0.621371;

    // Mostramos el resultado en la caja de texto readonly (limitado a 5 decimales para mayor limpieza)
    resultadoInput.value = millas.toFixed(5);
}