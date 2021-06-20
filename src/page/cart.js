import '../asset/cart.less';

document.querySelector('.login').addEventListener('click', function() {
    let modal = document.querySelector('.login-modal');
    if (modal.classList.contains('g-modal--open')) return;
    modal.classList.toggle('g-modal--open');
});

document.body.addEventListener('click', function(e) {
    if (e.target.classList.contains('g-mask')) {
        e.target.parentElement.classList.toggle('g-modal--open');
    }
});
