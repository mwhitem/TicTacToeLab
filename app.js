let cells = document.querySelectorAll(".row > div");
let currentPlayer = "X";
for (let index = 0; index < cells.length; index++) {
  cells[index].addEventListener("click", cellClicked);
}
let restartGame = document.querySelector("button");
restartGame.addEventListener("click", boardClicked);
function boardClicked() {
  location.reload();
}
function cellClicked() {
  if (event.target.textContent === "") {
    event.target.textContent = currentPlayer;
    if (currentPlayer == "X") {
      currentPlayer = "O";
    } else {
      currentPlayer = "X";
    }
  }
  if (
    cells[0].textContent === "X" &&
    cells[1].textContent === "X" &&
    cells[2].textContent === "X"
  ) {
    alert("You Won!");
  }

  if (
    cells[0].textContent === "X" &&
    cells[3].textContent === "X" &&
    cells[6].textContent === "X"
  ) {
    alert("You Won!");
  }
  if (
    cells[0].textContent === "X" &&
    cells[4].textContent === "X" &&
    cells[8].textContent === "X"
  ) {
    alert("You Won!");
  }
  if (
    cells[1].textContent === "X" &&
    cells[4].textContent === "X" &&
    cells[7].textContent === "X"
  ) {
    alert("You Won!");
  }
  if (
    cells[2].textContent === "X" &&
    cells[5].textContent === "X" &&
    cells[8].textContent === "X"
  ) {
    alert("You Won!");
  }
  if (
    cells[2].textContent === "X" &&
    cells[4].textContent === "X" &&
    cells[6].textContent === "X"
  ) {
    alert("You Won!");
  }
  if (
    cells[3].textContent === "X" &&
    cells[4].textContent === "X" &&
    cells[5].textContent === "X"
  ) {
    alert("You Won!");
  }
  if (
    cells[6].textContent === "X" &&
    cells[7].textContent === "X" &&
    cells[8].textContent === "X"
  ) {
    alert("You Won!");
  }
  if (
    cells[0].textContent === "O" &&
    cells[1].textContent === "O" &&
    cells[2].textContent === "O"
  ) {
    alert("You Won!");
  }
  if (
    cells[0].textContent === "O" &&
    cells[3].textContent === "O" &&
    cells[6].textContent === "O"
  ) {
    alert("You Won!");
  }
  if (
    cells[0].textContent === "O" &&
    cells[4].textContent === "O" &&
    cells[8].textContent === "O"
  ) {
    alert("You Won!");
  }
  if (
    cells[1].textContent === "O" &&
    cells[4].textContent === "O" &&
    cells[7].textContent === "O"
  ) {
    alert("You Won!");
  }
  if (
    cells[2].textContent === "O" &&
    cells[5].textContent === "O" &&
    cells[8].textContent === "O"
  ) {
    alert("You Won!");
  }
  if (
    cells[2].textContent === "O" &&
    cells[4].textContent === "O" &&
    cells[6].textContent === "O"
  ) {
    alert("You Won!");
  }
  if (
    cells[3].textContent === "O" &&
    cells[4].textContent === "O" &&
    cells[5].textContent === "O"
  ) {
    alert("You Won!");
  }
  if (
    cells[6].textContent === "O" &&
    cells[7].textContent === "O" &&
    cells[8].textContent === "O"
  ) {
    alert("You Won!");
  }
  if (
    cells[0].textContent === "O" &&
    cells[1].textContent === "X" &&
    cells[2].textContent === "O" &&
    cells[3].textContent === "X" &&
    cells[4].textContent === "X" &&
    cells[5].textContent === "O" &&
    cells[6].textContent === "O" &&
    cells[7].textContent === "O" &&
    cells[8].textContent === "X"
  ) {
    alert("It's a Draw :/");
  }
  if (
    cells[0].textContent === "X" &&
    cells[1].textContent === "O" &&
    cells[2].textContent === "X" &&
    cells[3].textContent === "O" &&
    cells[4].textContent === "O" &&
    cells[5].textContent === "X" &&
    cells[6].textContent === "X" &&
    cells[7].textContent === "X" &&
    cells[8].textContent === "O"
  ) {
    alert("It's a Draw :/");
  }
  if (
    cells[0].textContent === "O" &&
    cells[1].textContent === "X" &&
    cells[2].textContent === "O" &&
    cells[3].textContent === "X" &&
    cells[4].textContent === "O" &&
    cells[5].textContent === "X" &&
    cells[6].textContent === "X" &&
    cells[7].textContent === "O" &&
    cells[8].textContent === "X"
  ) {
    alert("It's a Draw :/");
  }
  if (
    cells[0].textContent === "X" &&
    cells[1].textContent === "O" &&
    cells[2].textContent === "X" &&
    cells[3].textContent === "O" &&
    cells[4].textContent === "X" &&
    cells[5].textContent === "O" &&
    cells[6].textContent === "O" &&
    cells[7].textContent === "X" &&
    cells[8].textContent === "O"
  ) {
    alert("It's a Draw :/");
  }
  if (
    cells[0].textContent === "X" &&
    cells[1].textContent === "X" &&
    cells[2].textContent === "O" &&
    cells[3].textContent === "O" &&
    cells[4].textContent === "O" &&
    cells[5].textContent === "X" &&
    cells[6].textContent === "X" &&
    cells[7].textContent === "O" &&
    cells[8].textContent === "X"
  ) {
    alert("It's a Draw :/");
  }
  if (
    cells[0].textContent === "O" &&
    cells[1].textContent === "O" &&
    cells[2].textContent === "X" &&
    cells[3].textContent === "X" &&
    cells[4].textContent === "X" &&
    cells[5].textContent === "O" &&
    cells[6].textContent === "O" &&
    cells[7].textContent === "X" &&
    cells[8].textContent === "O"
  ) {
    alert("It's a Draw :/");
  }
  if (
    cells[0].textContent === "X" &&
    cells[1].textContent === "O" &&
    cells[2].textContent === "X" &&
    cells[3].textContent === "X" &&
    cells[4].textContent === "O" &&
    cells[5].textContent === "X" &&
    cells[6].textContent === "O" &&
    cells[7].textContent === "X" &&
    cells[8].textContent === "O"
  ) {
    alert("It's a Draw :/");
  }
  if (
    cells[0].textContent === "O" &&
    cells[1].textContent === "X" &&
    cells[2].textContent === "O" &&
    cells[3].textContent === "O" &&
    cells[4].textContent === "X" &&
    cells[5].textContent === "O" &&
    cells[6].textContent === "X" &&
    cells[7].textContent === "O" &&
    cells[8].textContent === "X"
  ) {
    alert("It's a Draw :/");
  }
  if (
    cells[0].textContent === "O" &&
    cells[1].textContent === "X" &&
    cells[2].textContent === "O" &&
    cells[3].textContent === "X" &&
    cells[4].textContent === "X" &&
    cells[5].textContent === "O" &&
    cells[6].textContent === "X" &&
    cells[7].textContent === "O" &&
    cells[8].textContent === "X"
  ) {
    alert("It's a Draw :/");
  }
  if (
    cells[0].textContent === "X" &&
    cells[1].textContent === "O" &&
    cells[2].textContent === "X" &&
    cells[3].textContent === "O" &&
    cells[4].textContent === "O" &&
    cells[5].textContent === "X" &&
    cells[6].textContent === "O" &&
    cells[7].textContent === "X" &&
    cells[8].textContent === "O"
  ) {
    alert("It's a Draw :/");
  }
  if (
    cells[0].textContent === "X" &&
    cells[1].textContent === "X" &&
    cells[2].textContent === "O" &&
    cells[3].textContent === "O" &&
    cells[4].textContent === "O" &&
    cells[5].textContent === "X" &&
    cells[6].textContent === "X" &&
    cells[7].textContent === "X" &&
    cells[8].textContent === "O"
  ) {
    alert("It's a Draw :/");
  }
  if (
    cells[0].textContent === "O" &&
    cells[1].textContent === "O" &&
    cells[2].textContent === "X" &&
    cells[3].textContent === "X" &&
    cells[4].textContent === "X" &&
    cells[5].textContent === "O" &&
    cells[6].textContent === "O" &&
    cells[7].textContent === "O" &&
    cells[8].textContent === "X"
  ) {
    alert("It's a Draw :/");
  }
  if (
    cells[0].textContent === "O" &&
    cells[1].textContent === "X" &&
    cells[2].textContent === "O" &&
    cells[3].textContent === "O" &&
    cells[4].textContent === "X" &&
    cells[5].textContent === "X" &&
    cells[6].textContent === "X" &&
    cells[7].textContent === "O" &&
    cells[8].textContent === "X"
  ) {
    alert("It's a Draw :/");
  }
  if (
    cells[0].textContent === "X" &&
    cells[1].textContent === "O" &&
    cells[2].textContent === "X" &&
    cells[3].textContent === "X" &&
    cells[4].textContent === "O" &&
    cells[5].textContent === "O" &&
    cells[6].textContent === "O" &&
    cells[7].textContent === "X" &&
    cells[8].textContent === "O"
  ) {
    alert("It's a Draw :/");
  }
  if (
    cells[0].textContent === "X" &&
    cells[1].textContent === "O" &&
    cells[2].textContent === "X" &&
    cells[3].textContent === "X" &&
    cells[4].textContent === "X" &&
    cells[5].textContent === "O" &&
    cells[6].textContent === "O" &&
    cells[7].textContent === "X" &&
    cells[8].textContent === "O"
  ) {
    alert("It's a Draw :/");
  }
  if (
    cells[0].textContent === "O" &&
    cells[1].textContent === "X" &&
    cells[2].textContent === "O" &&
    cells[3].textContent === "O" &&
    cells[4].textContent === "O" &&
    cells[5].textContent === "X" &&
    cells[6].textContent === "X" &&
    cells[7].textContent === "O" &&
    cells[8].textContent === "X"
  ) {
    alert("It's a Draw :/");
  }
  if (
    cells[0].textContent === "O" &&
    cells[1].textContent === "X" &&
    cells[2].textContent === "X" &&
    cells[3].textContent === "X" &&
    cells[4].textContent === "X" &&
    cells[5].textContent === "O" &&
    cells[6].textContent === "O" &&
    cells[7].textContent === "O" &&
    cells[8].textContent === "X"
  ) {
    alert("It's a Draw :/");
  }
  if (
    cells[0].textContent === "X" &&
    cells[1].textContent === "O" &&
    cells[2].textContent === "O" &&
    cells[3].textContent === "O" &&
    cells[4].textContent === "O" &&
    cells[5].textContent === "X" &&
    cells[6].textContent === "X" &&
    cells[7].textContent === "X" &&
    cells[8].textContent === "O"
  ) {
    alert("It's a Draw :/");
  }
  if (
    cells[0].textContent === "X" &&
    cells[1].textContent === "O" &&
    cells[2].textContent === "O" &&
    cells[3].textContent === "O" &&
    cells[4].textContent === "X" &&
    cells[5].textContent === "X" &&
    cells[6].textContent === "X" &&
    cells[7].textContent === "X" &&
    cells[8].textContent === "O"
  ) {
    alert("It's a Draw :/");
  }
  if (
    cells[0].textContent === "O" &&
    cells[1].textContent === "X" &&
    cells[2].textContent === "X" &&
    cells[3].textContent === "X" &&
    cells[4].textContent === "O" &&
    cells[5].textContent === "O" &&
    cells[6].textContent === "O" &&
    cells[7].textContent === "O" &&
    cells[8].textContent === "X"
  ) {
    alert("It's a Draw :/");
  }
  if (
    cells[0].textContent === "O" &&
    cells[1].textContent === "O" &&
    cells[2].textContent === "X" &&
    cells[3].textContent === "X" &&
    cells[4].textContent === "X" &&
    cells[5].textContent === "O" &&
    cells[6].textContent === "O" &&
    cells[7].textContent === "X" &&
    cells[8].textContent === "X"
  ) {
    alert("It's a Draw :/");
  }
  if (
    cells[0].textContent === "X" &&
    cells[1].textContent === "X" &&
    cells[2].textContent === "O" &&
    cells[3].textContent === "O" &&
    cells[4].textContent === "O" &&
    cells[5].textContent === "X" &&
    cells[6].textContent === "X" &&
    cells[7].textContent === "O" &&
    cells[8].textContent === "O"
  ) {
    alert("It's a Draw :/");
  }
  if (
    cells[0].textContent === "X" &&
    cells[1].textContent === "X" &&
    cells[2].textContent === "O" &&
    cells[3].textContent === "O" &&
    cells[4].textContent === "X" &&
    cells[5].textContent === "X" &&
    cells[6].textContent === "X" &&
    cells[7].textContent === "O" &&
    cells[8].textContent === "O"
  ) {
    alert("It's a Draw :/");
  }
  if (
    cells[0].textContent === "O" &&
    cells[1].textContent === "O" &&
    cells[2].textContent === "X" &&
    cells[3].textContent === "X" &&
    cells[4].textContent === "O" &&
    cells[5].textContent === "O" &&
    cells[6].textContent === "O" &&
    cells[7].textContent === "X" &&
    cells[8].textContent === "X"
  ) {
    alert("It's a Draw :/");
  }
}
