// alert("Hello world");

function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  let amPm = hours >= 12 ? "PM" : "AM";
  let displayHours = hours % 12;
  displayHours = displayHours ? displayHours : 12;

  const clock = `${hours}:${minutes}:${seconds} ${amPm}`;
  //   console.log(clock);

  document.getElementById("clock").textContent = clock;
}

function formatTimeComponent(timeComponent) {
  return timeComponent < 10 ? `0${timeComponent}` : timeComponent;
}

updateClock();

setInterval(updateClock, 1000);
