function shadowbox(ID) {
    var modal = document.getElementById(ID);
    modal.style.display = "block";
    loadDoc(ID);
    
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