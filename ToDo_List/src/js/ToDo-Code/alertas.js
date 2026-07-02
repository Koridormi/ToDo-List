import Swal from 'sweetalert2';
import {agregarTareasDiv} from './selectores.js';
export {editarTareaInput, mensajeAviso, errorTareaAdd};

async function editarTareaInput() {
    const resultado = await Swal.fire({
        title: 'Editando Tarea...',
        input: 'text',
        inputPlaceholder: 'Edita Tu Tarea',
        showCancelButton: true,
        confirmButtonText: 'Editar',
        cancelButtonText: 'Cancelar'
    });

    return resultado;
};

function mensajeAviso() {
    Swal.fire({
        title: 'No Hay Tareas',
        confirmButtonText: 'Entiendo',
    });
};

function errorTareaAdd() {
    const divParrafo = document.createElement('DIV');
    const parrafo = document.createElement('P');
    
    divParrafo.classList.add('errorTareaAdd');
    parrafo.textContent = 'La Tarea No Puede Estar Vacia';
    
    agregarTareasDiv.appendChild(divParrafo);
    divParrafo.appendChild(parrafo);

    limpiarMensaje(divParrafo);
};

function limpiarMensaje(contenedor) {
    const tareas = document.querySelectorAll('.errorTareaAdd');

    if(tareas.length >= 2) {
        contenedor.remove();
    };

    setTimeout(() => {
        contenedor.remove();
    }, 3000);
};