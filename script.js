// 1. Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// 2. Smooth Scroll Animation (Intersection Observer)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

// Target all elements with the class 'hidden'
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// 3. Dynamic Console Greeting
console.log("%c SBU Deep Maker ", "background: #222; color: #bada55; font-size: 20px; padding: 10px; border-radius: 5px;");
console.log("Welcome to the console! If you're looking for bugs, I hope you only find features.");