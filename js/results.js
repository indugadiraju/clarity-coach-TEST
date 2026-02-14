new Chart(document.getElementById("chart"), {
  type: "pie",
  data: {
    labels: ["Clarity", "Confidence", "Posture", "Eye Contact"],
    datasets: [{
      data: [30, 25, 20, 25],
      backgroundColor: [
        "#7dd3fc",
        "#a78bfa",
        "#f472b6",
        "#34d399"
      ]
    }]
  },
  options: {
    plugins: {
      legend: {
        labels: { color: "#fff" }
      }
    }
  }
});
