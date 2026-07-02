const gallery = document.getElementById("gallery");

/* =========================
   🧠 图片池
========================= */
const imagePool = [
  "images/1.png",
  "images/2.png",
  "images/3.png",
  "images/4.png",
  "images/5.jpg",
  "images/6.jpg",
  "images/7.jpg",
  "images/9.jpg",
  "images/10.jpg",
  "images/11.jpg",
  "images/12.jpg",
  "images/13.jpg",
  "images/14.jpg",
  "images/15.jpg",
  "images/16.png"
];

/* =========================
   🧠 状态
========================= */
let images = JSON.parse(localStorage.getItem("myGallery")) || imagePool;

let dragging = null;
let offsetX = 0;
let offsetY = 0;

let currentImg = "";

/* =========================
   🧠 初始化
========================= */
window.onload = function () {

  if (!localStorage.getItem("myGallery")) {
    localStorage.setItem("myGallery", JSON.stringify(images));
  }

  render();
};

/* =========================
   🧠 渲染
========================= */
function render() {
  gallery.innerHTML = "";
  images.forEach(createPhoto);
}

/* =========================
   🖼 创建图片（核心）
========================= */
function createPhoto(src) {

  const img = document.createElement("img");
  img.src = src;
  img.className = "photo";

  img.style.left = Math.random() * 70 + "vw";
  img.style.top = Math.random() * 70 + "vh";

  /* 🌟 漂浮动画（保留） */
  let t = Math.random() * 100;

  function float() {
    t += 0.01;
    img.style.transform =
      `translate(${Math.sin(t) * 6}px,${Math.cos(t) * 6}px)`;
    requestAnimationFrame(float);
  }

  float();

  /* =========================
     🧠 拖拽（保留）
  ========================= */
  img.onmousedown = (e) => {
    dragging = img;
    const r = img.getBoundingClientRect();
    offsetX = e.clientX - r.left;
    offsetY = e.clientY - r.top;
    img.style.zIndex = 9999;
  };

  /* =========================
     🧠 点击逻辑（无冲突版本）
     ✔ 点击：便利贴
     ✔ Shift + 点击：删除
  ========================= */
  img.onclick = (e) => {
    e.stopPropagation();

    if (e.shiftKey) {
      removeImage(img, src);
      return;
    }

    openSticky(img);
  };

  gallery.appendChild(img);
}

/* =========================
   ❌ 删除功能（已修复）
========================= */
function removeImage(img, src) {

  img.remove();

  images = images.filter(i => i !== src);

  localStorage.setItem("myGallery", JSON.stringify(images));
}

/* =========================
   🖱 拖拽控制
========================= */
document.onmousemove = (e) => {
  if (!dragging) return;
  dragging.style.left = (e.clientX - offsetX) + "px";
  dragging.style.top = (e.clientY - offsetY) + "px";
};

document.onmouseup = () => dragging = null;

/* =========================
   📝 便利贴系统（完整保留）
========================= */
function openSticky(img) {

  currentImg = img.src;

  let old = document.getElementById("panel");
  if (old) old.remove();

  const panel = document.createElement("div");
  panel.id = "panel";

  panel.style.position = "fixed";
  panel.style.left = "60%";
  panel.style.top = "20%";
  panel.style.zIndex = 9999;

  panel.innerHTML = `
    <div style="width:240px;background:#fff7b8;padding:10px;border-radius:10px;">

      📝 情绪记录

      <input id="mood" placeholder="心情"
        style="width:100%;margin-top:8px;">

      <textarea id="text" placeholder="感受"
        style="width:100%;height:80px;margin-top:6px;"></textarea>

      <button id="saveBtn"
        style="width:100%;margin-top:6px;">保存</button>

      <button onclick="closePanel()"
        style="width:100%;margin-top:6px;">关闭</button>

    </div>
  `;

  document.body.appendChild(panel);

  document.getElementById("saveBtn").onclick = function () {

    let mood = document.getElementById("mood").value;
    let text = document.getElementById("text").value;

    let data = JSON.parse(localStorage.getItem("emotionOS") || "[]");

    data.push({
      mood: mood || "unknown",
      text: text || "",
      images: [currentImg],
      time: new Date().toLocaleString()
    });

    localStorage.setItem("emotionOS", JSON.stringify(data));

    closePanel();

    alert("已保存到 Emotion OS");
  };
}

/* =========================
   🧹 关闭面板
========================= */
function closePanel() {
  let p = document.getElementById("panel");
  if (p) p.remove();
}

/* =========================
   🎲 打乱布局
========================= */
function shuffle() {
  document.querySelectorAll(".photo").forEach(img => {
    img.style.left = Math.random() * 70 + "vw";
    img.style.top = Math.random() * 70 + "vh";
  });
}

/* =========================
   ➕ 添加图片（稳定版）
========================= */
function addImage() {

  const src = imagePool[Math.floor(Math.random() * imagePool.length)];

  images.push(src);

  localStorage.setItem("myGallery", JSON.stringify(images));

  createPhoto(src);
}