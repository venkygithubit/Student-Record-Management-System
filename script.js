
var selectedRow = null;
var selectedId = null;

// Loading data 
window.onload = function () {
  fetch("http://localhost:5000/employee/all")
    .then(res => res.json())
    .then(data => {
      data.forEach(emp => {
        insertNewRecord(emp);
      });
    });
};

// FORM SUBMIT (CREATE / UPDATE)
function onFormSubmit(e) {
  e.preventDefault();

  var formData = readFormData();

  if (selectedId == null) {
    // CREATE
    fetch("http://localhost:5000/employee/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => {
      insertNewRecord(data);
      resetForm();
    });
  } else {
    // UPDATE
    fetch(`http://localhost:5000/employee/update/${selectedId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => {
      updateRow(data);
      resetForm();
    });
  }
}

function readFormData() {
  return {
    collegeRegistrationNumber: document.getElementById("productCode").value,
    studentName: document.getElementById("product").value,
    rank: document.getElementById("qty").value,
    section: document.getElementById("perPrice").value
  };
}

// INSERT ROW
function insertNewRecord(data) {
  var table = document.getElementById("storeList").getElementsByTagName("tbody")[0];
  var row = table.insertRow();

  row.setAttribute("data-id", data._id);

  row.insertCell(0).innerHTML = data.collegeRegistrationNumber;
  row.insertCell(1).innerHTML = data.studentName;
  row.insertCell(2).innerHTML = data.rank;
  row.insertCell(3).innerHTML = data.section;
  row.insertCell(4).innerHTML =
    `<button onclick="onEdit(this)">Edit</button>
     <button onclick="onDelete(this)">Delete</button>`;
}

// EDIT
function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  selectedId = selectedRow.getAttribute("data-id");

  document.getElementById("productCode").value = selectedRow.cells[0].innerHTML;
  document.getElementById("product").value = selectedRow.cells[1].innerHTML;
  document.getElementById("qty").value = selectedRow.cells[2].innerHTML;
  document.getElementById("perPrice").value = selectedRow.cells[3].innerHTML;
}

// UPDATE UI ROW
function updateRow(data) {
  selectedRow.cells[0].innerHTML = data.collegeRegistrationNumber;
  selectedRow.cells[1].innerHTML = data.studentName;
  selectedRow.cells[2].innerHTML = data.rank;
  selectedRow.cells[3].innerHTML = data.section;
}

// DELETE
function onDelete(td) {
  if (confirm("Are you sure?")) {
    var row = td.parentElement.parentElement;
    var id = row.getAttribute("data-id");

    fetch(`http://localhost:5000/employee/delete/${id}`, {
      method: "DELETE"
    })
    .then(() => {
      document.getElementById("storeList").deleteRow(row.rowIndex);
    });
  }
}

// RESET
function resetForm() {
  document.getElementById("productCode").value = "";
  document.getElementById("product").value = "";
  document.getElementById("qty").value = "";
  document.getElementById("perPrice").value = "";
  selectedRow = null;
  selectedId = null;
}
