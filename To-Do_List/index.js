// Close Buttonn
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

function newElement() {
  var li = document.createElement("li");
  var ti = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var inputValuetime = document.getElementById("myInputtime").value;
  var t = document.createTextNode(inputValue);
  var m = document.createTextNode(inputValuetime);
  li.appendChild(t);
  ti.appendChild(m);
  if (inputValue === '') {
    alert("Task is not mentioned!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  //Enter Time
  if (inputValuetime === '') {
    alert("Time is not mentioned");
  } else {
    document.getElementById("time").appendChild(ti);
  }
  document.getElementById("myInputtime").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  var spana = document.createElement("SPAN");
  var txta = document.createTextNode("\u00D7");
  spana.className = "close";
  spana.appendChild(txta);
  ti.appendChild(spana);
  

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}