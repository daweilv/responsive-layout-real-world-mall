(function init() {
    function subtract(ele) {
        let ipt = ele.parentElement.querySelector('.c-counter__input');
        let v = ipt.value;
        if (v > 1) {
            ipt.value = parseInt(v, 10) - 1;
        }
    }

    function add(ele) {
        let ipt = ele.parentElement.querySelector('.c-counter__input');
        let v = ipt.value;
        ipt.value = parseInt(v, 10) + 1;
    }
    
    document.body.addEventListener('click', function(e) {
        let ele = e.target;
        if (ele.classList.contains('c-counter__minus')) {
            subtract(ele);
        } else if (ele.classList.contains('c-counter__plus')) {
            add(ele);
        }
    });
})();
