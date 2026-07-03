export {abrirDB, transaccionDB};

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
    
        console.log(`Base de Datos Abierta Correctamente | ${db}`);
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
        db = e.target.result;

        console.log(`Tarea Agregada | ${db}`);
    };

    request.onerror = (e) => {
        db = e.target.result;

        console.log(`Tarea No Agregada | ${db}`);
    };
};

function obtenerTareasDB() {
    const transaction = db.transaction(['Tareas'], 'readonly');
    const objectStore = transaction.objectStore('Tareas');

    const request = objectStore.getAll();

    request.onsuccess = (e) => {
        const tareas = e.target.result;

        //funcion con forEach
    };
};