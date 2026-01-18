/* SCROLL REVEAL */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* MODAL */
function openModal(title, desc) {
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalDesc").innerText = desc;
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

/* STAR PARTICLES */
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

let stars = [];
const STAR_COUNT = window.innerWidth < 768 ? 60 : 120;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

class Star {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.r = Math.random() * 1.5 + 0.3;
    this.s = Math.random() * 0.4 + 0.1;
    this.o = Math.random();
  }
  update() {
    this.y -= this.s;
    if (this.y < 0) {
      this.y = canvas.height;
      this.x = Math.random() * canvas.width;
    }
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${this.o})`;
    ctx.fill();
  }
}

function initStars() {
  stars = [];
  for (let i = 0; i < STAR_COUNT; i++) stars.push(new Star());
}

function animateStars() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  stars.forEach(s => {
    s.update();
    s.draw();
  });
  requestAnimationFrame(animateStars);
}

initStars();
animateStars();

