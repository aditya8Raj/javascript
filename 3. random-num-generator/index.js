// Random Number Generator Program

function main() {
  // Setting Minimum Number
  let minNumber = Number(window.prompt(`Give MINIMUM Number`));
  let setMin = document.getElementById("minNum");
  setMin.textContent = minNumber;

  // Setting Maximum Number
  let maxNumber = Number(window.prompt(`Give MAXIMUM Number`));
  let setMax = document.getElementById("maxNum");
  setMax.textContent = maxNumber;

  // Generating random Number
  let randomNumber = Math.floor(
    Math.random() * (maxNumber - minNumber + 1) + minNumber
  );
  //   console.log(randomNumber);

  // Previewing the final random generated number
  let finalNUmber = document.getElementById("finalNumber");
  finalNUmber.textContent = randomNumber;
}

// Go Again button
let goAgain = document.getElementById("reset");
goAgain.onclick = function () {
  main();
};

main();
