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
	var word_array = Array.from(csvArray[x][1]);
	var hint1=[];
	for (var j=0; j<word_array.length; j++){
		if (j%2==0){
			hint1.push(word_array[j]);}
		else {hint1.push("-");}
		}
		var array = hint1.join('');

	document.getElementById("definition").innerHTML=csvArray[x][2];
	document.getElementById("hint").innerHTML=array;
}



