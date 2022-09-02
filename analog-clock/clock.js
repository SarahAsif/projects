const hours = document.querySelector(".hour");
const seconds = document.querySelector(".second");
const minutes = document.querySelector(".minute");

function setDate() {
  const HourEl = new Date().getHours();
  const SecondEl = new Date().getSeconds();
  const MinuteEl = new Date().getMinutes();

  const hourdegree = (HourEl / 12) * 360;
  const seconddegree = (SecondEl / 60) * 360;
  const minutedegree = (MinuteEl / 60) * 360;

  hours.style.transform = `rotate(${hourdegree}deg)`;
  minutes.style.transform = `rotate(${minutedegree}deg)`;
  seconds.style.transform = `rotate(${seconddegree}deg)`;
}
setInterval(setDate, 1000);
