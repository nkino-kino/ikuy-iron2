

function maketen() {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
    createArray(xhr.responseText);
    };
 
    xhr.open("get", "maketen_level0.csv", true);
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
	var x = (csvArray[Math.floor(Math.random() * csvArray.length)][0]);

	//document.write(csvArray[0]);
	var mondai = document.getElementById("mondai");
	mondai.innerHTML=(x);
	
	
	/*
	var x0 = (level0[Math.floor(Math.random() * level0.length)][0]);
	var x1 = (level1[Math.floor(Math.random() * level1.length)][1]);
	var x2 = (level2[Math.floor(Math.random() * level2.length)][2]);
	var x3 = (level3[Math.floor(Math.random() * level3.length)][3]);
		
	var L0 = document.getElementById("L0");
	L0.innerHTML=(x0);
	var L1 = document.getElementById("L1");
	L1.innerHTML=(x1);
	var L0 = document.getElementById("L2");
	L2.innerHTML=(x2);
	var L1 = document.getElementById("L3");
	L3.innerHTML=(x3);
*/
}