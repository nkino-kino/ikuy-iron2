window.chartColors = {
  red: "#FF0000",
  blue: "#1A00D5"
};
var color = Chart.helpers.color;

function graph(){

var text01 = document.getElementById('velocity');
var text02 = document.getElementById('angle');
var velo=parseFloat(text01.value);
var ang=parseFloat(text02.value);

 

var T = 0;
var Tval = [];
var X1val = [];
var Y1val = [];
var X2val = [];
var Y2val = [];

for (T=0; T<11; T=T+0.2){
	var X1pos = T*(100/3.6)*(Math.cos(45*(Math.PI)/180));
	var Y1pos = (100/3.6)*(Math.sin(45*(Math.PI)/180))*T-(4.9*T*T);
	if (Y1pos>-1){
	Tval.push(T.toFixed(2));
	X1val.push(X1pos.toFixed(2));
	Y1val.push(Y1pos.toFixed(2));
	}}


for (T=0; T<11; T=T+0.2){
	var X2pos = T*(velo/3.6)*(Math.cos(ang*(Math.PI)/180));
	var Y2pos = (velo/3.6)*(Math.sin(ang*(Math.PI)/180))*T-(4.9*T*T);
	if (Y2pos>-1){
	Tval.push(T.toFixed(2));
	X2val.push(X2pos.toFixed(2));
	Y2val.push(Y2pos.toFixed(2));
	}}
var scatter_data = {
	
  datasets:[
	 {
    label: "100km-45度",
    borderColor: window.chartColors.blue,
    backgroundColor: color(window.chartColors.blue).alpha(0.2).rgbString(),
    pointRadius: 5,

	data: [
		{x: X1val[0],y: Y1val[0]},
		{x: X1val[1],y: Y1val[1]},
		{x: X1val[2],y: Y1val[2]},
		{x: X1val[3],y: Y1val[3]},
		{x: X1val[4],y: Y1val[4]},
		{x: X1val[5],y: Y1val[5]},
		{x: X1val[6],y: Y1val[6]},
		{x: X1val[7],y: Y1val[7]},
		{x: X1val[8],y: Y1val[8]},
		{x: X1val[9],y: Y1val[9]},
		{x: X1val[10],y: Y1val[10]},
		{x: X1val[11],y: Y1val[11]},
		{x: X1val[12],y: Y1val[12]},
		{x: X1val[13],y: Y1val[13]},
		{x: X1val[14],y: Y1val[14]},
		{x: X1val[15],y: Y1val[15]},
		{x: X1val[16],y: Y1val[16]},
		{x: X1val[17],y: Y1val[17]},
		{x: X1val[18],y: Y1val[18]},
		{x: X1val[19],y: Y1val[19]},
		{x: X1val[20],y: Y1val[20]},
		{x: X1val[21],y: Y1val[21]},
		{x: X1val[22],y: Y1val[22]},
		{x: X1val[23],y: Y1val[23]},
		{x: X1val[24],y: Y1val[24]},
		{x: X1val[25],y: Y1val[25]},
		{x: X1val[26],y: Y1val[26]},
		{x: X1val[27],y: Y1val[27]},
		{x: X1val[28],y: Y1val[28]},
		{x: X1val[29],y: Y1val[29]},
		{x: X1val[30],y: Y1val[30]},
		{x: X1val[31],y: Y1val[31]},
		{x: X1val[32],y: Y1val[32]},
		{x: X1val[33],y: Y1val[33]},
		{x: X1val[34],y: Y1val[34]},
		{x: X1val[35],y: Y1val[35]},
		{x: X1val[36],y: Y1val[36]},
		{x: X1val[37],y: Y1val[37]},
		{x: X1val[38],y: Y1val[38]},
		{x: X1val[39],y: Y1val[39]},
		{x: X1val[40],y: Y1val[40]},
		{x: X1val[41],y: Y1val[41]},
		{x: X1val[42],y: Y1val[42]},
		{x: X1val[43],y: Y1val[43]},
		{x: X1val[44],y: Y1val[44]},
		{x: X1val[45],y: Y1val[45]},
		{x: X1val[46],y: Y1val[46]},
		{x: X1val[47],y: Y1val[47]},
		{x: X1val[48],y: Y1val[48]},
		{x: X1val[49],y: Y1val[49]},
		{x: X1val[50],y: Y1val[50]},
		{x: X1val[51],y: Y1val[51]}]
},
{
    label: "入力値のグラフ",
    borderColor: window.chartColors.red,
    backgroundColor: color(window.chartColors.red).alpha(0.2).rgbString(),
    pointRadius: 10,

	data: [
		{x: X2val[0],y: Y2val[0]},
		{x: X2val[1],y: Y2val[1]},
		{x: X2val[2],y: Y2val[2]},
		{x: X2val[3],y: Y2val[3]},
		{x: X2val[4],y: Y2val[4]},
		{x: X2val[5],y: Y2val[5]},
		{x: X2val[6],y: Y2val[6]},
		{x: X2val[7],y: Y2val[7]},
		{x: X2val[8],y: Y2val[8]},
		{x: X2val[9],y: Y2val[9]},
		{x: X2val[10],y: Y2val[10]},
		{x: X2val[11],y: Y2val[11]},
		{x: X2val[12],y: Y2val[12]},
		{x: X2val[13],y: Y2val[13]},
		{x: X2val[14],y: Y2val[14]},
		{x: X2val[15],y: Y2val[15]},
		{x: X2val[16],y: Y2val[16]},
		{x: X2val[17],y: Y2val[17]},
		{x: X2val[18],y: Y2val[18]},
		{x: X2val[19],y: Y2val[19]},
		{x: X2val[20],y: Y2val[20]},
		{x: X2val[21],y: Y2val[21]},
		{x: X2val[22],y: Y2val[22]},
		{x: X2val[23],y: Y2val[23]},
		{x: X2val[24],y: Y2val[24]},
		{x: X2val[25],y: Y2val[25]},
		{x: X2val[26],y: Y2val[26]},
		{x: X2val[27],y: Y2val[27]},
		{x: X2val[28],y: Y2val[28]},
		{x: X2val[29],y: Y2val[29]},
		{x: X2val[30],y: Y2val[30]},
		{x: X2val[31],y: Y2val[31]},
		{x: X2val[32],y: Y2val[32]},
		{x: X2val[33],y: Y2val[33]},
		{x: X2val[34],y: Y2val[34]},
		{x: X2val[35],y: Y2val[35]},
		{x: X2val[36],y: Y2val[36]},
		{x: X2val[37],y: Y2val[37]},
		{x: X2val[38],y: Y2val[38]},
		{x: X2val[39],y: Y2val[39]},
		{x: X2val[40],y: Y2val[40]},
		{x: X2val[41],y: Y2val[41]},
		{x: X2val[42],y: Y2val[42]},
		{x: X2val[43],y: Y2val[43]},
		{x: X2val[44],y: Y2val[44]},
		{x: X2val[45],y: Y2val[45]},
		{x: X2val[46],y: Y2val[46]},
		{x: X2val[47],y: Y2val[47]},
		{x: X2val[48],y: Y2val[48]},
		{x: X2val[49],y: Y2val[49]},
		{x: X2val[50],y: Y2val[50]},
		{x: X2val[51],y: Y2val[51]}]
}
]}


var ctx = document.getElementById('canvas').getContext('2d');
window.myScatter = Chart.Scatter(ctx, {
data: scatter_data,
  option:{
    title: {
      display: true,
      text: "Chart.js Scatter Chart"
    },
  scales:{
xAxes:[{scaleLabel:{display: true,labelString:"飛距離（m）"}}],
yAxes:[{scaleLabel:{display: true,labelString:"高さ（m）"}}]
  }
  }
  }
);
}


// JavaScript Document