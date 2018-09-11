function shadowbox(ID) {
    var modal = document.getElementById(ID);
    var span = document.getElementsByClassName('close')[0][1];
    modal.style.display = "block";
    
    span.onclick = function() {
        modal.style.display = "none";
    }
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}