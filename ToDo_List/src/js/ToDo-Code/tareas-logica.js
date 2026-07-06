import {editarTareaInput} from "./alertas.js";
import {tareaCompleta, tareaPendiente} from "./selectores.js";
export {tareasCompletas, tareasPendientes, editarTarea};

function tareasCompletas(tarea) {
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
            tareasPendientes(tarea);
            tarea.estado = true;
            tareaPendiente.removeChild(divContainer);
        };
    });
    
    // Space \\
    
    divContainer.appendChild(divEdicion);
    divEdicion.appendChild(buttonEdit);
    divEdicion.appendChild(buttonDelete);
    
    buttonEdit.textContent = 'Editar';
    buttonEdit.id = tarea.id;
    buttonDelete.textContent = 'X';
    
    buttonEdit.addEventListener('click', async () => {
        await editarTarea(parrafoTarea);
    });
    
    buttonDelete.addEventListener('click', () => {
        if(true) {
            tarea.estado = false;
            tareaPendiente.removeChild(divContainer);
        };
    });
};

function tareasPendientes(tarea) {
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
            tareasCompletas(tarea);
            tarea.estado = false;
            tareaCompleta.removeChild(divContainer);
        };
    });
    
    // Space \\
    
    divContainer.appendChild(divEdicion);
    divEdicion.appendChild(buttonDelete);
    
    buttonDelete.textContent = 'X';
    
    buttonDelete.addEventListener('click', () => {
        if(true) {
            tareaCompleta.removeChild(divContainer);
        };
    });
};

async function editarTarea(parrafo) {
    const valor = await editarTareaInput();

    if(valor.isConfirmed) {

        if(valor.value === '') {
            parrafo.textContent = parrafo.textContent;
        } else {
            parrafo.textContent = valor.value;
        };
    };

    if(valor.isDismissed) {
        parrafo.textContent = parrafo.textContent;
    };
};