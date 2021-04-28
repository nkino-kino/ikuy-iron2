var path = "images";
var image_src = new Array(
	"images/kinkakuji.jpg",
	"images/kyotoshokubutuen1.jpg",
	'images/kyotoshokubutuen_papaiya.jpg',
	'images/hounenin.jpg',
	'images/hounenin_aki.jpg',
	'images/daimonji_yakei.jpg',
  'images/biwakososui.jpg',
  'images/biwakososui2.jpg',
  'images/arasiyama_tikurin.jpg',
  'images/yasakanotou.jpg',
);
var legend = new Array(
	"1　金閣寺",
	"2　京都府立植物園",
	'3　パパイヤ＠京都府立植物園',
	'4　春の法然院',
	'5　秋の法然院',
  "6　大文字山から",
  "7　琵琶湖疏水1",
  '8　琵琶湖疏水2',
  '9　嵐山の竹林',
  '10　八坂の塔',
);
var num = 0;

function changeImg(num) {
  $("#shashin").attr("src", image_src[num]);
	document.getElementById("setsumei").innerHTML=legend[num];
}

function goBack(){
  if (num == 0) {
      num = image_src.length-1;
  }
  else {
      num --;
  }
  changeImg(num);
}

function goForward(){
  if (num == image_src.length-1) {
      num = 0;
  }
  else {
      num ++;
  }
  changeImg(num);
}// JavaScript Document