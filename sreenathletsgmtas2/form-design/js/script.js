function displayDate()
{
	var date_selected=document.getElementById("idate");
	var para=document.getElementById("date-select");
	para.innerHTML=date_selected.value.toString();
}
function handleDragOver(event) {
  event.preventDefault();
  event.dataTransfer.dropEffect = "copy";
}

function handleFileDrop(event) {
  event.preventDefault();
  var file = event.dataTransfer.files[0];
}