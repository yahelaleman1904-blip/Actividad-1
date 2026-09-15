function convertirMoneda() {
    // 1. Capturar el valor ingresado en el campo de texto
    let mxnIngresados = document.getElementById("inputMxn").value;
    let resultadoInput = document.getElementById("resultadoUsd");

    // 2. Asegurar que el campo de entrada no esté vacío
    if (mxnIngresados.trim() === "") {
        alert("Por favor, ingresa una cantidad en pesos.");
        return;
    }

    let mxn = parseFloat(mxnIngresados);

    // 3. Verificar que el valor ingresado sea numérico y positivo
    if (isNaN(mxn) || mxn < 0) {
        alert("Por favor, ingresa un valor numérico y positivo.");
        return;
    }

    // 4. Realizar la conversión usando la tasa de cambio definida (0.055)
    let tasaDeCambio = 0.055;
    let usd = mxn * tasaDeCambio;

    // 5. Mostrar el resultado en la caja de texto readonly
    // Usamos toFixed(2) para mostrar solo dos decimales, como en el ejemplo "27.50"
    resultadoInput.value = usd.toFixed(2);
}