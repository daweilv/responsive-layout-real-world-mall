import { getWindowScrollTop } from './layout';
let loading = false;

function loadResults() {
    if (loading) return;
    loading = true;
    document
        .querySelector('.loading__wrapper')
        .classList.add('loading__wrapper--show');

    setTimeout(function() {
        loading = false;
        let products = document.createDocumentFragment();
        document.querySelectorAll('.product__wrapper').forEach(item => {
            products.appendChild(item.cloneNode(true));
        });
        document.querySelector('.products').appendChild(products);
        document
            .querySelector('.loading__wrapper')
            .classList.remove('loading__wrapper--show');
    }, 1500);
}

window.addEventListener('scroll', function() {
    if (loading) return;
    if (getWindowScrollTop() + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        loadResults();
    }
});
