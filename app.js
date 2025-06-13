const randomColour = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return { r, g, b };
};

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const { r, g, b } = randomColour();
  const changeBackground = `rgb(${r}, ${g}, ${b})`;
  document.body.style.backgroundColor = changeBackground;
});
