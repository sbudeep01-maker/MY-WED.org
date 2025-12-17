/* --- Variables & Reset --- */
:root {
    --bg: #050505;
    --text: #ffffff;
    --accent: #00f3ff; /* Neon Cyan */
    --secondary: #bd00ff; /* Neon Purple */
    --cursor-size: 20px;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    cursor: none; /* Hide default cursor */
}

body {
    background-color: var(--bg);
    color: var(--text);
    font-family: 'Space Grotesk', sans-serif;
    overflow-x: hidden;
}

/* --- Preloader --- */
.preloader {
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100vh;
    background: #000;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: opacity 0.5s ease;
}

.loader-text {
    font-family: monospace;
    color: var(--accent);
    margin-bottom: 10px;
    animation: blink 1s infinite;
}

.progress-bar {
    width: 200px;
    height: 2px;
    background: #222;
}

.progress {
    width: 0%;
    height: 100%;
    background: var(--accent);
    transition: width 0.5s;
}

/* --- Custom Cursor --- */
.cursor {
    position: fixed;
    width: 8px; height: 8px;
    background: var(--accent);
    border-radius: 50%;
    z-index: 9999;
    pointer-events: none;
    transform: translate(-50%, -50%);
}

.cursor-follower {
    position: fixed;
    width: 40px; height: 40px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    z-index: 9998;
    pointer-events: none;
    transform: translate(-50%, -50%);
    transition: transform 0.1s;
}

/* --- Particles Background --- */
#particles-js {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: var(--bg);
}

/* --- Navigation --- */
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    padding: 2rem 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
    mix-blend-mode: difference;
}

.logo {
    font-weight: 700;
    font-size: 1.5rem;
    letter-spacing: 2px;
}

.dot { color: var(--accent); }

.nav-links {
    display: flex;
    gap: 3rem;
    list-style: none;
}

.nav-links a {
    text-transform: uppercase;
    font-size: 0.9rem;
    letter-spacing: 1px;
    position: relative;
}

.nav-links a::after {
    content: '';
    position: absolute;
    width: 0; height: 1px;
    bottom: -5px; left: 0;
    background: var(--accent);
    transition: 0.3s;
}

.nav-links a:hover::after { width: 100%; }

/* --- Hero Section --- */
header {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.hero-content {
    text-align: center;
    z-index: 2;
}

.hero-subtitle {
    font-family: monospace;
    color: var(--accent);
    margin-bottom: 1rem;
}

/* Glitch Effect */
.glitch-text {
    font-size: 5rem;
    font-weight: 700;
    position: relative;
    color: white;
}

.glitch-text::before, .glitch-text::after {
    content: attr(data-text);
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
}

.glitch-text::before {
    left: 2px;
    text-shadow: -1px 0 var(--secondary);
    clip-path: inset(44% 0 61% 0);
    animation: glitch-anim 2s infinite linear alternate-reverse;
}

.glitch-text::after {
    left: -2px;
    text-shadow: -1px 0 var(--accent);
    clip-path: inset(50% 0 30% 0);
    animation: glitch-anim 2s infinite linear alternate-reverse;
}

@keyframes glitch-anim {
    0% { clip-path: inset(10% 0 90% 0); }
    20% { clip-path: inset(60% 0 10% 0); }
    40% { clip-path: inset(20% 0 50% 0); }
    60% { clip-path: inset(80% 0 5% 0); }
    100% { clip-path: inset(30% 0 40% 0); }
}

.btn-primary {
    display: inline-block;
    margin-top: 2rem;
    padding: 1rem 2rem;
    border: 1px solid var(--accent);
    color: var(--accent);
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: 0.3s;
}

.btn-primary:hover {
    background: var(--accent);
    color: #000;
    box-shadow: 0 0 20px var(--accent);
}

/* --- Projects (3D Cards) --- */
.section { padding: 8rem 10%; }

.section-header {
    margin-bottom: 4rem;
    display: flex;
    align-items: center;
    gap: 20px;
}

.section-header .line {
    height: 1px;
    flex-grow: 1;
    background: rgba(255,255,255,0.1);
}

.project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px;
}

.project-card {
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.05);
    padding: 3rem;
    border-radius: 4px;
    transform-style: preserve-3d;
    transform: perspective(1000px);
}

.card-content {
    transform: translateZ(20px);
}

.card-number {
    font-size: 4rem;
    font-weight: 700;
    color: rgba(255,255,255,0.05);
    margin-bottom: 1rem;
}

.project-card h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
}

.project-card p {
    color: #888;
    margin-bottom: 2rem;
    font-family: monospace;
}

/* --- Footer --- */
footer {
    padding: 4rem;
    text-align: center;
    border-top: 1px solid rgba(255,255,255,0.1);
}

.social-links {
    font-size: 2rem;
    margin: 2rem 0;
    display: flex;
    justify-content: center;
    gap: 30px;
}

.social-links a:hover { color: var(--accent); }

/* Mobile */
@media (max-width: 768px) {
    .glitch-text { font-size: 2.5rem; }
    .navbar { padding: 1.5rem; }
    .nav-links { display: none; }
    .cursor, .cursor-follower { display: none; }
    * { cursor: auto; }
}
