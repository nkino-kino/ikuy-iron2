//var x;
var k = 0;
var csvArray = [];
function getword() {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
    createArray(xhr.responseText);
    };
 
    xhr.open("get", "TOEIC_words.csv", true);
    xhr.send(null);
}
getword();

/*function createXMLHttpRequest() {
    var XMLhttpObject = null;
    XMLhttpObject = new XMLHttpRequest();
    return XMLhttpObject;
}
 */
function createArray(csvData) {
	var tempArray = csvData.split("\n");
    for(var i = 0; i<tempArray.length;i++){
	csvArray[i] = tempArray[i].split(",");
	}
		

		
	
	
	var word_num=[];
	var TOEIC=[];
	var definition=[];
	for(var n=0; n<1253; n++){
		word_num.push(csvArray[n][0]);
		TOEIC.push(csvArray[n][1]);
		definition.push(csvArray[n][2]);
	}
	var test1=document.getElementById("test1");
		test1.innerHTML=definition[20];
	var test2 = document.getElementById("test2");
		test2.innerHTML=TOEIC[10];
	
	
	if (k<TOEIC.length){
		var TOEICword = document.getElementById("TOEIC");
		TOEICword.innerHTML=(word_num[k]+":  "+TOEIC[k]);
		var definition2 = document.getElementById("definition");
		definition2.innerHTML=(definition[k]);
		k=k+1;
	}
	else if (k==TOEIC.length){
		TOEIC = document.getElementById("TOEIC");
		TOEIC.innerHTML=("back to the first");
		k=0;
	}
	else{
		k=0;
		TOEIC.innerHTML=(word_num[k]+":  "+TOEIC[k]);
}
}
	
	/*var min = 1;
	var max = 1001;
	var a = Math.floor(Math.random() * (max + 1 - min)) + min;
	x = parseInt(a);
		
	var word = document.getElementById("word");
	word.innerHTML=(csvArray[x][1]);
	//var translate = document.getElementById("translate");
	//translate.innerHTML=(csvArray[x][2]);
	//var pron = document.getElementById("pron");
	//pron.innerHTML=(csvArray[x][3]);*/




