document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('helloButton');
    const message = document.getElementById('message');

    button.addEventListener('click', () => {
        message.textContent = 'Você clicou no botão!';
    });
});