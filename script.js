const canvas = document.querySelector("#gameCanvas");
const ctx = canvas.getContext("2d");

const rect = {
  x: 50,
  y: 50,
  width: 100,
  height: 100,
  dx: 1,
  dy: 1,
};

function update() {
  //TODO: Update coord variables
  rect.x += rect.dx;
  rect.y += rect.dy;

  //TODO: Check Collision for X axis
  //TODO: Reverse motion for collision on the edge of canvas
  if (rect.x + rect.width > canvas.width || rect.x < 0) {
    rect.dx *= -1;
  }

  //TODO: Check Collission for Y axis
  //TODO: Reverse motion for collision on the edge of canvas
  if (rect.y + rect.height > canvas.height || rect.y < 0) {
    rect.dy *= -1;
  }
}

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "blue";
  ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
}

function gameLoop() {
  update();
  render();

  requestAnimationFrame(gameLoop);
}

gameLoop();
