require("../css/index.scss")

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('#copyright').innerHTML = `Copyright ${new Date().getFullYear()}`;
});