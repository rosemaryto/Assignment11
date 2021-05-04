// // CREATE AN ARRAY OF EMPLOYEES
// let arrEmployees = [
//     [34123413, "Zak Ruvalcaba", 3424, "zak@vectacorp.com", "Executive"],
//     [23424665, "Sally Smith", 2344, "sally@vectacorp.com", "Administrative"],
//     [12341244, "Mark Martin", 5352, "mark@vectacorp.com", "Sales"],
//     [14545423, "Robin Banks", 7867, "robin@vectacorp.com", "Marketing"],
//     [13413453, "Sue Wedge", 1235, "sue@vectacorp.com", "QA"]
// ];

// // GET DOM ELEMENTS
// let empTable    = document.querySelector('#employees');
// let empCount    = document.querySelector('#empCount');

// // BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
// buildGrid(arrEmployees);

// // DELETE EMPLOYEE
// empTable.addEventListener('click', (e) => {
//     if (e.target.classList.contains('delete')) {
//         // CONFIRM THE DELETE
//         if (confirm('Are you sure you want to delete this employee?')) {
//             // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
//             let rowIndex = e.target.parentNode.parentNode.rowIndex;
//             // REMOVE EMPLOYEE FROM ARRAY
//             empTable.deleteRow(rowIndex);
//         }
//     }
// });

// // BUILD THE EMPLOYEES GRID
// function buildGrid(arrEmployees) {
//     // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
//     empTable.lastElementChild.remove();
//     // REBUILD THE TBODY FROM SCRATCH
//     let tbody = document.createElement('tbody');
//     // LOOP THROUGH THE ARRAY OF EMPLOYEES
//     // REBUILDING THE ROW STRUCTURE
//     for (let employee of arrEmployees) {
//         tbody.innerHTML += 
//         `
//         <tr>
//             <td>${employee[0]}</td>
//             <td>${employee[1]}</td>
//             <td>${employee[2]}</td>
//             <td><a href="mailto:${employee[3]}">${employee[3]}</a></td>
//             <td>${employee[4]}</td>
//             <td><button class="btn btn-sm btn-danger delete">X</button></td>
//         </tr>
//         `
//     }
//     // BIND THE TBODY TO THE EMPLOYEE TABLE
//     empTable.appendChild(tbody);
//     // UPDATE EMPLOYEE COUNT
//     empCount.value = `(${arrEmployees.length})`;
// };
 var $ = function (id) {
     "use strict";
     return window.document.getElementById(id);
 };

 window.addEventListener("load", function() {
     "use strict";
     var xhr, jsonDoc, employees, i;

     xhr = new XMLHttpRequest();
     xhr.open("GET", "data/employees.json");
     xhr.send();

     xhr.addEventListener("readystatechange", function() {
         if (xhr.status === 200) {
             jsonDoc = JSON.parse(xhr.responseText);
             $("employees").innerHTML = "";
             for (i = 0; i < jsonDoc.employees.length; i += 1) {
                 $("employees").innerHTML += jsonDoc.employees[i].id + jsonDoc.employees[i].name + jsonDoc.employees[i].ext + jsonDoc.employees[i].email + jsonDoc.employees[i].dept + "<br>";
             }
         } else {
             window.alert("There was an error connecting with document");
         }

     });
 });
