window.onload = function () {
    setTimeout(() => {
        document.getElementById("presentation-body").style.display = "none";
        document.getElementById("site-body").style.opacity = "1";
        document.getElementById("site-body").style.marginTop = "50px";
        document.body.style.overflow = "scroll";
    }, 2000);
}