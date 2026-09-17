// Usamos un Closure para encapsular la lógica y el scope[cite: 5]
const gestorTareas = (function() {
    
    // Variables con scope local dentro del closure[cite: 5]
    let tareas = JSON.parse(localStorage.getItem("tareasJSON")) || [];

    // Función interna para actualizar el Local Storage con JSON[cite: 5]
    function guardarEnStorage() {
        localStorage.setItem("tareasJSON", JSON.stringify(tareas));
    }

    // Función interna para mostrar las tareas en pantalla[cite: 5]
    function renderizar() {
        let lista = document.getElementById("listaTareas");
        lista.innerHTML = ""; 

        tareas.forEach((tareaObj, index) => {
            let li = document.createElement("li");
            li.textContent = tareaObj.tarea + " ";
            
            // Botón de eliminar para cada tarea[cite: 5]
            let btnEliminar = document.createElement("button");
            btnEliminar.textContent = "Eliminar";
            btnEliminar.onclick = () => eliminar(index);
            
            li.appendChild(btnEliminar);
            lista.appendChild(li);
        });
    }

    function agregar() {
        let input = document.getElementById("inputTarea");
        let textoTarea = input.value.trim();

        if (textoTarea === "") {
            Swal.fire('Atención', 'Escribe una tarea antes de agregar.', 'warning');
            return;
        }

        // Se guarda en formato de objeto[cite: 5]
        tareas.push({ tarea: textoTarea, completada: false });
        guardarEnStorage();
        renderizar();
        input.value = ""; 
    }

    function eliminar(index) {
        // Confirmar eliminación con SweetAlert2[cite: 5]
        Swal.fire({
            title: '¿Estás seguro?',
            text: "Se eliminará esta tarea permanentemente.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                tareas.splice(index, 1);
                guardarEnStorage();
                renderizar();
                Swal.fire('Eliminada', 'Tu tarea ha sido borrada.', 'success');
            }
        });
    }

    // Inicializamos mostrando las tareas guardadas al cargar[cite: 5]
    renderizar();

    // Retornamos solo lo que queremos que sea público
    return {
        agregar: agregar
    };

})();