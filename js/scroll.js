window.onscroll = function () {
    scrollFunction()
};


function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("topButton").style.display = "block";
        // var rotateClass = document.getElementsByClassName("rotate")
        // if (rotateClass.length > 0) {
        //     animation.classList.remove("rotate");
        // }

    } else {
        document.getElementById("topButton").style.display = "none";
    }
}

function topFunction(ID, btn) {
    var elmnt = document.getElementById(ID);
    var animation = btn;
    // animation.classList.add('rotate');
    elmnt.scrollIntoView({behavior: 'smooth'});
//     if (elmnt.scrollIntoView) {
//         animation.classList.remove('rotate')
//    }
    return animation;
}