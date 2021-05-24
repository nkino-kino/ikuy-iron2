function getword() {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
    createArray(xhr.responseText);
    };
 
    xhr.open("get", "TOEIC_words.csv", true);
    xhr.send(null);
}
getword();

function createXMLHttpRequest() {
    var XMLhttpObject = null;
    XMLhttpObject = new XMLHttpRequest();
    return XMLhttpObject;
}


function createArray(csvData) {
	var csvArray = [];
	var min = 1;
	var max = 1253;
	var a = Math.floor(Math.random() * (max + 1 - min)) + min;
	var x = parseInt(a);
	
	var tempArray = csvData.split("\n");
    for(var i = 0; i<tempArray.length;i++){
	csvArray[i] = tempArray[i].split(",");
	}	
	document.getElementById("definition").innerHTML=(csvArray[x][2]);
}
function hyouji(){
	document.getElementById("TOEIC").innerHTML=(csvArray[x][1]);
}

