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
            const response = confirm("Start a new game?");
            if (response === true) {
              window.location.reload();
            } else {
              alert("Thank you for playing, come again soon!");
            }
          }
        } else {
          document.querySelectorAll(".boxOpen")[1].classList.remove("boxOpen");
          document.querySelectorAll(".boxOpen")[0].classList.remove("boxOpen");
        }
      }
    }, 500);
  };
  box.innerHTML = shuffleEmojis[i];
  document.querySelector(".container .game").appendChild(box);
}

// const response = confirm("Are you sure you want to do that?");

//console.log(response);
