import {formulario} from './ToDo-Code/selectores.js';
import {agregarTareas} from './ToDo-Code/funciones.js';

// Listeners
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    agregarTareas();
});