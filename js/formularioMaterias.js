// document.addEventListener("DOMContentLoaded", () => {
//     var numMaterias = 0;
//     let radioButtonSi = document.getElementById('opcMSi');
//     let radioButtonNo = document.getElementById('opcMNo');
//     let divMaterias = document.getElementById('divMaterias');
//     let selectMat = document.getElementById('selectorMat');  
    
//     selectMat.addEventListener('change', function () {
        
//         if (numMaterias >= 4 && radioButtonSi.checked) {
//             selectMat.selectedIndex = -1;
//             return;
//         } else if (numMaterias >= 3 && radioButtonNo.checked) {
//             selectMat.selectedIndex = -1;
//             divMaterias.style.pointerEvents = "none";
//             return;
//         }

//         numMaterias = 0;
//         let options = selectMat.options;
//         for (let i = 0; i < options.length; i++) {
//             if (options[i].selected) {
//                 let valor = options[i].getAttribute('data-value');
//                 if (valor == undefined) {
//                     numMaterias++;
//                 }
//             }
//         }

//         if (numMaterias >= 4 && radioButtonSi.checked) {
//             divMaterias.style.pointerEvents = "none";
//         } else {
//             divMaterias.style.pointerEvents = "auto";
//         }
//     });

//     radioButtonSi.addEventListener('change', function () {
//         if (numMaterias >= 4 && radioButtonSi.checked) {
//             selectMat.disabled = true;
//             divMaterias.style.pointerEvents = "none";
//         } else {
//             selectMat.disabled = false;
//             divMaterias.style.pointerEvents = "auto";
//         }
//     });

//     radioButtonNo.addEventListener('change', function () {
//         selectMat.disabled = false;
//         divMaterias.style.pointerEvents = "auto";
//     });

//     radioButtonSi.addEventListener('change', function () {
//             Swal.fire({
//                 title: '<strong>¿Esta seguro de la opcion?</strong>',
//                 icon: 'info',
//                 html:
//                   '<p>Al aceptar no podra modificar la opcion</p>',
//                 showCloseButton: false,
//                 showCancelButton: true,
//                 focusConfirm: false,
//                 confirmButtonText:
//                   'Aceptar',
//                 cancelButtonText:
//                   'Cancelar',
//               }).then((result) => {
//                 if (result.value) {
//                   Swal.fire(
//                     '¡Opcion aceptada!',
//                     'La opcion ha sido aceptada',
//                     'success'
//                   )
//                   radioButtonNo.disabled = true;
//                 } else if (result.dismiss === Swal.DismissReason.cancel) {
//                   Swal.fire(
//                     '¡Opcion cancelada!',
//                     'La opcion ha sido cancelada',
//                     'error'
//                   )
//                 }
//               }
//             )
//     });

//     // Hace el efecto de añadir las actividades o materias en el div
//     $('.ui.dropdown').dropdown();
// });



document.addEventListener("DOMContentLoaded", () => {
    var numMaterias = 0;
    let radioButtonSi = document.getElementById('opcMSi');
    let radioButtonNo = document.getElementById('opcMNo');
    let divMaterias = document.getElementById('divMaterias');
    let selectMat = document.getElementById('selectorMat');
    
    divMaterias.style.pointerEvents = "none"; // Deshabilitar selectMat inicialmente
  
    radioButtonSi.addEventListener('change', function () {
      Swal.fire({
        title: '<strong>¿Está seguro de la opción?</strong>',
        icon: 'info',
        html: '<p>Al aceptar no podrá modificar la opción</p>',
        showCloseButton: false,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('¡Opción aceptada!', 'La opción ha sido aceptada', 'success');
          radioButtonNo.disabled = true;
          divMaterias.style.pointerEvents = "auto"; // Habilitar selectMat cuando se acepta la opción
        } else if (result.isDismissed) {
          Swal.fire('¡Opción cancelada!', 'La opción ha sido cancelada', 'error');
          radioButtonSi.checked = false;
        }
      });
    });
  
    selectMat.addEventListener('change', function () {
      if (numMaterias >= 4 && radioButtonSi.checked) {
        selectMat.selectedIndex = -1;
        return;
      } else if (numMaterias >= 3 && radioButtonNo.checked) {
        selectMat.selectedIndex = -1;
        divMaterias.style.pointerEvents = "none";
        return;
      }
  
      numMaterias = 0;
      let options = selectMat.options;
      for (let i = 0; i < options.length; i++) {
        if (options[i].selected) {
          let valor = options[i].getAttribute('data-value');
          if (valor == undefined) {
            numMaterias++;
          }
        }
      }
  
      if (numMaterias >= 4 && radioButtonSi.checked) {
        divMaterias.style.pointerEvents = "auto";
      } 
    });
  
    radioButtonNo.addEventListener('change', function () {
      Swal.fire({
        title: '<strong>¿Está seguro de la opción?</strong>',
        icon: 'info',
        html: '<p>Al aceptar no podrá modificar la opción</p>',
        showCloseButton: false,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('¡Opción aceptada!', 'La opción ha sido aceptada', 'success');
          radioButtonSi.disabled = true;
          divMaterias.style.pointerEvents = "auto"; // Habilitar selectMat cuando se acepta la opción
        } else if (result.isDismissed) {
          Swal.fire('¡Opción cancelada!', 'La opción ha sido cancelada', 'error');
          radioButtonNo.checked = false;
        }
      });
    });
  
    // Hace el efecto de añadir las actividades o materias en el div
    $('.ui.dropdown').dropdown();
  });
  