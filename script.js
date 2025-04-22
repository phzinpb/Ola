const botao = document.querySelector('.btn');
const popup = document.querySelector('.popup');

botao.addEventListener('click', function() {
    if (popup.classList.contains('hidden')) {
        popup.classList.remove('hidden');
    }
    else {
        popup.classList.add('hidden');
    }
})