var notHere;
var notHereStudents;
const d = new Date();
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "11",
  "December",
];

let month = months[d.getMonth()];


document.getElementById("demo").innerHTML =
  d.getFullYear() + "/" + month + "/" + d.getDate();

document.getElementById("submit_report").onclick = function () {
  notHere = 0;
  notHereStudents = [];
  var hereStudents = [];
  for (
    var i = 0;
    i <
    document.getElementById("class").getElementsByClassName("students").length;
    i++
  ) {
    if (!document.getElementById("Here" + i).checked) {
      notHere++;
      notHereStudents.push(document.getElementById("name" + i).innerHTML);
    }
    else {
      hereStudents.push(document.getElementById("name" + i).innerHTML);
    }
  }
  document.getElementById("report_info_number").innerHTML =
    " Total Present Contestants: " + notHere;
  if (notHereStudents.length === 0) {
    document.getElementById("report_info_students").innerHTML =
      " Absent Contestants: All";
  } 
  else {
    document.getElementById("report_info_students").innerHTML =
      " Present Contestans:" + "\n" + notHereStudents;
  }
  document.getElementById('Absent').innerHTML = "Absent Contestants:  " + hereStudents ;
  document.getElementById('Absentnum').innerHTML = "Total Absent Contestants: " + hereStudents.length;
};
// document.getElementById('add_student').onclick = function(){
//   var div = document.createElement('div');
//   var id = document.createAttribute('id');
//   id.value = 'pre_Student';

//   div.setAttributeNode(id);

//   var input = document.createElement('input');
//   var inputid = document.createAttribute('id');
//   inputid.value = 'name_input';
//   var type = document.createAttribute('type');
//   type.value = 'text';
//   var placeHolder = document.createAttribute('placeholder');
//   placeHolder.value = 'Students Name'

//   input.setAttributeNode(inputid);
//   input.setAttributeNode(type);
//   input.setAttributeNode(placeHolder);

//   var button = document.createElement('button');
//   button.innerHTML = 'Submit';
//   var buttonid = document.createAttribute('id');
//   buttonid.value = 'buttonid';

//   button.setAttributeNode(buttonid);
//   button.onclick = function () {
//     addStudentfunc();
// };

//   div.appendChild(input);
//   div.appendChild(button);

//   document.getElementById('class').insertBefore(div, document.getElementById('add_student_div'));

//   document.getElementById('add_student').disabled = true;
// }

// function addStudentfunc(){
//   var sdiv = document.createElement('div');
//   var sid = document.createAttribute('id');
//   sid.value = document.getElementById('class').getElementsByClassName('students').length;
//   var clas = document.createAttribute('class');
//   clas.value = 'students';
//   sdiv.setAttributeNode(clas);
//   sdiv.setAttributeNode(sid);

//   var name = document.createElement('h3');
//   name.innerHTML = " " + document.getElementById('name_input').value;
//   var nameid = document.createAttribute('id');
//   nameid.value = 'name' + document.getElementById('class').getElementsByClassName('students').length;
//   name.setAttributeNode(nameid);

//   var radio1 = document.createElement('input');
//   radio1.innerHTMl = " Here";
//   var type = document.createAttribute('type');
//   type.value = 'radio';
//   var radio1Id = document.createAttribute('id');
//   radio1Id.value = 'Here' + document.getElementById('class').getElementsByClassName('students').length;
//   var radio1Name = document.createAttribute('name');
//   radio1Name.value = document.getElementById('class').getElementsByClassName('students').length;
//   var radio1Value = document.createAttribute('value');
//   radio1Value.value = 'Here';
//   radio1.setAttributeNode(type);
//   radio1.setAttributeNode(radio1Id);
//   radio1.setAttributeNode(radio1Name);
//   radio1.setAttributeNode(radio1Value);

//   var radio2 = document.createElement('input');
//   radio2.innerHTMl = " Not Here";
//   var type2 = document.createAttribute('type');
//   type2.value = 'radio';
//   var radio2Name = document.createAttribute('name');
//   radio2Name.value = document.getElementById('class').getElementsByClassName('students').length;

//   radio2.setAttributeNode(type2);
//   radio2.setAttributeNode(radio2Name);

//   sdiv.appendChild(name);
//   sdiv.appendChild(radio1);
//   sdiv.appendChild(radio2);

//   document.getElementById('pre_Student').remove();
//   document.getElementById('class').insertBefore(sdiv, document.getElementById('add_student_div'));

//   document.getElementById('add_student').disabled = false;
// }
