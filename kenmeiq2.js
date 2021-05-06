// JavaScript Document
var map = [
	"prefectures/0.png",
	"prefectures/1.png",
	'prefectures/2.png',
	'prefectures/3.png',
	'prefectures/4.png',
	'prefectures/5.png',
  'prefectures/6.png',
  'prefectures/7.png',
  'prefectures/8.png',
  'prefectures/9.png',
		"prefectures/10.png",
	"prefectures/11.png",
	'prefectures/12.png',
	'prefectures/13.png',
	'prefectures/14.png',
	'prefectures/15.png',
  'prefectures/16.png',
  'prefectures/17.png',
  'prefectures/18.png',
  'prefectures/19.png',
		"prefectures/20.png",
	"prefectures/21.png",
	'prefectures/22.png',
	'prefectures/23.png',
	'prefectures/24.png',
	'prefectures/25.png',
  'prefectures/26.png',
  'prefectures/27.png',
  'prefectures/28.png',
  'prefectures/29.png',
		"prefectures/30.png",
	"prefectures/31.png",
	'prefectures/32.png',
	'prefectures/33.png',
	'prefectures/34.png',
	'prefectures/35.png',
  'prefectures/36.png',
  'prefectures/37.png',
  'prefectures/38.png',
  'prefectures/39.png',
		"prefectures/40.png",
	"prefectures/41.png",
	'prefectures/42.png',
	'prefectures/43.png',
	'prefectures/44.png',
	'prefectures/45.png',
  'prefectures/46.png'
	];
var japan = new Array(
	"prefectures/0a.png",
	"prefectures/1a.png",
	'prefectures/2a.png',
	'prefectures/3a.png',
	'prefectures/4a.png',
	'prefectures/5a.png',
  'prefectures/6a.png',
  'prefectures/7a.png',
  'prefectures/8a.png',
  'prefectures/9a.png',
		"prefectures/10a.png",
	"prefectures/11a.png",
	'prefectures/12a.png',
	'prefectures/13a.png',
	'prefectures/14a.png',
	'prefectures/15a.png',
  'prefectures/16a.png',
  'prefectures/17a.png',
  'prefectures/18a.png',
  'prefectures/19a.png',
		"prefectures/20a.png",
	"prefectures/21a.png",
	'prefectures/22a.png',
	'prefectures/23a.png',
	'prefectures/24a.png',
	'prefectures/25a.png',
  'prefectures/26a.png',
  'prefectures/27a.png',
  'prefectures/28a.png',
  'prefectures/29a.png',
		"prefectures/30a.png",
	"prefectures/31a.png",
	'prefectures/32a.png',
	'prefectures/33a.png',
	'prefectures/34a.png',
	'prefectures/35a.png',
  'prefectures/36a.png',
  'prefectures/37a.png',
  'prefectures/38a.png',
  'prefectures/39a.png',
		"prefectures/40a.png",
	"prefectures/41a.png",
	'prefectures/42a.png',
	'prefectures/43a.png',
	'prefectures/44a.png',
	'prefectures/45a.png',
  'prefectures/46a.png'
);
var answer = new Array(
	"北海道",
	"青森",
	'岩手',
	'宮城',
	'秋田',
	'山形',
  '福島',
  '茨城',
  '栃木',
  '群馬',
		"埼玉",
	"千葉",
	'東京',
	'神奈川',
	'新潟',
	'富山',
  '石川',
  '福井',
  '山梨',
  '長野',
		"岐阜",
	"静岡",
	'愛知',
	'三重',
	'滋賀',
	'京都',
  '大阪',
  '兵庫',
  '奈良',
  '和歌山',
		"鳥取",
	"島根",
	'岡山',
	'広島',
	'山口',
	'徳島',
  '香川',
  '愛媛',
  '高知',
  '福岡',
		"佐賀",
	"長崎",
	'熊本',
	'大分',
	'宮崎',
	'鹿児島',
  '沖縄'
);

var num = [];
var min = 0;
	var max = 46;
	var a = Math.floor(Math.random() * (max + 1 - min)) + min;
	var x = parseInt(a);
function mondai(){
	x = parseInt(Math.floor(Math.random() * (max + 1 - min)) + min);
	if(num.indexOf(x)==-1){
	//document.getElementById("question").src = map[x];
	document.getElementById("question").src = map[x];
	}
	//document.getElementById("question").innerHTML = map[x];
}
function nihon(){
	//document.getElementById("hint").src = japan[x];
	document.getElementById("hint").src = japan[x];
	//document.getElementById("hint").innerHTML = japan[x];
	}
function kaitou (){
	document.getElementById("kotae").innerHTML=answer[x];
}
function reset (){
	num.push(x);
	document.getElementById("suuji").innerHTML="問題数："+num.length;
	document.getElementById("suuji2").innerHTML="県番号（チェック用メモ）"+"<br>"+num;
	document.getElementById("question").src = "";
	document.getElementById("hint").src = "";
	document.getElementById("kotae").innerHTML="";
	
}
