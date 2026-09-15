function verificarEdad() {
    // 1. Capturamos el valor ingresado en el campo de texto
    let edadIngresada = document.getElementById("inputEdad").value;
    let resultadoInput = document.getElementById("resultadoVoto");

    // 2. Verificar que el campo de entrada no esté vacío
    if (edadIngresada.trim() === "") {
        alert("Por favor, ingresa tu edad.");
        return;
    }

    // Convertimos el texto a número entero
    let edad = parseInt(edadIngresada);

    // 3. Verificar que el valor ingresado sea un número positivo
    if (isNaN(edad) || edad < 0) {
        alert("Por favor, ingresa un número positivo válido.");
        return;
    }

    // 4. Evaluar la condición y mostrar el mensaje en la caja readonly
    if (edad >= 18) {
        resultadoInput.value = "Puedes votar";
    } else {
        resultadoInput.value = "No puedes votar";
    }
}