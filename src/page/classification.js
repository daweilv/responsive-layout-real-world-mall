import animation from '../util/animation';
import '../asset/home.less';
import '../util/loadmore';

document.getElementById('categoryMenu').addEventListener('click', function(e) {
    const ele = e.target;
    if (ele.classList.contains('category__name')) {
        const li = ele.parentElement;
        const subUL = li.getElementsByClassName('category__items2')[0];
        const height = subUL.scrollHeight;
        const isOpen = li.classList.contains('category__item1--open');
        animation(250, {
            enter() {
                if (isOpen) {
                    subUL.style.height = `${height}px`;
                    subUL.style.opacity = 1;
                } else {
                    subUL.style.height = 0;
                    subUL.style.opacity = 0;
                }
            },
            active() {
                if (isOpen) {
                    subUL.style.height = 0;
                    subUL.style.opacity = 0;
                } else {
                    subUL.style.height = `${height}px`;
                    subUL.style.opacity = 1;
                }
            },
            leave() {
                li.classList.toggle('category__item1--open');
                subUL.style.height = '';
                subUL.style.opacity = '';
            },
        });
    }
});

document.getElementById('caidan').addEventListener('click', function(e) {
    document.body.classList.toggle('drawer--open');
});
document.getElementById('drawer__bg').addEventListener('click', function(e) {
    document.body.classList.toggle('drawer--open');
});
