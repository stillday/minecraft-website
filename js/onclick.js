
function animateClick(ID) {
    var elmnt = document.getElementById(ID);
    setTimeout(
        function() {
            elmnt.scrollIntoView({behavior: 'smooth'});
        }, 500
    );
}