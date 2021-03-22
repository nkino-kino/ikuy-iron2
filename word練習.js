function worddisplay(){
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
    createArray(xhr.responseText);
    };
 
    xhr.open("get", "eitango5001.csv", true);
    xhr.send(null);
}
worddisplay();

function createArray(csvData) {
	var csvArray = [];
	var tempArray = csvData.split("\n");
    for(var i = 0; i<tempArray.length;i++){
	csvArray[i] = tempArray[i].split(",");
	}
	
	var min = 0;
	var max = 1253;
	var a = Math.floor(Math.random() * (max + 1 - min)) + min;
	var x = parseInt(a);
		
	var word = document.getElementById("word");
	word.innerHTML=("単語 :  "+csvArray[x][1]);
	var pron = document.getElementById("pron");
	pron.innerHTML=("発音 :  "+csvArray[x][3]);
	var translate = document.getElementById("translate");
	translate.innerHTML=("意味 :  "+csvArray[x][2]);
	
	

}
