//Función de Google Script para eliminar duplicados Spreadsheet

function eliminarDuplicates() {
  var posEval = 0;
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = sheet.getDataRange().getValues();
  var newData = [];
  for (i in data) {
    var alldata = data[i];
    var row = data[i][posEval];
    var duplicate = false;
    for (j in newData) {
      if (row == newData[j][posEval]) {
        duplicate = true;
      }
    }
    if (!duplicate) {
      newData.push(alldata);
    }
  }
  sheet.clearContents();
  sheet.getRange(1, 1, newData.length, newData[0].length).setValues(newData);
}
