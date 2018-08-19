
function animateClick(ID) {
    var elmnt = document.getElementById(ID);
    var todo = this;
    todo.classList.add("mystyle");
    setTimeout(
        function() {
            elmnt.scrollIntoView({behavior: 'smooth'});
        }, 500
    );
}