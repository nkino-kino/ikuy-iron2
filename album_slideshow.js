var path = "images";
var image_src = new Array(
    "mother/孫と1s.jpg",
	"mother/孫と2s.jpg",
	'mother/孫と(3)s.jpg',
	'mother/ヨセミテ2s.jpg',
	'images/tomo_titi_haha.jpg',
	'images/tomo_hahato.jpg',
  'images/hahato.jpg',
  'images/wakakihaha.jpg',
  'images/wakakihaha2.jpg',
);
var legend = new Array(
	"孫と　1",
	"孫と　2",
	'孫と　3',
	'ヨセミテ（米国）',
	'孫と　4',
  "孫と　5",
  "孫と　6",
  '子と　1',
  '子と　2',
);

let num = -1;
var sliderun;
function slide_time() {
   if (num === image_src.length-1) {
          num = 0;
        } 
	else {
          num++;
        }
        document.getElementById("name").innerHTML = legend[num];
        document.getElementById("mypic").src = image_src[num];
}
function slide_run(){
sliderun=setInterval(slide_time, 10000);
}
function slide_stop(){
		clearInterval(sliderun);
	}
/*/-------------------------------------
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
}// JavaScript Document*/