const emojis = ['😊', '😎', '🤓', '😄', '😉', '😋', '😜', '🤪', '😇', '🥳'];
const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
document.getElementById('random-emoji').textContent = randomEmoji; 