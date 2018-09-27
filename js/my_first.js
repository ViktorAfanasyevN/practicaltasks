var my_students = [{
    firstName: "Alex",
    lastName: "Bob",
    age: "25",
    city: "Kharkov",
    laptop : true
}];

function addNewStudent() {  
    var tbl = document.getElementById('students');
    var tblBody = document.createElement("tbody");
    
   var newStudent = [{
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        age: document.getElementById('studentAge').value,
        city: document.getElementById('studentCity').value,
        laptop: document.getElementById('studentLP').value
    }];
    my_students.push(newStudent)
    for ( var student of newStudent ) {
        var row = document.createElement("tr");
        for ( var details in student ) {
            var cell = document.createElement("td");
            var cellText = document.createTextNode(student[details]);
            cell.appendChild(cellText);
            row.appendChild(cell);           
        }
        tblBody.appendChild(row);
    }
      tbl.appendChild(tblBody);
  tbl.setAttribute("border", "1");
}



