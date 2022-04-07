var myNodelist = document.getElementsByTagName('li');
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement('span');
    var symbol = document.createTextNode("\u00D7");
    span.className = "cancel";
    span.appendChild(symbol);
    myNodelist[i].appendChild(span);
}

var cancel = document.getElementsByClassName("cancel");
var i;
for (i = 0; i < cancel.length; i++){
    cancel[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = "none";
    }
}

var list = document.querySelector('ul');
list .addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  }, false);

function newElement() {
    var li = document.createElement('li');
    var item = document.getElementById("myInput").value;
    var labelid = Math.random()
     var inputValue = "<input type = 'checkbox' class = 'check checked' id='labelid'><label for='labelid' class = 'label'>"+item+"</label></input>";
     li.innerHTML = inputValue;
     if (item == ''){
        alert("You must write something!");
     }
     else {
        document.getElementById('myUL').appendChild(li);
     }
     document.getElementById('myInput').value = '';

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "cancel";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < cancel.length; i++) {
      cancel[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
}
