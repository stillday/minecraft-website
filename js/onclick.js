
function animateClick() {
    var elmnt = document.getElementById("welcome");
    setTimeout(
        function() {
            elmnt.scrollIntoView({behavior: 'smooth'});
        }, 500
    );
}