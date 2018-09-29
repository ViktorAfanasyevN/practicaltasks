var my_students = [];

function addNewStudent() {  
    var tbl = document.getElementById('students');
    var tblBody = document.getElementById("student");
    var row = document.createElement("tr");
	
    var result = {};
    var inputs = document.getElementsByClassName('form-input');
    for (var i = 0; i < inputs.length; i++) {
        result[inputs[i].getAttribute('data-id')] = (inputs[i].getAttribute('data-id')!='studentLP')? inputs[i].value: ((inputs[i].checked) ?  true : false)
    }
    my_students.push(result);
    
    for ( var details in my_students[my_students.length-1] ) {
        var cell = document.createElement("td");
        var cellText = document.createTextNode(my_students[my_students.length-1][details]);
        cell.appendChild(cellText);
        row.appendChild(cell);           
    }
    tblBody.appendChild(row);
	tbl.setAttribute("border", "1");
 }
 
 function getStudentsList() {
    var div_ = document.getElementById('stringStudentList');
    div_.innerHTML =""
    for (var student in my_students) {
       div_.innerHTML +=`<p> ${(Object.values(my_students[student]).join("|"))}</p>`;
    }
 }
