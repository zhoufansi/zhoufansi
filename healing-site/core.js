/* =========================
   🌈 Emotion OS 4.0 CORE FIX（最终统一版）
========================= */

const KEY = "emotionOS";

/* =========================
   🧠 DB
========================= */

function getDB(){
  let data = localStorage.getItem(KEY);
  if(!data) return [];
  try{
    return JSON.parse(data);
  }catch(e){
    return [];
  }
}

function saveDB(db){
  localStorage.setItem(KEY, JSON.stringify(db));
}

/* =========================
   🌟 创建统一情绪记录
========================= */

function createEmotion(mood, text, images=[]){

  let db = getDB();

  db.push({
    id: Date.now(),
    mood: mood || "unknown",
    text: text || "",
    images: Array.isArray(images) ? images : [],
    time: new Date().toLocaleString()
  });

  saveDB(db);
}

/* =========================
   🌸 初始化（防止空）
========================= */

(function init(){
  if(!localStorage.getItem(KEY)){
    localStorage.setItem(KEY, JSON.stringify([]));
  }
})();

/* =========================
   🌙 Mood 页面兼容函数
========================= */

let moodNow = "calm";
let selectedImage = null;

function setMood(type){
  moodNow = type;
  clearFX();
  if(window[type]) window[type]();
}

function save(){

  let text = document.getElementById("text")?.value || "";

  createEmotion(
    moodNow,
    text,
    selectedImage ? [selectedImage] : []
  );

  alert("已保存到 Emotion OS 4.0");
}

/* =========================
   🌈 Gallery 点击绑定（关键修复）
========================= */

function bindGalleryImage(imgSrc){
  selectedImage = imgSrc;
}

/* =========================
   🌪 FX工具
========================= */

function layer(){
  const fx = document.getElementById("fx");
  fx.innerHTML = "";
  return fx;
}

function clearFX(){
  layer();
}