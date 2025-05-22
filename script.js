const character = document.querySelector('.character');
const love = document.querySelector('.love');

const heartMap = [
  "00100100",
  "01111110",
  "11111111",
  "11111111",
  "01111110",
  "00111100",
  "00011000",
  "00001000"
];

const size = 40;
const originX = 70; // centro do boneco
const originY = 500;

let delay = 0;

// Mostra o boneco depois de 1s
setTimeout(() => {
  character.classList.add('show');

  // começa a atirar depois que o boneco aparece
  heartMap.forEach((row, y) => {
    [...row].forEach((cell, x) => {
      if (cell === "1") {
        setTimeout(() => {
          const el = document.createElement("div");
          el.className = "heart";
          el.style.left = `${originX}px`;
          el.style.top = `${originY}px`;
          love.appendChild(el);

          // força reflow
          el.offsetHeight;

          el.style.left = `${x * size}px`;
          el.style.top = `${y * size}px`;
          el.style.opacity = 1;
        }, delay);
        delay += 100;
      }
    });
  });

}, 1000);
