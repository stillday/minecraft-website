function loadDoc(ID) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById(ID).innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "./assets/text-files/test.txt", true);
    xhttp.send();
  }