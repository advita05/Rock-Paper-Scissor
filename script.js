let user = 0;
let comp = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const getcompchoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randomidx = Math.floor(Math.random() * 3);
  return options[randomidx];
};

const drawg = () => {
  msg.innerText = "Game Draw";
  msg.style.backgroundColor = "white";
};

const showwinner = (userwin, userchoice, compchoice) => {
  if (userwin) {
    user++;
    userscorepara.innerText = user;
    msg.innerText = `You Win! Your ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor = "green";
  } else {
    comp++;
    compscorepara.innerText = comp;
    msg.innerText = `You Lose. ${compchoice} beats your ${userchoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playgame = (userchoice) => {
  const compchoice = getcompchoice();

  if (userchoice === compchoice) {
    drawg();
  } else {
    let userwin = true;
    if (userchoice === "rock") {
      userwin = compchoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      userwin = compchoice === "scirssors" ? false : true;
    } else {
      userwin = compchoice === "rock" ? false : true;
    }
    showwinner(userwin, userchoice, compchoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playgame(userchoice);
  });
});
