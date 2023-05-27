document.addEventListener("DOMContentLoaded", () => {
  //Sumar las horas en tiempo real por trigger
  let input = "";
  var numActividadesDescarga = 0;
  let radioButtonSi = document.getElementById('opcSi');
  let radioButtonNo = document.getElementById('opcNo');
  radioButtonSi.disabled = false;
  radioButtonNo.disabled = false;
  $('#selectorAct').change(function () {
    input = "";
    numActividadesDescarga = 0;
    var limitExceeded = false;
    $(this).find('option:selected').each(function () {

      // console.log($(this).find('option:selected').prevObject[0].innerHTML)
      if (limitExceeded) { // comprobar si se ha excedido el límite
        // selectedOptions.last().prop('selected', false)
        return false; // salir del bucle

      }
      if (numActividadesDescarga >= 5) {
        radioButtonSi.disabled = true;
        radioButtonNo.disabled = true;
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No puede elegir más de 5 actividades de descarga',
        })
        limitExceeded = true;
        return false; // Salir del each loop
        // Corregir error de que no se quite el ultimo elemento guardado
      } else {
        radioButtonSi.disabled = false;
        radioButtonNo.disabled = false;
      }
      var valor = $(this).data('value');

      if (valor) {
        var nombreActividad = document.createElement("label");
        nombreActividad.innerHTML = $(this).find('option:selected').prevObject[0].innerHTML;
        input += `
                    <div class="field">
                    <label class="textLabel" for="actDescarga">`+ nombreActividad.innerHTML + `</label>
                    </div>
                    <div id="" class="field">
                    <div class="ui right labeled input">
                        <input class="inputDinamico" style="height: 20px;" type="number" placeholder="Cantidad de horas">
                        <div class="ui basic label">
                            Hrs
                        </div>
                        </div>
                    </div>
                    `;
        $("article#espacioActividades").html(input);
        ++numActividadesDescarga;
        // console.log(numActividadesDescarga)
      }
      var inputs = document.getElementsByClassName("inputDinamico");
      for (var i = 0; i < inputs.length; i++) {
        inputs[i].disabled = true;
      }

    });
  });
  $('#selectorAct').trigger('change');


  // Hace el efecto de añadir las actividades o materias en el div
  $('.ui.dropdown').dropdown();


  // Verificar si el radioButton de las ActDescarga esta seleccionado o no
  let opcSi = document.querySelector('#opcSi');
  let opcNo = document.querySelector('#opcNo');
  document.querySelector('#divActDescarga').addEventListener('change', () => {
    var inputs = document.getElementsByClassName("inputDinamico");
    var div = document.querySelector("#divActDescarga > div.field > div");
    var totalHoras = 0;
    if (opcSi.checked) {
      // console.log("Si");
      for (var i = 0; i < inputs.length; i++) {
        inputs[i].disabled = false;
        var valorInput = parseInt(inputs[i].value);
        totalHoras += valorInput;
      }

      if (totalHoras > 22) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Las horas de las actividades descarga no deben sumar más de 22 hrs',
        })
      }

      div.style.pointerEvents = "none";
      document.getElementById("numHrs").innerHTML = totalHoras + " hrs";
      $('select#selectorAct').click(false);
    } else if (opcNo.checked) {
      div.style.pointerEvents = "auto";
      // console.log("No");
      for (var i = 0; i < inputs.length; i++) {
        inputs[i].disabled = true;
      }
    }

  })


});
