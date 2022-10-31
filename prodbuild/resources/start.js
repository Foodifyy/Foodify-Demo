"use strict";

function getFinalData(id) {
  var database = firebase.database();
  var url_ref = database.ref().child(id);
  url_ref.on('value', function (snapshot) {
    var nutrients = snapshot.val();
    // sessionStorage.setItem("Nutrients", nutrients)
    console.log("Nutrients: ", nutrients);
    // console.log("Nutrients JSON Parsed:",
    // 	Object.keys(JSON.parse(
    // 		nutrients.replaceAll("'",
    // 			'"'))
    // 	))

    $("#table").html("");
    $("#nutrients").html("");
    $("#nutrients").html("<h2>Found: ".concat(JSON.parse(nutrients.replaceAll("'", '"'))["item_name"], "</h2><br /><br />"));
    var json = JSON.parse(nutrients.replaceAll("'", '"'));
    console.log(json);
    $("#table").html("");
    tabulate(json);
    $("#nutrients").css("color", "black");
    if (!nutrients) {
      $("#nutrients").html("Try clicking a better picture.");
      $("#nutrients").css("color", "red");
    }
  });
}
function tabulate(json) {
  var table = $('<table>');
  var tbody = $('<tbody>');
  var x;
  for (var _x in Object.keys(json)) {
    var row = $('<tr>');
    var row_data_1 = $('<td>');
    row_data_1.html("".concat(Object.keys(json)[_x]));
    var row_data_2 = $('<td>');
    row_data_2.html("".concat(Object.values(json)[_x]));
    row.append(row_data_1);
    row.append(row_data_2);
    if (_x % 2) {
      row_data_1.css("backgroundColor", "#f8f8f8");
      row_data_2.css("backgroundColor", "#f8f8f8");
    }
    tbody.append(row);
  }
  table.append(tbody);
  $(document).ready(function () {
    $("#table").html(table);
  });
  console.log($("#table").html());
}