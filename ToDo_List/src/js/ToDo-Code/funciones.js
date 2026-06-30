import {inputTarea, tareaPendiente, tareaCompleta} from './selectores.js';
export {agregarTareas, limpiarTareasAll};

// Funciones
function agregarTareas() {
    const textoTarea = inputTarea.value.trim();

    if(textoTarea === '') {
        console.log('La Tarea No Puede ir Vacia');
    } else {
        const tarea = {
            id: Date.now() % 10000,
            texto: textoTarea,
            estado: false
        }
        leerTareas(tarea);
        // console.log(tarea);
        inputTarea.value = '';
    };
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

    buttonCheck.addEventListener('click', () => {
        if(true) {
            completarTarea(tarea);
            tarea.estado = true;
            tareaPendiente.removeChild(divContainer);
        };
    });

    divContainer.appendChild(divEdicion);
    divEdicion.appendChild(buttonEdit);
    divEdicion.appendChild(buttonDelete);

    buttonEdit.textContent = 'Editar';
    buttonDelete.textContent = 'X';

    buttonDelete.addEventListener('click', () => {
        if(true) {
            tarea.estado = false;
            tareaPendiente.removeChild(divContainer);
        };
    });
};

function completarTarea(tarea) {
    const divContainer = document.createElement('DIV');
    tareaCompleta.appendChild(divContainer);
    divContainer.classList.add('tareas__contenedor');

    const divTarea = document.createElement('DIV');
    const parrafoTarea = document.createElement('P');
    const buttonUncheck = document.createElement('BUTTON');

    const divEdicion = document.createElement('DIV');
    const buttonDelete = document.createElement('BUTTON');

    divContainer.appendChild(divTarea);
    divTarea.appendChild(parrafoTarea);
    divTarea.appendChild(buttonUncheck);

    parrafoTarea.textContent = tarea.texto;
    buttonUncheck.textContent = 'Un-Check';

    buttonUncheck.addEventListener('click', () => {
        if(true) {
            leerTareas(tarea);
            tarea.estado = false;
            tareaCompleta.removeChild(divContainer);
        };
    });

    divContainer.appendChild(divEdicion);
    divEdicion.appendChild(buttonDelete);

    buttonDelete.textContent = 'X';

    buttonDelete.addEventListener('click', () => {
        if(true) {
            tareaCompleta.removeChild(divContainer);
        };
    });
};

function limpiarTareasAll() {
    if(tareaPendiente.children.length > 0 || tareaCompleta.children.length > 0) {
        tareaPendiente.replaceChildren();
        tareaCompleta.replaceChildren();
    } else {
        console.log('No hay tareas para eliminar');
    };
};