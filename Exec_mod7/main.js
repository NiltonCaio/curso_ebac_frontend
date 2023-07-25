const form = document.getElementById('form_verificacao')
const campoA = document.getElementById('campo_A')
const campoB = document.getElementById('campo_B')
let formEValido = false;

function validaCampo(valorCampoA, valorCampoB) {
    return valorCampoB.value > valorCampoA.value;
}

form.addEventListener('submit', function(e) {
    e.preventDefault()

    const messageWorking = `Campo B é maior que campo A`

    formEValido = validaCampo(campoA, campoB)
    if (formEValido) {
        const contentMessageSuccess = document.querySelector('.success_message');
        contentMessageSuccess.innerHTML = messageWorking;
        contentMessageSuccess.style.display = 'block';

        campoA.value = '';
        campoB.value = '';

        document.querySelector('.error_message').style.display = 'none';
        campoA.style.border = '1px solid black';
    } else {
        campoA.style.border = '1px solid red';
        document.querySelector('.error_message').style.display = 'block';
    }
})
