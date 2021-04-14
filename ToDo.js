
function insertRows(){

    // Find a <table> element with id="myTable":
    var table = document.getElementById("ToDo");
    var btn = document.getElementById('btn');
    var check = document.getElementById('checked');
    var clone = btn.cloneNode(true);
    var clone2 = check.cloneNode(true);

    
    var what = document.getElementById('textfield').value;
    var when  = document.getElementById('textfield2').value;
    var who = document.getElementById('textfield3').value;
    var jono = [textfield.value, textfield2.value, textfield3.value]
    localStorage.setItem("lista", jono);
    
  
    if(what.length<=0) {
        alert("What needs to be done is required!");
    }
    else if(what.length > 50 || when.length>50 ||who.length>50) {
        alert("Too long!");
    }
    else {
        var row = table.insertRow();
        var cell1 = row.insertCell(0);
         var cell2 = row.insertCell(1);
         var cell3 = row.insertCell(2);
         var cell4 = row.insertCell(3);
         var cell5 = row.insertCell(4);
        cell1.innerHTML = what;
        cell2.innerHTML = when;
        cell3.innerHTML = who;
        cell4.appendChild(clone2);
        cell5.appendChild(clone);

    }
    };

    function deleteRow(row) {
        var i = row.parentNode.parentNode.rowIndex;
        document.getElementById("ToDo").deleteRow(i);
      };



    