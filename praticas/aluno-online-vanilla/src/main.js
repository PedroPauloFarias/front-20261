import './style.css'

const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const botao = document.querySelector('#botaoEntrar');

if (botao) {
    const emailErro = document.querySelector('#emailErro');
    const senhaErro = document.querySelector('#senhaErro');

    email.addEventListener('input', function() {
        emailErro.textContent = '';
    });

    senha.addEventListener('input', function() {
        senhaErro.textContent = '';
    });

    botao.addEventListener('click', function(e) {
        e.preventDefault();

        emailErro.textContent = '';
        senhaErro.textContent = '';

        let formularioValido = true;

        if (email.value.trim() == '') {
            emailErro.textContent = 'O campo de email é obrigatório.';
            formularioValido = false;
        }

        if (senha.value.trim() == '') {
            senhaErro.textContent = 'O campo de senha é obrigatório.';
            formularioValido = false;
        }

        if (formularioValido == true) {
            window.location.href = 'index.html'; 
        }
    });
}