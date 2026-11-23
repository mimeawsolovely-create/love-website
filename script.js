const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const actions = document.getElementById("actions");
const hint = document.getElementById("hint");
const success = document.getElementById("success");
const closeButton = document.getElementById("closeButton");

let dodgeCount = 0;

function moveNoButton() {
  const area = actions.getBoundingClientRect();
  const button = noButton.getBoundingClientRect();
  const padding = 4;
  const maxX = Math.max(padding, area.width - button.width - padding);
  const maxY = 74;
  const x = padding + Math.random() * Math.max(0, maxX - padding);
  const y = (Math.random() * 2 - 1) * maxY;

  // Switch to fixed positioning so the button can dodge without being clipped.
  noButton.style.position = "fixed";
  const left = Math.min(window.innerWidth - button.width - 8,
                        Math.max(8, area.left + x));
  const top = Math.min(window.innerHeight - button.height - 8,
                       Math.max(8, area.top + area.height / 2 + y - button.height / 2));
  noButton.style.left = `${left}px`;
  noButton.style.top = `${top}px`;
  noButton.style.transform = `rotate(${Math.random() * 12 - 6}deg)`;
  dodgeCount++;
  hint.textContent = dodgeCount < 3 ? "อุ๊ย! จับเราให้ได้ก่อนสิ 🙈" : "แงงง ปุ่มนี้ขี้อายจัง ♡";
}

noButton.addEventListener("pointerenter", (event) => {
  if (event.pointerType === "mouse") moveNoButton();
});
noButton.addEventListener("pointerdown", (event) => {
  // On touch screens, move away on the first tap so the button cannot be selected.
  if (event.pointerType === "touch" || event.pointerType === "pen") {
    event.preventDefault();
    moveNoButton();
  }
});
noButton.addEventListener("click", (event) => {
  event.preventDefault();
  moveNoButton();
});

function hearts() {
  const symbols = ["♡", "♥", "💗", "💕", "✧"];
  for (let i = 0; i < 24; i++) {
    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.top = `${55 + Math.random() * 40}vh`;
    heart.style.fontSize = `${16 + Math.random() * 20}px`;
    heart.style.animationDelay = `${Math.random() * .65}s`;
    document.body.appendChild(heart);
    heart.addEventListener("animationend", () => heart.remove());
  }
}

yesButton.addEventListener("click", () => {
  success.classList.remove("hidden");
  hearts();
});
closeButton.addEventListener("click", () => success.classList.add("hidden"));
success.addEventListener("click", (event) => {
  if (event.target === success) success.classList.add("hidden");
});
window.addEventListener("resize", () => {
  // Keep the dodging button on-screen after rotation/resizing.
  if (noButton.style.position === "fixed") {
    const r = noButton.getBoundingClientRect();
    noButton.style.left = `${Math.max(8, Math.min(r.left, window.innerWidth - r.width - 8))}px`;
    noButton.style.top = `${Math.max(8, Math.min(r.top, window.innerHeight - r.height - 8))}px`;
  }
});
