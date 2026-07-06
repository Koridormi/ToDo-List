import {tareasCompletas, tareasPendientes} from './tareas-logica.js';
export {abrirDB, transaccionDB, transaccionDBTrue, transaccionDBFalse, obtenerTareasDB, editarTareaDB, eliminarTareaDB, eliminarTareasDB};

let db;

function abrirDB() {
    const request = indexedDB.open('ToDoListDB', 1);
    
    request.onupgradeneeded = (e) => {
        const db = e.target.result;
    
        const objectStore = db.createObjectStore('Tareas', {
            keyPath: 'id'
        });
    };
    
    request.onsuccess = (e) => {
        db = e.target.result;

        obtenerTareasDB();
    };
    
    request.onerror = (e) => {
        db = e.target.result;
    
        console.log(`Algo Salio Mal con IndexedDB | ${db}`);
    };
};

function transaccionDB(tarea) {
    const transaction = db.transaction(['Tareas'], 'readwrite');
    const objectStore = transaction.objectStore('Tareas');

    const request = objectStore.add(tarea);

    request.onsuccess = (e) => {
        const db = e.target.result;
    };

    request.onerror = (e) => {
        const db = e.target.result;

        console.log(`Tarea No Agregada | ${db}`);
    };
};

function transaccionDBFalse(tarea) {
    const transaction = db.transaction(['Tareas'], 'readwrite');
    const objectStore = transaction.objectStore('Tareas');
    
    const request = objectStore.get(tarea.id);
    
    request.onsuccess = () => {
        const tarea = request.result;
        
        tarea.estado = true;
        
        objectStore.put(tarea);
    };
};

function transaccionDBTrue(tarea) {
    const transaction = db.transaction(['Tareas'], 'readwrite');
    const objectStore = transaction.objectStore('Tareas');

    const request = objectStore.get(tarea.id);

    request.onsuccess = () => {
        const tarea = request.result;

        tarea.estado = false;

        objectStore.put(tarea);
    };
};

function obtenerTareasDB() {
    const transaction = db.transaction(['Tareas'], 'readonly');
    const objectStore = transaction.objectStore('Tareas');

    const request = objectStore.getAll();

    request.onsuccess = (e) => {
        const tareas = e.target.result;

        tareas.forEach( (tarea) => {
            if(tarea.estado === false) {
                tareasPendientes(tarea);
            } else if(tarea.estado === true) {
                tareasCompletas(tarea);
            };
        });
    };
};

function editarTareaDB(valor, tarea) {
    const transaction = db.transaction(['Tareas'], 'readwrite');
    const objectStore = transaction.objectStore('Tareas');

    const request = objectStore.getAll();

    request.onsuccess = () => {
        const tareas = request.result;

        const tareaElegida = tareas.find( (tareaSelect) => tareaSelect.id === tarea.id);

        if(valor.isConfirmed) {
            tareaElegida.texto = valor.value;
            objectStore.put(tareaElegida);
        } else if(valor.isDismissed) {
            tareaElegida.texto = tareaElegida.texto;
            objectStore.put(tareaElegida);
        };
    };
};

function eliminarTareaDB(tarea) {
    const transaction = db.transaction(['Tareas'], 'readwrite');
    const objectStore = transaction.objectStore('Tareas');

    const request = objectStore.delete(tarea.id);
};

function eliminarTareasDB() {
    const transaction = db.transaction(['Tareas'], 'readwrite');
    const objectStore = transaction.objectStore('Tareas');

    const request = objectStore.clear();
};