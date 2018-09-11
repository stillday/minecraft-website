window.onscroll = function () {
    scrollFunction()
};


function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("topButton").style.display = "block";
    } else {
        document.getElementById("topButton").style.display = "none";
    }
}

function topFunction(ID, btn) {
    var elmnt = document.getElementById(ID);
    var animation = btn;
    animation.classList.add('rotate');
    elmnt.scrollIntoView({behavior: 'smooth'});
    if (document.body.scrollTop == 0 || document.documentElement.scrollTop == 0) {
        animation.classList.remove('rotate')
    }
}