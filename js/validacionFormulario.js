document.addEventListener("DOMContentLoaded", () => {
    
    const validator = new JustValidate('#formularioMatyAct');

    
    function setupValidation() {
        const inputsHoras = document.querySelectorAll('input.inputDinamico');
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
                .addField('#selectorMat', [
                    {
                        rule: 'required',
                        errorMessage: 'Debe seleccionar al menos 1 materia'
                    },
                ])
                .addRequiredGroup('#radioGroup', 'Debe de seleccionar una opcion');
        });
            
    }

    setupValidation();

    const formulario = document.querySelector('#formularioMatyAct');
    formulario.addEventListener('change', () => {
        setupValidation();
    });



});

