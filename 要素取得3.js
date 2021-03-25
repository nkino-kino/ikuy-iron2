var y = 0;
function hyouji2(){
	if (y< rec1.length){
var word1 = document.getElementById("word1");
	word1.innerHTML=("英単語:  "+rec1[y]);
var tr1 = document.getElementById("tr1");
	tr1.innerHTML=("発音:  "+rec2[y]);
var pron1 = document.getElementById("pron1");
	pron1.innerHTML=("意味:  "+rec3[y]);
	y++;
}
	else{
		y=0;
	word1.innerHTML=("英単語:  "+rec1[y]);
	tr1.innerHTML=("発音:  "+rec2[y]);
	pron1.innerHTML=("意味:  "+rec3[y]);
	}
	}
