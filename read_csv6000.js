var x;
var csvArray = [];
function word() {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
    createArray(xhr.responseText);
    };
 
    xhr.open("get", "eitango6001.csv", true);
    xhr.send(null);
}
word();
 
function createXMLHttpRequest() {
    var XMLhttpObject = null;
    XMLhttpObject = new XMLHttpRequest();
    return XMLhttpObject;
}
 
function createArray(csvData) {
	var tempArray = csvData.split("\n");
    for(var i = 0; i<tempArray.length;i++){
	csvArray[i] = tempArray[i].split(",");
	}

	var min = 1;
	var max = 1001;
	var a = Math.floor(Math.random() * (max + 1 - min)) + min;
	var x = parseInt(a);
		
	var word = document.getElementById("word");
	word.innerHTML=(csvArray[x][1]);
	//var translate = document.getElementById("translate");
	//translate.innerHTML=(csvArray[x][2]);
	//var pron = document.getElementById("pron");
	//pron.innerHTML=(csvArray[x][3]);

}