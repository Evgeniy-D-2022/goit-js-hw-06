const btnChangeColor = document.querySelector('.change-color');
const bodyChangeBackground = document.body;
const spanColor = document.querySelector('.color');

btnChangeColor.addEventListener('click', btnClick);

function btnClick() {
  bodyChangeBackground.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = getRandomHexColor();

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
};