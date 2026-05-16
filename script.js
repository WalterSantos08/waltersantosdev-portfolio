// AOS - Animate on Scroll
AOS.init({
    duration: 1000,
    once: true
});

// =========================================================
// EFEITO DIGITAÇÃO
// =========================================================

const phrases = [
    "Software Developer",
    "Data Analyst",
    "Cloud Enthusiast",
    "IT Specialist"
];

let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

function loop() {

    isEnd = false;

    const textDisplay = document.getElementById('typing-text');

    if (i < phrases.length) {

        // ESCREVENDO
        if (!isDeleting && j <= phrases[i].length) {

            currentPhrase.push(phrases[i][j]);

            j++;

            textDisplay.innerHTML = currentPhrase.join('');
        }

        // APAGANDO
        if (isDeleting && j <= phrases[i].length) {

            currentPhrase.pop();

            j--;

            textDisplay.innerHTML = currentPhrase.join('');
        }

        // TERMINOU DE ESCREVER
        if (j === phrases[i].length) {

            isEnd = true;

            isDeleting = true;
        }

        // TERMINOU DE APAGAR
        if (isDeleting && j === 0) {

            currentPhrase = [];

            isDeleting = false;

            i++;

            if (i === phrases.length) {
                i = 0;
            }
        }
    }

    const speed = isEnd
        ? 1800
        : isDeleting
            ? 45
            : 90;

    setTimeout(loop, speed);
}

// =========================================================
// PARTICLES.JS
// =========================================================

particlesJS("particles-js", {

    particles: {

        number: {
            value: 85,
            density: {
                enable: true,
                value_area: 1000
            }
        },

        // CORES METÁLICAS
        color: {
            value: [
                "#C0C7D1",
                "#9AA4B2",
                "#E2E8F0"
            ]
        },

        shape: {
            type: "circle"
        },

        // OPACIDADE MAIS ELEGANTE
        opacity: {
            value: 0.38,
            random: true
        },

        size: {
            value: 3,
            random: true
        },

        // LINHAS METÁLICAS
        line_linked: {
            enable: true,
            distance: 140,
            color: "#94A3B8",
            opacity: 0.16,
            width: 1
        },

        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false
        }
    },

    interactivity: {

        detect_on: "canvas",

        events: {

            onhover: {
                enable: true,
                mode: "grab"
            },

            onclick: {
                enable: false
            },

            resize: true
        },

        modes: {

            grab: {
                distance: 180,

                line_linked: {
                    opacity: 0.3
                }
            }
        }
    },

    retina_detect: true
});

// =========================================================
// NAVBAR SCROLL EFFECT
// =========================================================

window.addEventListener('scroll', () => {

    const nav = document.getElementById('navbar');

    if (window.scrollY > 50) {

        nav.classList.add('nav-scrolled');

    } else {

        nav.classList.remove('nav-scrolled');
    }
});

// =========================================================
// INICIAR EFEITO DIGITAÇÃO
// =========================================================

loop();