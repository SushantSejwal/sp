let loading_div = document.getElementById('loading');
window.addEventListener('load', () => {
    // loading_div.style.display = "none";
    setTimeout(function () {
        loading_div.style.transition = "opacity 0.5s ease-in-out";
        loading_div.style.opacity = "0";
    }, 4000);

    setTimeout(function () {
        loading_div.style.display = "none";
    }, 4500);

});