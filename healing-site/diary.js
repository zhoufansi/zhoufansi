function load(){

  let data = JSON.parse(localStorage.getItem("emotionOS") || "[]");

  let list = document.getElementById("list");

  list.innerHTML = "";

  data.slice().reverse().forEach(item => {

    let div = document.createElement("div");
    div.className = "card";

    div.onclick = function(){

      // ⭐高亮对应图片（关键）
      document.querySelectorAll("img").forEach(img=>{
        img.style.outline = "none";

        if(item.images?.includes(img.src)){
          img.style.outline = "4px solid #ff6fae";
          img.style.transform = "scale(1.05)";
        }
      });
    };

    div.innerHTML = `
      <div>💗 ${item.mood}</div>
      <div>${item.text}</div>
      ${item.images?.length ? `<img src="${item.images[0]}" width="120">` : ""}
      <div>${item.time}</div>
    `;

    list.appendChild(div);
  });
}

load();