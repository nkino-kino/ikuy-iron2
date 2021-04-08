var n = 0;
function plot(){
/*	for (var angle=0; angle<=180; angle=angle+10){
		if (angle==180){angle=0}
		else {*/


var m = 100;
var a=[]; var b=[]; var c=[];
for(var i=0;i<=m;i++)
  {
    for(var k=0;k<=m;k++)
  {
    var a_ = i*3*Math.PI/m; 
    a.push(a_);
    
    var b_ = k*3*Math.PI/m; 
    b.push(b_);
    
    var c_ = Math.sin(a_)*Math.cos(b_); 
    c.push(c_);
  }
}
var data=[
    {
      opacity:1.0,
      x: a,
      y: b,
      z: c,
      type: 'scatter3d',
      mode: 'markers',
        marker: {
        colorscale:'Viridis',
        color: c,
        size:0.5
                }
    }
];
var layout = {
  scene:{
camera: {eye: {x: 1.5*Math.sin(n/100), y: 1.5*Math.cos(n/100), z: 1.0*Math.cos(n/100)}},
//aspectmode: "manual",
aspectratio: {
     x: 1, y: 1, z: 0.5,
    },
   xaxis: {
    nticks: 5,
    range: [0, 10],
  },
   yaxis: {
    nticks: 5,
    range: [0, 10],
  },
   zaxis: {
   nticks: 10,
   range: [-1, 1],
  }},
};
Plotly.newPlot('myDiv', data,layout);
	n=n+10;
	}
setInterval(plot,100);
	
//setInterval(plot,200)}