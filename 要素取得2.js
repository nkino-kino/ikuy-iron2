function hyouji2(){
var min = 0;
var max = rec.length;
var a = Math.floor(Math.random() * (max + 1 - min)) + min;
var y = parseInt(a);
var word1 = document.getElementById("word1");
	word1.innerHTML=("英単語:  "+rec1[y]);
var tr1 = document.getElementById("tr1");
	tr1.innerHTML=("発音:  "+rec2[y]);
var pron1 = document.getElementById("pron1");
	pron1.innerHTML=("意味:  "+rec3[y]);
}