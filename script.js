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

let delay = 0;

heartMap.forEach((row, y) => {
  [...row].forEach((cell, x) => {
    if (cell === "1") {
      const el = document.createElement("div");
      el.className = "heart";
      el.style.left = `20px`; // começa do personagem
      el.style.top = `300px`;
      love.appendChild(el);

      setTimeout(() => {
        el.style.transition = "all 0.6s ease";
        el.style.left = `${x * size}px`;
        el.style.top = `${y * size}px`;
        el.style.opacity = 1;
      }, delay);

      delay += 100; // controla tempo entre "tiros"
    }
  });
});
