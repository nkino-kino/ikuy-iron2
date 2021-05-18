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

var T4 = 0;
var T4val = [];
var X4val = [];
var Y4val = [];

var T5 = 0;
var T5val = [];
var X5val = [];
var Y5val = [];

var v=100;
var ang1=90;
var ang2=75;
var ang3=60;
var ang4=45;
var ang5=30;

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
for (T4=0; T4<11; T4=T4+0.2){
	var X4pos = T4*(v/3.6)*(Math.cos(ang4*(Math.PI)/180));
	var Y4pos = (v/3.6)*(Math.sin(ang4*(Math.PI)/180))*T4-(4.9*T4*T4);
	if (Y4pos>0){
	T4val.push(T4.toFixed(2));
	X4val.push(X4pos.toFixed(2));
	Y4val.push(Y4pos.toFixed(2));
	}}
for (T5=0; T5<11; T5=T5+0.2){
	var X5pos = T5*(v/3.6)*(Math.cos(ang5*(Math.PI)/180));
	var Y5pos = (v/3.6)*(Math.sin(ang5*(Math.PI)/180))*T5-(4.9*T5*T5);
	if (Y5pos>0){
	T5val.push(T5.toFixed(2));
	X5val.push(X5pos.toFixed(2));
	Y5val.push(Y5pos.toFixed(2));
	}}
function plot (){
	var time = document.getElementById('time');
	time.innerHTML = (T1val[i]+" 秒");
var scatter_data = {
 datasets:[
{
    label: "90度",
    borderColor: "#FF0000",//red
    backgroundColor: color("#FF0000").alpha(0.5).rgbString(),
    pointRadius: 20,
	data: [{x: X1val[i],y: Y1val[i]},{x: X1val[i+1],y: Y1val[i+1]},{x: X1val[i+2],y: Y1val[i+2]}]
	},

{
    label: "75度",
    borderColor: "#000DFF",
    backgroundColor: color("#000DFF").alpha(0.5).rgbString(),
    pointRadius: 20,
	data: [{x: X2val[i],y: Y2val[i]},{x: X2val[i+1],y: Y2val[i+1]},{x: X2val[i+2],y: Y2val[i+2]}]
	
},
{
    label: "60度",
    borderColor: "#08FB08",//green
    backgroundColor: color("#08FB08").alpha(0.5).rgbString(),
    pointRadius: 20,
	data: [{x: X3val[i],y: Y3val[i]},{x: X3val[i+1],y: Y3val[i+1]},{x: X3val[i+2],y: Y3val[i+2]}]
},
{
    label: "45度",
    borderColor: "orange",
    backgroundColor: color("orange").alpha(0.5).rgbString(),
    pointRadius: 20,
	data: [{x: X4val[i],y: Y4val[i]},{x: X4val[i+1],y: Y4val[i+1]},{x: X4val[i+2],y: Y4val[i+2]}]
	},
{
    label: "30度",
    borderColor: "#F79B9B",//pink
    backgroundColor: color("#F79B9B").alpha(0.5).rgbString(),
    pointRadius: 20,
	data: [{x: X5val[i],y: Y5val[i]},{x: X5val[i+1],y: Y5val[i+1]},{x: X5val[i+2],y: Y5val[i+2]}]
	}
 ]}
var Tnum=Math.max(T1val.length, T2val.length, T3val.length, T4val.length, T5val.length);
	
if (i<Tnum){
i=i+1;}
	else{i=0}

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
