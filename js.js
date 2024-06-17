let colorChangeBtn = document.querySelector("#color-btn");

let containerBackground = document.querySelector("#container");

colorChangeBtn.onclick = () => {
  let number = Math;

  let randomNumber1 = number.random() * 255;
  let redColor = number.floor(randomNumber1);

  let randomNumber2 = number.random() * 255;
  let greenColor = number.floor(randomNumber2);

  let randomNumber3 = number.random() * 255;
  let blueColor = number.floor(randomNumber3);
  colorChangeBtn.style.backgroundColor = `rgb(${redColor}, ${greenColor}, ${blueColor})`;
};
