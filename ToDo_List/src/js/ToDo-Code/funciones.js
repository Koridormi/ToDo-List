import {inputTarea, tareaPendiente, tareaCompleta} from './selectores.js';
import {errorTareaAdd, mensajeAviso} from './alertas.js';
import {tareasPendientes} from './tareas-logica.js';
import {transaccionDB, eliminarTareasDB} from './indexedDB.js';
export {agregarTareas, limpiarTareasAll};

// Funciones
function agregarTareas() {
    const textoTarea = inputTarea.value.trim();

    if(textoTarea === '') {
        errorTareaAdd();

        inputTarea.value = '';
    } else {
        const tarea = {
            id: Date.now() % 10000,
            texto: textoTarea,
            estado: false
        }
        tareasPendientes(tarea);

        transaccionDB(tarea);

        inputTarea.value = '';
    };
};

function limpiarTareasAll() {
    if(tareaPendiente.children.length > 0 || tareaCompleta.children.length > 0) {
        tareaPendiente.replaceChildren();
        tareaCompleta.replaceChildren();

        eliminarTareasDB();
    } else {
        mensajeAviso();
    };
};