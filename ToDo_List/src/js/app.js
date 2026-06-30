import {formulario, limpiarTareas} from './ToDo-Code/selectores.js';
import {agregarTareas, limpiarTareasAll} from './ToDo-Code/funciones.js';

// Listeners
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    agregarTareas();
});

limpiarTareas.addEventListener('click', limpiarTareasAll);