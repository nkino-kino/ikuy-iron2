window.chartColors = {
  red: "#FF0000",
  blue: "#000DFF",
	green: "#00FF29"
};

var color = Chart.helpers.color;

var T1 = 0;
var T1val = [];
var X1val = [];
var Y1val = [];

var T2 = 0;
var T2val = [];
var X2val = [];
var Y2val = [];

var T3 = 0;
var T3val = [];
var X3val = [];
var Y3val = [];

var v=100
var ang1=45
var ang2=75
var ang3=90
var i=0;

for (T1=0; T1<11; T1=T1+0.2){
	var X1pos = T1*(v/3.6)*(Math.cos(ang1*(Math.PI)/180));
	var Y1pos = (v/3.6)*(Math.sin(ang1*(Math.PI)/180))*T1-(4.9*T1*T1);
	if (Y1pos>0){
	T1val.push(T1.toFixed(2));
	X1val.push(X1pos.toFixed(2));
	Y1val.push(Y1pos.toFixed(2));
	}}

for (T2=0; T2<11; T2=T2+0.2){
	var X2pos = T2*(v/3.6)*(Math.cos(ang2*(Math.PI)/180));
	var Y2pos = (v/3.6)*(Math.sin(ang2*(Math.PI)/180))*T2-(4.9*T2*T2);
	if (Y2pos>0){
	T2val.push(T2.toFixed(2));
	X2val.push(X2pos.toFixed(2));
	Y2val.push(Y2pos.toFixed(2));
	}}
for (T3=0; T3<11; T3=T3+0.2){
	var X3pos = T3*(v/3.6)*(Math.cos(ang3*(Math.PI)/180));
	var Y3pos = (v/3.6)*(Math.sin(ang3*(Math.PI)/180))*T3-(4.9*T3*T3);
	if (Y3pos>0){
	T3val.push(T3.toFixed(2));
	X3val.push(X3pos.toFixed(2));
	Y3val.push(Y3pos.toFixed(2));
	}}

function plot (){
var scatter_data = {
 datasets:[
{
    label: "100キロ-45度",
    borderColor: window.chartColors.red,
    backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
    pointRadius: 10,
	data: [{x: X1val[i],y: Y1val[i]},{x: X1val[i+1],y: Y1val[i+1]},{x: X1val[i+2],y: Y1val[i+2]}]
	},
{
    label: "100キロ-75度",
    borderColor: window.chartColors.blue,
    backgroundColor: color(window.chartColors.blue).alpha(0.5).rgbString(),
    pointRadius: 10,
	data: [{x: X2val[i],y: Y2val[i]},{x: X2val[i+1],y: Y2val[i+1]},{x: X2val[i+2],y: Y2val[i+2]}]
	
},
{
    label: "100キロ-90度",
    borderColor: window.chartColors.green,
    backgroundColor: color(window.chartColors.green).alpha(0.5).rgbString(),
    pointRadius: 10,
	data: [{x: X3val[i],y: Y3val[i]},{x: X3val[i+1],y: Y3val[i+1]},{x: X3val[i+2],y: Y3val[i+2]}]
}
 ]}
var Tnum=Math.max(T1val.length, T2val.length, T3val.length);
	
if (i<Tnum){
i=i+1;}
	else{i=0}


	/*data: [
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
}]}
*/
var ctx = document.getElementById('canvas').getContext('2d');
window.myScatter = Chart.Scatter(ctx, {
data: scatter_data,
	
  options:{
animation:false,
    title: {
      display: true,
		animations:false,
      text: "Chart.js Scatter Chart"
		
    },
//responsive: false,

            scales: {                          // 軸設定
                xAxes: [                           // Ｘ軸設定
                    {

                        ticks: {                       // 目盛り
                            beginAtZero: true,
                            max: 80,                       // 最大値
                            fontColor: "blue",             // 目盛りの色
                            fontSize: 14                   // フォントサイズ
						}
                    }
                ],
                yAxes: [                           // Ｙ軸設定
					{
                        ticks: {                       // 目盛り
                            beginAtZero: true,
                            max: 40,                       // 最大値
                            fontColor: "blue",             // 目盛りの色
                            fontSize: 14                   // フォントサイズ
                        }
                    }
                ]
            }
  }
	
})}
setInterval(plot,200)



// JavaScript Document