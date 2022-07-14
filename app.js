let grid = 0;

function start() {
  grid = document.querySelector("#gridSize").value;
  buildGrid();
}

function buildGrid() {}

function takeTurn() {
  if (checkValid) {
    adjustMap();
    catTurn();
  }
}

function checkValid() {
  return true;
}

function adjustMap() {}

function catTurn() {}
