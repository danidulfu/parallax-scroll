let parallax = document.querySelector('#parallax');

window.addEventListener("scroll", function () {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.9 + "px";
});