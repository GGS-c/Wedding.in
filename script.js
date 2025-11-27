// Countdown Timer Logic
const weddingDate = new Date("Dec 29, 2025 19:00:00").getTime();  

const timerFunc = setInterval(function() {
  const now = new Date().getTime();
  const diff = weddingDate - now;

  const daysElement = document.getElementById("days");
  if (!daysElement) {
    clearInterval(timerFunc);
    return;
  }

  if (diff <= 0) {
    document.getElementById("timer").innerHTML = "<div style='color: var(--color-primary); font-size:1.5rem;'>🎉 **शुभ विवाह संपन्न!** आपले आशीर्वाद आवश्यक आहेत! 🎉</div>";
    clearInterval(timerFunc);
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = String(days).padStart(2, '0');
  document.getElementById("hours").innerText = String(hours).padStart(2, '0');
  document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
  document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
}, 1000);

// Gallery/Lightbox Logic
const gallery = document.getElementById('galleryGrid');
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');

if (gallery) {
  gallery.addEventListener('click', (e) => {
    const img = e.target.closest('img');
    if (!img) return;
    lightboxImg.src = img.src;
    lightbox.style.display = 'flex';
  });
}

if (lightbox) {
  lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
    lightboxImg.src = '';
  });
}

// Smooth Scroll for Nav Links
document.querySelectorAll('.nav a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    e.preventDefault();
    document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});