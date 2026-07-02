let moodNow = "calm";

/* =========================
   🎯 主入口
========================= */
function setMood(type){

  clearEffects();
  resetScene();

  moodNow = type;

  switch(type){

    case "calm":
      calm();
      break;

    case "sad":
      sad();
      break;

    case "happy":
      happy();
      break;

    case "relax":
      bubbles();
      break;

    case "tired":
      tired();
      break;

    case "think":
      think();
      break;
  }
}

/* =========================
   🌿 calm（增强呼吸光）
========================= */
function calm(){

  let layer = document.createElement("div");
  layer.className="fx";
  layer.style.position="fixed";
  layer.style.width="100%";
  layer.style.height="100%";
  layer.style.zIndex=999;

  layer.style.background =
    "radial-gradient(circle at center, rgba(120,220,200,0.45), rgba(255,255,255,0))";

  layer.style.animation="breath 4s ease-in-out infinite";

  document.body.appendChild(layer);

  for(let i=0;i<18;i++){
    let p=document.createElement("div");
    p.className="fx";

    p.style.position="fixed";
    p.style.width="6px";
    p.style.height="6px";
    p.style.borderRadius="50%";
    p.style.background="rgba(120,255,210,0.6)";
    p.style.left=Math.random()*100+"vw";
    p.style.top=Math.random()*100+"vh";
    p.style.zIndex=999;
    p.style.animation="float 6s ease-in-out infinite";

    document.body.appendChild(p);
  }
}

/* =========================
   😢 sad（增强雨+雾）
========================= */
function sad(){

  let dark=document.createElement("div");
  dark.className="fx";
  dark.style.position="fixed";
  dark.style.width="100%";
  dark.style.height="100%";
  dark.style.background="rgba(30,60,120,0.25)";
  dark.style.zIndex=999;
  document.body.appendChild(dark);

  let fog=document.createElement("div");
  fog.className="fx";
  fog.style.position="fixed";
  fog.style.width="100%";
  fog.style.height="100%";
  fog.style.background="radial-gradient(circle, rgba(80,120,200,0.15), transparent 70%)";
  fog.style.zIndex=999;
  document.body.appendChild(fog);

  for(let i=0;i<160;i++){
    let r=document.createElement("div");
    r.className="fx";

    r.style.position="fixed";
    r.style.width="2px";
    r.style.height=(10+Math.random()*25)+"px";
    r.style.background="rgba(180,200,255,0.75)";
    r.style.left=Math.random()*100+"vw";
    r.style.top="-20px";
    r.style.zIndex=999;
    r.style.opacity=0.6+Math.random()*0.4;

    r.style.animation=
      `fall ${0.4+Math.random()*1}s linear infinite`;

    document.body.appendChild(r);
  }
}

/* =========================
   😊 happy（彩色爆发）
========================= */
function happy(){

  let colors=["#ff4f93","#ffd166","#7bdff2","#c77dff","#00f5d4"];

  for(let i=0;i<90;i++){
    let p=document.createElement("div");
    p.className="fx";

    p.style.position="fixed";
    p.style.width="7px";
    p.style.height="7px";
    p.style.borderRadius="50%";
    p.style.background=colors[Math.floor(Math.random()*colors.length)];
    p.style.left=Math.random()*100+"vw";
    p.style.top=Math.random()*100+"vh";
    p.style.zIndex=999;
    p.style.boxShadow="0 0 14px rgba(255,255,255,0.7)";
    p.style.animation="float 3s ease-in-out infinite";

    document.body.appendChild(p);
  }
}

/* =========================
   🌸 relax（高级泡泡）
========================= */
function bubbles(){

  for(let i=0;i<40;i++){

    let b=document.createElement("div");
    b.className="fx";

    let size=8+Math.random()*28;

    b.style.position="fixed";
    b.style.width=size+"px";
    b.style.height=size+"px";
    b.style.borderRadius="50%";

    b.style.background="rgba(255,255,255,0.85)";
    b.style.border="1px solid rgba(255,180,220,0.35)";
    b.style.boxShadow="0 0 18px rgba(255,200,220,0.3)";

    b.style.left=Math.random()*100+"vw";
    b.style.top=Math.random()*100+"vh";
    b.style.zIndex=999;

    b.style.animation="float "+(3+Math.random()*3)+"s ease-in-out infinite";

    document.body.appendChild(b);
  }
}

/* =========================
   😩 tired（漂浮灰尘）
========================= */
function tired(){

  let overlay=document.createElement("div");
  overlay.className="fx";
  overlay.style.position="fixed";
  overlay.style.width="100%";
  overlay.style.height="100%";
  overlay.style.background="rgba(50,50,50,0.15)";
  overlay.style.zIndex=999;
  document.body.appendChild(overlay);

  for(let i=0;i<35;i++){
    let p=document.createElement("div");
    p.className="fx";

    p.style.position="fixed";
    p.style.width="6px";
    p.style.height="6px";
    p.style.borderRadius="50%";
    p.style.background="rgba(200,200,200,0.5)";
    p.style.boxShadow="0 0 10px rgba(200,200,200,0.2)";
    p.style.left=Math.random()*100+"vw";
    p.style.top=Math.random()*100+"vh";
    p.style.zIndex=999;
    p.style.animation="float 7s ease-in-out infinite";

    document.body.appendChild(p);
  }
}

/* =========================
   🧠 think（紫色思维）
========================= */
function think(){

  let bg=document.createElement("div");
  bg.className="fx";
  bg.style.position="fixed";
  bg.style.width="100%";
  bg.style.height="100%";
  bg.style.background="radial-gradient(circle, rgba(160,120,255,0.25), transparent 70%)";
  bg.style.zIndex=999;
  document.body.appendChild(bg);

  for(let i=0;i<25;i++){
    let p=document.createElement("div");
    p.className="fx";

    p.style.position="fixed";
    p.style.width="6px";
    p.style.height="6px";
    p.style.borderRadius="50%";
    p.style.background="#b388ff";
    p.style.left=Math.random()*100+"vw";
    p.style.top=Math.random()*100+"vh";
    p.style.zIndex=999;
    p.style.animation="float 4s ease-in-out infinite";

    document.body.appendChild(p);
  }
}

/* =========================
   🧹 清理系统
========================= */
function clearEffects(){
  document.querySelectorAll(".fx").forEach(e=>e.remove());
}

function resetScene(){
  document.body.style.backgroundColor="";
}

/* =========================
   💾 保存（兼容Emotion OS）
========================= */
function save(){

  let data = JSON.parse(localStorage.getItem("emotionOS") || "[]");

  data.push({
    mood: moodNow,
    text: document.getElementById("text").value,
    time: new Date().toLocaleString()
  });

  localStorage.setItem("emotionOS", JSON.stringify(data));

  alert("已记录到 Emotion OS");
}