// Funciones flecha para las operaciones[cite: 6]
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : 'Error: División por cero';

// Función principal que coordina el flujo[cite: 6]
function calcularOperacion(operacion) {
    let num1Input = document.getElementById("numero1").value;
    let num2Input = document.getElementById("numero2").value;

    let num1 = parseFloat(num1Input);
    let num2 = parseFloat(num2Input);

    // Validación usando SweetAlert2 si no son números[cite: 6]
    if (isNaN(num1) || isNaN(num2)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, ingresa números válidos en ambos campos.'
        });
        return;
    }

    let resultadoFinal;

    switch (operacion) {
        case 'suma':
            resultadoFinal = sumar(num1, num2);
            break;
        case 'resta':
            resultadoFinal = restar(num1, num2);
            break;
        case 'multiplicacion':
            resultadoFinal = multiplicar(num1, num2);
            break;
        case 'division':
            resultadoFinal = dividir(num1, num2);
            // Mostrar error con SweetAlert2 si hay división por cero
            if (resultadoFinal === 'Error: División por cero') {
                Swal.fire({
                    icon: 'error',
                    title: 'Operación inválida',
                    text: 'No se puede dividir entre cero.'
                });
                return;
            }
            break;
    }

    document.getElementById("resultado").value = resultadoFinal;
}