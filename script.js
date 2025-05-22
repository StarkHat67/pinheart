const love = document.querySelector('.love');

// Formato de coração com "pixels"
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

heartMap.forEach((row, y) => {
  [...row].forEach((cell, x) => {
    if (cell === "1") {
      const el = document.createElement("div");
      el.className = "heart";
      el.style.left = `${x * size}px`;
      el.style.top = `${y * size}px`;
      love.appendChild(el);
    }
  });
});
