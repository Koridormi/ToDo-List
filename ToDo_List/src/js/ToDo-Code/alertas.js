import Swal from 'sweetalert2';
export {editarTareaInput};

async function editarTareaInput() {
    const resultado = await Swal.fire({
        title: 'Editando Tarea...',
        input: 'text',
        inputPlaceholder: 'Edita Tu Tarea',
        showCancelButton: true,
        confirmButtonText: 'Editar',
        cancelButtonText: 'Cancelar'
    });

    return resultado;
};