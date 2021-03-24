
var x;
function maketen() {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
    createArray(xhr.responseText);
    };
 
    xhr.open("get", "maketen_level1.csv", true);
    xhr.send(null);
}
maketen();
 
/*function createXMLHttpRequest() {
    var XMLhttpObject = null;
    XMLhttpObject = new XMLHttpRequest();
    return XMLhttpObject;
}
 */
function createArray(csvData) {
	var csvArray = [];
	var tempArray = csvData.split("\n");
    for(var i = 0; i<tempArray.length;i++){
	csvArray[i] = tempArray[i].split(",");
	}
		
	x = csvArray[Math.floor(Math.random() * csvArray.length)];
	
		
	var mondai = document.getElementById("mondai");
	mondai.innerHTML=(x);
}