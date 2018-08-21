
function animateClick(ID, btn) {
    var elmnt = document.getElementById(ID);
    var animation = btn;
    animation.classList.add("rotate");
    setTimeout(
        function() {
            elmnt.scrollIntoView({behavior: 'smooth'});
            animation.classList.remove("rotate")
        }, 500
    );
}