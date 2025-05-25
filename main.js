document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('redirectButton');
    if (button) {
        button.addEventListener('click', function () {
            // Desabilita o botão para evitar cliques múltiplos durante o delay
            button.disabled = true;
            button.textContent = 'se mata pfv 🥰'; // Opcional: muda o texto do botão

            // Define o delay de 2 segundos (2000 milissegundos)
            setTimeout(function() {
                window.location.href = '/main.html';
            }, 2000); // 2000 milissegundos = 2 segundos
        });
    }
});