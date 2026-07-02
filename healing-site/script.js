const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const colors = [
  "rgba(255,182,193,0.8)", // 粉
  "rgba(255,255,180,0.8)", // 黄
  "rgba(173,216,230,0.8)", // 蓝
  "rgba(221,160,221,0.8)"  // 紫
];

let particles = [];

for(let i=0;i<80;i++){
  particles.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    r: Math.random()*3+1,
    dx: (Math.random()-0.5)*0.3,
    dy: (Math.random()-0.5)*0.3,
    color: colors[Math.floor(Math.random()*colors.length)]
  });
}

function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);

  particles.forEach(p=>{
    ctx.beginPath();
    ctx.fillStyle = p.color;
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fill();

    p.x += p.dx;
    p.y += p.dy;

    if(p.x<0 || p.x>canvas.width) p.dx *= -1;
    if(p.y<0 || p.y>canvas.height) p.dy *= -1;
  });

  requestAnimationFrame(draw);
}

draw();

window.addEventListener("resize",()=>{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});