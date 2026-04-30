// Configuración de tus sonidos fijos
const mySounds = [
    { key: 'A', name: 'QUE TE ALILE', file: 'sounds/alilatetobi.ogg' },
    { key: 'S', name: 'LA NOSA', file: 'sounds/cliogrisporoto.ogg' },
    { key: 'D', name: 'COMETE ESTA', file: 'sounds/cometeestaporoto.ogg' },
    { key: 'F', name: 'RATAS', file: 'sounds/creativotobi.ogg' },
    { key: 'G', name: 'FUMADOR SERIAL', file: 'sounds/dejardefumarjason.ogg' },
    { key: 'H', name: 'DISCULPAS', file: 'sounds/disculpasneke.ogg' },
    { key: 'I', name: 'GENTE ESTRAÑA', file: 'sounds/genteestrañapedro.ogg' },
    { key: 'J', name: 'MAS TRANQUILO', file: 'sounds/mastranquiloporoto.ogg' },
    { key: 'K', name: '???', file: 'sounds/porotowtf.ogg' },
    // Agregá los que quieras siguiendo este formato
];

const container = document.getElementById('button-container');
const soundLibrary = {};

// Función para inicializar la botonera
function initBoard() {
    mySounds.forEach(sound => {
        const audio = new Audio(sound.file);
        
        // Guardamos en la librería para el teclado
        soundLibrary[sound.key] = {
            audio: audio,
            element: null
        };

        // Crear el "Pad" visual
        const btn = document.createElement('button');
        btn.className = 'sound-btn';
        btn.innerHTML = `
            <div style="font-size: 22px; color: #bc13fe;">${sound.key}</div>
            <div style="font-size: 11px; margin-top: 5px; color: #888;">${sound.name}</div>
        `;

        btn.onclick = () => playSound(sound.key);
        
        soundLibrary[sound.key].element = btn;
        container.appendChild(btn);

        // Dentro de tu función initBoard:
    btn.innerHTML = `
    <span class="key-hint">${sound.key}</span>
    <span class="sample-name">${sound.name}</span>
`;
    });
}

function playSound(key) {
    const sound = soundLibrary[key.toUpperCase()];
    if (sound) {
        sound.audio.currentTime = 0;
        sound.audio.play();

        sound.element.classList.add('playing');
        
        // El efecto visual dura lo que el usuario quiera o un mínimo de 150ms
        setTimeout(() => sound.element.classList.remove('playing'), 150);
    }
}

// Escuchar teclado
window.addEventListener('keydown', (e) => {
    playSound(e.key);
});

// Arrancamos la app
initBoard();