let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "blue", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("started");
    started = true;

    levelUp();
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

function levelUp() {
  userSeq = [];
  level++;
  let maxScore = 6;
  if (level == maxScore) {
    h2.innerText = `Congratulations! Your score is 5/5 \n Press any key to restart`;
    reset();
  } else {
    h2.innerText = `Level ${level}`;

    let rdmIdx = Math.floor(Math.random() * 3);
    let rdmColor = btns[rdmIdx];
    let rdmBtn = document.querySelector(`.${rdmColor}`);
    gameSeq.push(rdmColor);
    gameFlash(rdmBtn);
  }
}

function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `Game Over! Your score was <b>${level}/5.</b> Press any key to start`;
    reset();
  }
}

function btnPress() {
  let btn = this;
  gameFlash(btn);

  userColor = btn.getAttribute("id");
  userSeq.push(userColor);

  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
