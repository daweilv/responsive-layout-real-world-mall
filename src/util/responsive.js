var responsive = function() {
    var clientWidth = document.documentElement.clientWidth;
    if (clientWidth < 576) {
        document.documentElement.style.fontSize = clientWidth / 750 * 100 + "px";
    } else if (clientWidth < 992) {
        document.documentElement.style.fontSize = clientWidth / 1536 * 100 + "px";
    } else {
        document.documentElement.style.fontSize = "50px";
    }
};
responsive();
window.onresize = function() {
    responsive();
};