const heart = document.querySelector('.heart');
// Array de frases
const frases = [
    "Te quiero mucho ❤️",
    "Eres lo mejor que me ha pasado 🌟",
    "Mi corazón late por ti 💓",
    "Eres mi razón de ser 🥰",
    "Contigo todo es mejor 💖",
    "Eres mi sueño hecho realidad 🌈",
    "Siempre estaré a tu lado 🤗",
    "Eres mi todo 💕",
    "Nunca dejes de brillar ✨",
    "Eres mi felicidad 😊"
];

// Función para seleccionar una frase aleatoria
function obtenerFraseAleatoria() {
    const indice = Math.floor(Math.random() * frases.length);
    return frases[indice];
}

// Mostrar la frase aleatoria en el elemento <p>
const fraseElement = document.getElementById('frase');
fraseElement.textContent = obtenerFraseAleatoria();

// Opcional: Cambiar la frase cada cierto tiempo (por ejemplo, cada 5 segundos)
setInterval(() => {
    fraseElement.textContent = obtenerFraseAleatoria();
}, 5000); // Cambia la frase cada 5000 milisegundos (5 segundos)
heart.addEventListener('click', () => {
    heart.style.animationPlayState = heart.style.animationPlayState === 'paused' ? 'running' : 'paused';
});

// Configuración de particles.js
particlesJS("particles-js", {
    particles: {
        number: {
            value: 80, // Número de partículas
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#ff0000" // Color de las partículas (rojo para combinar con el corazón)
        },
        shape: {
            type: "circle", // Forma de las partículas
            stroke: {
                width: 0,
                color: "#000000"
            }
        },
        opacity: {
            value: 1,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 5, // Tamaño de las partículas
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ff0000", // Color de las líneas entre partículas
            opacity: 0.7,
            width: 1
        },
        move: {
            enable: true,
            speed: 10, // Velocidad de movimiento de las partículas
            direction: "none",
            random: false,
            straight: false,
            out_mode: "bounce",
            bounce: true,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});