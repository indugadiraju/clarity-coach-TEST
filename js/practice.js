const prompts = {
  interview: "Tell me about a challenge you overcame.",
  confidence: "Speak about something you’re proud of.",
  presentation: "Explain a topic you care about clearly."
};

const mode = localStorage.getItem("mode");
document.getElementById("prompt").textContent = prompts[mode];

let recorder;
let secondsLeft = 60;
const timerEl = document.getElementById("timer");

navigator.mediaDevices.getUserMedia({ video: true, audio: true })
  .then(stream => {
    document.getElementById("video").srcObject = stream;
    recorder = new MediaRecorder(stream);
    recorder.onstop = () => {
      window.location.href = "results.html";
    };
  });

function startRecording() {
  recorder.start();
  secondsLeft = 60;
  timerEl.textContent = "60s";

  const interval = setInterval(() => {
    secondsLeft--;
    timerEl.textContent = secondsLeft + "s";
    if (secondsLeft <= 0) {
      clearInterval(interval);
      stopRecording();
    }
  }, 1000);
}

function stopRecording() {
  if (recorder && recorder.state !== "inactive") {
    recorder.stop();
  }
}
