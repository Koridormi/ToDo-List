import {formulario, limpiarTareas} from './ToDo-Code/selectores.js';
import {agregarTareas, limpiarTareasAll} from './ToDo-Code/funciones.js';
import {abrirDB} from './ToDo-Code/indexedDB.js';

// Listeners
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    agregarTareas();
});

limpiarTareas.addEventListener('click', limpiarTareasAll);

document.addEventListener('DOMContentLoaded', abrirDB);