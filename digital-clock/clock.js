let hour = document.getElementById("hours");
let second = document.getElementById("seconds");
let minute = document.getElementById("minutes");
let ampmel = document.getElementById("ampm");
function newClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hour.innerText = h;
  minute.innerText = m;
  second.innerText = s;
  ampmel.innerText = ampm;

  setTimeout(() => {
    newClock();
  }, 1000);
}
newClock();
