function convertir() {
    // 1. Capturar el valor ingresado en el campo de texto
    let input = document.getElementById("celsius").value;

    // 2. Validar que no esté vacío y que sea numérico
    if (input === "") {
        alert("Por favor, ingresa un valor numérico para los grados Celsius.");
        return; // Detiene la ejecución si está vacío
    }

    // 3. Realizar el cálculo
    let c = parseFloat(input);
    let f = (c * 9/5) + 32;

    // 4. Mostrar el resultado en la caja de texto con readonly
    // Se agrega "°F" al final para que coincida con el ejemplo del flujo de uso
    document.getElementById("fahrenheit").value = f + "°F";
}