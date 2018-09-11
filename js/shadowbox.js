function shadowbox(ID) {
    var modal = document.getElementById(ID);
    var span = document.getElementsByClassName('close')[0][1];
    modal.style.display = "block";
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function shadowclose(btn) {
    var span = btn;
    span.parentElement.parentElement.style.display = 'none';
}