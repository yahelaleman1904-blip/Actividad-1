function calcularOperaciones() {
    // 1. Capturar los números ingresados
    let entrada = document.getElementById("inputNumeros").value;

    // Verificar que el campo no esté vacío
    if (entrada.trim() === "") {
        alert("Por favor, ingresa una serie de números.");
        return;
    }

    // 2. Separar por comas y convertir a números
    // split(",") divide el texto en un arreglo usando la coma como delimitador
    let arregloCadenas = entrada.split(",");
    
    // map(Number) convierte cada elemento de cadena a número
    let numeros = arregloCadenas.map(Number);

    // Validar que se hayan ingresado números válidos separados por comas
    if (numeros.includes(NaN)) {
        alert("Error: Asegúrate de ingresar solo números separados por comas.");
        return;
    }

    // 3. Calcular el número mayor y menor usando el operador spread (...)
    let maximo = Math.max(...numeros);
    let minimo = Math.min(...numeros);

    // 4. Calcular el promedio usando reduce() para sumar todo
    let suma = numeros.reduce((acc, valor) => acc + valor, 0);
    let promedio = suma / numeros.length;

    // 5. Mostrar los resultados en las cajas readonly correspondientes
    document.getElementById("resMayor").value = maximo;
    document.getElementById("resMenor").value = minimo;
    document.getElementById("resPromedio").value = promedio;
}