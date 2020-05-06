var row;

function deleteRow(btn) {
    row = btn.parentNode.parentNode;
}

function cancelar(){
    row.parentNode.removeChild(row);
}