import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import animation from '../util/animation';
import '../asset/home.less';

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

var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 5,
    slidesPerView: 'auto',
    // slidesPerView: 4,
    // loop: true,
    freeMode: true,
    // loopedSlides: 5, //looped slides should be the same
    slideToClickedSlide: true,
    watchSlidesVisibility: true,
    // centeredSlides:true,
    // watchSlidesProgress: true,
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // }
});
var galleryTop = new Swiper('.gallery-top', {
    // spaceBetween: 5,
    loop: true,
    slideToClickedSlide: true,
    // loopedSlides: 5, //looped slides should be the same
    thumbs: {
        swiper: galleryThumbs,
    },
    pagination: {
        el: '.swiper-pagination',
    },
});

document
    .getElementsByClassName('swiper-button-next')[0]
    .addEventListener('click', function() {
        galleryTop.slideNext();
    });

document
    .getElementsByClassName('swiper-button-prev')[0]
    .addEventListener('click', function() {
        galleryTop.slidePrev();
    });
