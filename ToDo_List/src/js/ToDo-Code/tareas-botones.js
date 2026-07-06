import {tareaPendiente, tareaCompleta} from './selectores.js';
export {buttonChecked, buttonUnChecked};

function buttonChecked(divContainer) {
    tarea.estado = true;
    tareaPendiente.removeChild(divContainer);
};

function buttonUnChecked(divContainer) {
    tarea.estado = false;
    tareaCompleta.removeChild(divContainer);
};