// 1. Preloader Logic
window.addEventListener('load', () => {
    const progressBar = document.querySelector('.progress');
    const preloader = document.querySelector('.preloader');
    
    // Simulate loading
    progressBar.style.width = '100%';
    
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
            // Trigger GSAP Hero Animation after load
            initHeroAnim();
        }, 500);
    }, 1500);
});

// 2. Custom Cursor Logic
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1 });
    gsap.to(follower, { x: e.clientX, y: e.clientY, duration: 0.3 });
});

// Magnetic Effect for Buttons
const magnets = document.querySelectorAll('.magnetic');
magnets.forEach((magnet) => {
    magnet.addEventListener('mousemove', (e) => {
        const rect = magnet.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        gsap.to(magnet, { x: x * 0.3, y: y * 0.3, duration: 0.3 });
        gsap.to(cursor, { scale: 1.5, duration: 0.2 });
        gsap.to(follower, { scale: 1.5, borderColor: '#00f3ff', duration: 0.2 });
    });
    
    magnet.addEventListener('mouseleave', () => {
        gsap.to(magnet, { x: 0, y: 0, duration: 0.3 });
        gsap.to(cursor, { scale: 1, duration: 0.2 });
        gsap.to(follower, { scale: 1, borderColor: 'rgba(255,255,255,0.5)', duration: 0.2 });
    });
});

// 3. Hero Animations (GSAP)
function initHeroAnim() {
    const tl = gsap.timeline();
    
    tl.from('.hero-subtitle', { y: -20, opacity: 0, duration: 1 })
      .from('.glitch-text', { scale: 0.9, opacity: 0, duration: 1, ease: "power4.out" }, "-=0.5")
      .from('.typewriter', { y: 20, opacity: 0, duration: 0.8 }, "-=0.5")
      .from('.btn-primary', { y: 20, opacity: 0, duration: 0.8 }, "-=0.6")
      .from('.navbar', { y: -50, opacity: 0, duration: 1 }, "-=1");
}

// 4. Initialize Particles.js (The Neural Network Background)
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
    "color": { "value": "#ffffff" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.5, "random": false },
    "size": { "value": 3, "random": true },
    "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 },
    "move": { "enable": true, "speed": 2, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": { "enable": true, "mode": "repulse" },
      "onclick": { "enable": true, "mode": "push" },
      "resize": true
    },
    "modes": {
      "repulse": { "distance": 100, "duration": 0.4 }
    }
  },
  "retina_detect": true
});