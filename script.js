// Configuración de tus sonidos fijos
const mySounds = [
    { key: 'A', name: 'KICK', file: 'sounds/kick.mp3' },
    { key: 'S', name: 'SNARE', file: 'sounds/snare.mp3' },
    { key: 'D', name: 'TRAP-HAT', file: 'sounds/hihat.mp3' },
    { key: 'F', name: '808-BASS', file: 'sounds/808.mp3' },
    { key: 'G', name: 'MI-TAG', file: 'sounds/tag-enzo.mp3' },
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