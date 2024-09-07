function showConfetti() {
  const confetti = document.getElementById("confetti");
  confetti.innerHTML = "";
  for (let i = 0; i < 100; i++) {
    const div = document.createElement("div");
    div.className = "confetti-piece";
    div.style.left = `${Math.random() * 100}%`;
    div.style.top = `${Math.random() * 100}%`;
    div.style.backgroundColor = getRandomColor();
    confetti.appendChild(div);
  }
}

function getRandomColor() {
  const colors = [
    "#ff69b4",
    "#ff6347",
    "#ffd700",
    "#32cd32",
    "#00bfff",
    "#ba55d3",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}
function resizeCanvas() {
  const canvas = document.getElementById("fireworksCanvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener("resize", resizeCanvas);
