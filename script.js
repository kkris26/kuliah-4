// var selectedRow = null;

// function onFormSubmit() {
//     if (validate()) {
//   var formData = readFormData();
//   if (selectedRow == null) insertData(formData);
//   else updateData(formData);
//   resetForm();
//     }
// }
// function readFormData() {
//   var formData = {};
//   formData["nim"] = document.getElementById("nim").value;
//   formData["nama"] = document.getElementById("nama").value;
//   return formData;
// }
// // to add number
// var no = 1;
// // to add number
// function insertData(data) {
//   var table = document
//     .getElementById("datalist")
//     .getElementsByTagName("tbody")[0];
//   var newRow = table.insertRow(table.length);
//   cell0 = newRow.insertCell(0);
//   cell0.innerHTML = no++;
//   cell1 = newRow.insertCell(1);
//   cell1.innerHTML = data.nim;
//   cell2 = newRow.insertCell(2);
//   cell2.innerHTML = data.nama;
//   cell3 = newRow.insertCell(3);
//   cell3.innerHTML = `<a onClick="onEdit(this)">Edit</a> |
//                         <a onClick="onDelete(this)">Delete</a>`;
// }

// function resetForm() {
//   document.getElementById("nim").value = "";
//   document.getElementById("nama").value = "";
//   selectedRow = null;
// }
// function onEdit(td) {
//   selectedRow = td.parentElement.parentElement;
//   document.getElementById("nim").value = selectedRow.cells[1].innerHTML;
//   document.getElementById("nama").value = selectedRow.cells[2].innerHTML;
// }

// function updateData(formData) {
//   selectedRow.cells[1].innerHTML = formData.nim;
//   selectedRow.cells[2].innerHTML = formData.nama;
// }

// function onDelete(td) {
//   if (confirm("are you sure to dlete this data?")) {
//     row = td.parentElement.parentElement;
//     document.getElementById("datalist").deleteRow(row.rowIndex);
//     resetForm();
//   }
// }

// function validate() {
//   isValid = true;
//   if (document.getElementById("nim").value ="") {
//     isValid = false;
//     document.getElementById("nimValidationError").classList.remove("hide");
//   } else {
//     isValid = true;
//     if (
//       !document.getElementById("nimValidationError").classList.contains("hide")
//     )
//       document.getElementById("nimValidationError").classList.add("hide");
//   }
//   return isValid;
// }
i = 1;
$("form").submit(function (e) {
  e.preventDefault();
  var no = i++;
  var nim = $("input[name='nim']").val();
  var nama = $("input[name='nama']").val();

  $("#datalist tbody").append(
    "<tr data-no='" +
      no +
      "' data-nim='" +
      nim +
      "' data-nama='" +
      nama +
      "'><td>" +
      no +
      "</td><td>" +
      nim +
      "</td><td>" +
      nama +
      "</td><td><a class='btn-edit' type='button'>Edit | </a><a class='btn-delete' type='button'>Delete</a></td></tr>"
  );
  $("input[name='']").val("");
});
$("body").on("click", ".btn-delete", function () {
  $(this).parents("tr").remove();
});

// $("body").on("click", ".btn-edit", funciton () {
$("body").on("click", ".btn-edit", function () {
  var nim = $(this).parents("tr").attr("data-nim");
  var nama = $(this).parents("tr").attr("data-nama");

  $(this)
    .parents("tr")
    .find("td:eq(1)")
    .html("<input nim = 'edit-nim'value='" + nim + "'>");
  $(this)
    .parents("tr")
    .find("td:eq(2)")
    .html("<input nama = 'edit-nama'value='" + nama + "'>");

  $(this)
    .parents("tr")
    .find("td:eq(3)")
    .prepend("<a class='btn-update' type='button'>Update | </a>");

  $(this).hide();
});

$("body").on("click", ".btn-update", function () {
  var nim = $(this).parents("tr").find("input[name='edit-nim']").val();
  var nama = $(this).parents("tr").find("input[name='edit-nama']").val();

  $(this).parents("tr").find("td:eq(1)").text(nim);
  $(this).parents("tr").find("td:eq(2)").text(nama);

  $(this).parents("tr").attr("data-nim", nim);
  $(this).parents("tr").attr("data-nama", nama);

  $(this).parents("tr").find(".btn-edit").show();
  $(this).parents("tr").find(".btn-update").remove();
});
