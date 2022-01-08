function setLocalStorage (datos) {
    localStorage.setItem('formulario', JSON.stringify(datos));
}


document.getElementById('formularioRegistro').addEventListener('submit', function (event) {
    // no refrescar al enviar formulario
    event.preventDefault();

    const nombre = document.getElementById('nombre');
    const apellido = document.getElementById('apellido');
    const telefono = document.getElementById('telefono');
    const direccion = document.getElementById('direccion');
    const observaciones = document.getElementById('observaciones');

    setLocalStorage({
        nombre: nombre.value,
        apellido: apellido.value,
        telefono: telefono.value,
        direccion: direccion.value,
        observaciones: observaciones.value
    })
});