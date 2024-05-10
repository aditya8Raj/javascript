// Counter Program

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");

const countLabel = document.getElementById("counteLabel");

let count = 0;

// increase button logic
increaseBtn.onclick = function () {
  count++;
  countLabel.textContent = count;
};

// decrease button logic
decreaseBtn.onclick = function () {
  count--;
  countLabel.textContent = count;
};

// reset button logic
resetBtn.onclick = function () {
  count = 0;
  countLabel.textContent = count;
};
