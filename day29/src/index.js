const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 600;

ctx.fillRect(210,200-40,25,100);
ctx.fillRect(350,200-40,25,100);
ctx.fillRect(252.5,200-40,80,200);

ctx.arc(290,100,50,0,2* Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle='yellow';
ctx.arc(270,80,8,Math.PI,2* Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle='green';
ctx.arc(310,80,8,Math.PI,2* Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle='red';
ctx.arc(290,100,25,2*Math.PI, Math.PI);
ctx.fill();

