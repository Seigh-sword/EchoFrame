const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

// Simple player box
let player = {
  x: 100,
  y: 100,
  width: 20,
  height: 20,
  color: 'cyan',
  velocityY: 0,
  gravity: 0.5
};

function update() {
  player.velocityY += player.gravity;
  player.y += player.velocityY;

  if (player.y + player.height > canvas.height) {
    player.y = canvas.height - player.height;
    player.velocityY = 0;
  }
}

function draw() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.width, player.height);
}

function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

gameLoop();
