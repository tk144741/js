const text = document.querySelector('#colorText');
const color = document.querySelector('#colorPicker');

const colorBg = () => {

  console.log("call colorBg")
  /* 選択した色を背景色に */
  document.body.style.backgroundColor = color.value;

  if(color.value === '#ffffff') {
  text.textContent = `color code : ${color.value} (white)`;
  }
  else if (color.value === "#000000") {
    text.textContent = `color code : ${color.value} (black)`;
  }
  else {
    text.textContent = `color code : ${color.value}`;
  }
}

color.addEventListener('input', colorBg);
