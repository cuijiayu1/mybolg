export default (callback) => {
    window.addEventListener('resize', function () {
        var size = window.getComputedStyle(document.body, ':after').getPropertyValue('content');
        callback(size);
    })
}

