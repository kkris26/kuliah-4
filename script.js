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
