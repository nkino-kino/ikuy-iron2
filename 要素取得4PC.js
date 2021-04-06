function hyouji2(){
var min = 0;
var max = rec.length;
var a = Math.floor(Math.random() * (max + 1 - min)) + min;
var y = parseInt(a);
var word1 = document.getElementById("number1");
	word1.innerHTML=("number:  "+rec1[y]);
var tr1 = document.getElementById("word1");
	tr1.innerHTML=("word:  "+rec2[y]);
var pron1 = document.getElementById("definition1");
	pron1.innerHTML=("definition:  "+rec3[y]);
}