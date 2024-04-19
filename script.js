const emojis = [
  "😺",
  "😺",
  "🙈",
  "🙈",
  "🐶",
  "🐶",
  "🦝",
  "🦝",
  "🐯",
  "🐯",
  "🐴",
  "🐴",
  "🦓",
  "🦓",
  "🐰",
  "🐰",
];

let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));
for (let i = 0; i < emojis.length; i++) {
  let box = document.createElement("div");
  box.classList.add("item");

  box.onclick = (e) => {
    e.target.classList.add("boxOpen");
    setTimeout(() => {
      if (document.querySelectorAll(".boxOpen").length > 1) {
        if (
          document.querySelectorAll(".boxOpen")[0].innerHTML ==
          document.querySelectorAll(".boxOpen")[1].innerHTML
        ) {
          document.querySelectorAll(".boxOpen")[0].classList.add("boxMatch");
          document.querySelectorAll(".boxOpen")[1].classList.add("boxMatch");

          document.querySelectorAll(".boxOpen")[1].classList.remove("boxOpen");
          document.querySelectorAll(".boxOpen")[0].classList.remove("boxOpen");

          if (document.querySelectorAll(".boxMatch").length == emojis.length) {
            alert("Congrats! Start a new game.");
            window.location.reload();
          }
        } else {
          document.querySelectorAll(".boxOpen")[1].classList.remove("boxOpen");
          document.querySelectorAll(".boxOpen")[0].classList.remove("boxOpen");
        }
      }
    }, 850);
  };
  box.innerHTML = shuffleEmojis[i];
  document.querySelector(".container .game").appendChild(box);
}

// STOPWATCH //

let time = 0;
let interval;
let display = document.getElementById("display");
let altBtns = document.getElementById("alt-btns");

function startTimer() {
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => {
    time += 1;
    display.innerHTML =
      Math.floor(time / 3600)
        .toString()
        .padStart(2, "0") +
      ":" +
      Math.floor((time % 3600) / 60)
        .toString()
        .padStart(2, "0") +
      ":" +
      Math.floor(time % 60)
        .toString()
        .padStart(2, "0");
  }, 1000);
}

altBtns.onclick = function () {
  startTimer();
};
