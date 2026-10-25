// GSAP demo
function runGsap() {
  const box = document.querySelector('.gsap-box');
  if (!box || typeof gsap === 'undefined') return;
  gsap.killTweensOf(box);
  gsap.fromTo(box, 
    { x: -120, rotation: -180, opacity: 0 },
    { x: 0, rotation: 0, opacity: 1, duration: 1.2, ease: "back.out(1.4)" }
  );
}

// Anime.js demo
function runAnime() {
  const dots = document.querySelectorAll('#anime-demo .dots span');
  if (!dots.length || typeof anime === 'undefined') return;
  anime({
    targets: dots,
    translateY: [-24, 0],
    opacity: [0, 1],
    delay: anime.stagger(80),
    duration: 700,
    easing: 'easeOutElastic(1, .6)',
    loop: false
  });
}

// Motion-style hover/click (vanilla approximation)
const motionBox = document.getElementById('motion-box');
if (motionBox) {
  motionBox.addEventListener('mouseenter', () => {
    motionBox.style.transform = 'scale(1.08)';
    motionBox.style.transition = 'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)';
  });
  motionBox.addEventListener('mouseleave', () => {
    motionBox.style.transform = 'scale(1)';
  });
  motionBox.addEventListener('mousedown', () => {
    motionBox.style.transform = 'scale(0.94)';
  });
  motionBox.addEventListener('mouseup', () => {
    motionBox.style.transform = 'scale(1.08)';
  });
}

// Replay buttons
document.querySelectorAll('.replay').forEach(btn => {
  btn.addEventListener('click', () => {
    const demo = btn.dataset.demo;
    if (demo === 'gsap') runGsap();
    if (demo === 'anime') runAnime();
  });
});

// Initial run
window.addEventListener('load', () => {
  setTimeout(runGsap, 300);
  setTimeout(runAnime, 600);
});

// Simple copy on pre click (optional polish)
document.querySelectorAll('pre').forEach(pre => {
  pre.style.cursor = 'pointer';
  pre.title = 'Click to copy';
  pre.addEventListener('click', () => {
    const text = pre.innerText;
    navigator.clipboard.writeText(text).then(() => {
      const orig = pre.style.borderColor;
      pre.style.borderColor = 'var(--accent)';
      setTimeout(() => pre.style.borderColor = orig, 600);
    });
  });
});
