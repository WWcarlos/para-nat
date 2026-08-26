const openBtn = document.getElementById("openBtn");
const content = document.getElementById("content");
const finalMessage = document.getElementById("finalMessage");
const revealBtn = document.getElementById("revealBtn");
const hearts = document.querySelector(".hearts");

openBtn.addEventListener("click", () => {
  content.classList.remove("hidden");
  openBtn.textContent = "Abierto ❤️";
  openBtn.disabled = true;
  document.getElementById("content").scrollIntoView({behavior:"smooth"});
  burstHearts(22);

  const music = document.getElementById("music");
  if (music) music.play().catch(() => {});
});

revealBtn.addEventListener("click", () => {
  finalMessage.classList.remove("hidden");
  revealBtn.style.display = "none";
  burstHearts(35);
});

function burstHearts(amount){
  for(let i=0;i<amount;i++){
    const h=document.createElement("span");
    h.className="float-heart";
    h.textContent=Math.random()>.2?"♥":"♡";
    h.style.left=(Math.random()*100)+"%";
    h.style.fontSize=(12+Math.random()*22)+"px";
    h.style.animationDuration=(3+Math.random()*4)+"s";
    h.style.animationDelay=(Math.random()*1.5)+"s";
    hearts.appendChild(h);
    setTimeout(()=>h.remove(),8000);
  }
}

/*
  CAMBIA SOLO ESTA FECHA si el 3 de febrero corresponde a otro año.
  Formato: año, mes-1, día.
  Ejemplo: 2025, 1, 3 = 3 de febrero de 2025.
*/
const startDate = new Date(2026, 1, 3, 0, 0, 0);

function updateCounter(){
  const now = new Date();
  let diff = now - startDate;
  if(diff < 0) diff = 0;

  const second = 1000;
  const minute = second*60;
  const hour = minute*60;
  const day = hour*24;

  const days = Math.floor(diff/day);
  const hours = Math.floor((diff%day)/hour);
  const minutes = Math.floor((diff%hour)/minute);
  const seconds = Math.floor((diff%minute)/second);

  document.getElementById("days").textContent=days;
  document.getElementById("hours").textContent=String(hours).padStart(2,"0");
  document.getElementById("minutes").textContent=String(minutes).padStart(2,"0");
  document.getElementById("seconds").textContent=String(seconds).padStart(2,"0");
}
updateCounter();
setInterval(updateCounter,1000);
