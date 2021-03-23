function maketen() {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
    createArray(xhr.responseText);
    };
 
    xhr.open("get", "maketen_level0.csv", true);
    xhr.send(null);
}
maketen();
 
function createArray(csvData) {
	var csvArray = [];
	var tempArray = csvData.split("\n");
    for(var i = 0; i<tempArray.length;i++){
	csvArray[i] = tempArray[i].split(",");
	}
	var x = (csvArray[Math.floor(Math.random() * csvArray.length)][0]);

	document.write(x);
}
	