window.onload = function () {
    setTimeout(() => {
        document.getElementById("presentation-body").style.display = "none";
        document.getElementById("site-body").style.opacity = "1";
        document.getElementById("site-body").style.marginTop = "50px";
        document.body.style.overflow = "scroll";

        var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';

        var percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;

        document.getElementById("scrollbar-indicator-elem").style.height = percent + "%";
        document.getElementById("scrollbar-indicator-elem").style.opacity = 1;
    }, 2000);
}

document.addEventListener("scroll", setScroll);

function setScroll() {
    var h = document.documentElement, 
    b = document.body,
    st = 'scrollTop',
    sh = 'scrollHeight';

    var percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;

    document.getElementById("scrollbar-indicator-elem").style.height = percent + "%";
}
