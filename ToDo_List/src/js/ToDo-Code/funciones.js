import {inputTarea, tareaPendiente} from './selectores.js';
export {agregarTareas, leerTareas};

// Funciones
function agregarTareas() {
    const textoTarea = inputTarea.value.trim();

    if(textoTarea === '') {
        console.log('La Tarea No Puede ir Vacia');
    } else {
        const tarea = {
            texto: textoTarea
        }
        leerTareas(tarea);
        inputTarea.value = '';
    }
};

function leerTareas(tarea) {
    const divContainer = document.createElement('DIV');
    tareaPendiente.appendChild(divContainer);
    divContainer.classList.add('tareas__contenedor');

    const divTarea = document.createElement('DIV');
    const parrafoTarea = document.createElement('P');
    const buttonCheck = document.createElement('BUTTON');

    const divEdicion = document.createElement('DIV');
    const buttonEdit = document.createElement('BUTTON');
    const buttonDelete = document.createElement('BUTTON');

    divContainer.appendChild(divTarea);
    divTarea.appendChild(parrafoTarea);
    divTarea.appendChild(buttonCheck);

    parrafoTarea.textContent = tarea.texto;
    buttonCheck.textContent = 'Check';

    divContainer.appendChild(divEdicion);
    divEdicion.appendChild(buttonEdit);
    divEdicion.appendChild(buttonDelete);

    buttonEdit.textContent = 'Editar';
    buttonDelete.textContent = 'X';
};