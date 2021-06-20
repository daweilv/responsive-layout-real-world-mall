export default function animation(duration, callback) {
    requestAnimationFrame(() => {
        callback.enter();
        requestAnimationFrame(() => {
            callback.active();
            setTimeout(() => {
                callback.leave();
            }, duration);
        });
    });
}
