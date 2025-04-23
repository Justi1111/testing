function updateProbability() {
  const now = new Date();
  const end = new Date("2025-12-31T23:59:59.999Z");
  const remainingMs = end - now;

  const totalDaysLeft = remainingMs / (1000 * 60 * 60 * 24);
  const probability = 100 / totalDaysLeft;

  const rounded = probability.toFixed(8); // Adjust precision here
  document.getElementById("probability").innerText = `${rounded}%`;
}

setInterval(updateProbability, 50);
updateProbability();
