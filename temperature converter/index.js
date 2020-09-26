document.getElementById("btn").addEventListener("click", function () {
  document.getElementById("result").textContent = (
    ((document.getElementById("temperature").value - 32) * 5) /
    9
  ).toFixed(2);
});
