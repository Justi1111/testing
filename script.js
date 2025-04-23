let preciseMode = false;

function updateProbability() {
  const now = new Date();
  const end = new Date("2025-12-31T23:59:59.999Z");
  const remainingMs = end - now;

  const totalDaysLeft = remainingMs / (1000 * 60 * 60 * 24);
  const probability = 100 / totalDaysLeft;

  const digits = preciseMode ? 15 : 8;
  const formatted = probability.toPrecision(digits);

  document.getElementById("probability").innerText = `${formatted}%`;
}

document.getElementById("toggleMode").addEventListener("click", () => {
  preciseMode = !preciseMode;
  document.getElementById("toggleMode").innerText = preciseMode
    ? "Switch to Normal Mode"
    : "Switch to Precise Mode";
});

setInterval(updateProbability, 50);
updateProbability();
