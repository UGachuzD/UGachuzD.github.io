function sumarHorasActDescarga() {
  // Obtener todos los elementos input con la clase .cantHrs
  var inputsCantidadHoras = document.querySelectorAll('.cantHrs');

  // Agregar un evento input a cada uno de los campos
  inputsCantidadHoras.forEach(function (input) {
    input.addEventListener('input', sumarHorasActDescarga);
  });

  function sumarHorasActDescarga() {
    var cantidadHorasTotal = 0;

    // Recorrer los elementos input y sumar sus valores
    inputsCantidadHoras.forEach(function (input) {
      var valor = parseInt(input.value);
      if (!isNaN(valor)) {
        cantidadHorasTotal += valor;
      }
    });

    // Actualizar el contenido del elemento con el total de horas
    var totalHorasElement = document.getElementById('totalHoras');
    totalHorasElement.textContent = cantidadHorasTotal + ' Hrs.';
  }
}

function validarFormulario() {
  const validator = new JustValidate('form#formEncuesta');
  const inputsHoras = document.querySelectorAll('input.cantHrs');
  inputsHoras.forEach(input => {
  validator
    .addField(input, [
      {
        rule: 'required',
        errorMessage: 'Este campo es obligatorio',
      },
      {
        rule: 'integer'
      },
      {
        rule: 'minNumber',
        value: 1,
        errorMessage: 'No puede colocar horas menores o iguales a 0'
      }
    ])
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // Inicializa los select de materialize
  $('select').formSelect();
  sumarHorasActDescarga(); 
  validarFormulario();
});
