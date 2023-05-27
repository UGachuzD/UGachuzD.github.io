document.addEventListener("DOMContentLoaded", () => {
  // Obtener el elemento select
  var select = document.getElementById("selectorMat");

  // Agregar evento change al select para verificar si cambiaron las opciones seleccionadas
  select.addEventListener("change", actualizarContadorMaterias);

  // Función para actualizar el contador de materias seleccionadas
  function actualizarContadorMaterias() {
    // Obtener todas las opciones seleccionadas
    var opcionesSeleccionadas = [];
    for (var i = 0; i < select.options.length; i++) {
      var icono = document.querySelector("#divMaterias > div > a:nth-child(7) > i")
      var opcion = select.options[i];
      if (opcion.selected) {
        opcionesSeleccionadas.push(opcion.value);
        if (opcionesSeleccionadas.length > 4) {
          Swal.fire({
            title: '¿Esta seguro de añadir otra materia más?',
            showDenyButton: true,
            confirmButtonText: 'Si',
            denyButtonText: `No`,
            allowOutsideClick: false,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire('Se agregó otra materia', '', 'success')
            } else if (result.isDenied) {
              opcionesSeleccionadas.splice(opcionesSeleccionadas.length - 1, 1); // Eliminar el último elemento del array
              opcion.selected = false;
              icono.click();
              Swal.fire('No se agregó la última materia', '', 'info')
              console.log(opcionesSeleccionadas)
            }
          })
  
        }
      }
    }
    // Contar las materias seleccionadas
    var cantidadMateriasSeleccionadas = opcionesSeleccionadas.length;
    console.log(cantidadMateriasSeleccionadas);
    console.log(opcionesSeleccionadas);
  }
});