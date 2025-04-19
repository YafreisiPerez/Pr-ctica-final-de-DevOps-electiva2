const canvas = document.getElementById('confetti-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

function randomColor() {
    const colors = ['#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7', '#c1fba4', '#a6e3e9', '#71c9ce'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function createConfettiPiece() {
    return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        r: Math.random() * 6 + 2,
        color: randomColor(),
        speed: Math.random() * 3 + 1,
        angle: Math.random() * 360
    };
}

for (let i = 0; i < 150; i++) {
    confetti.push(createConfettiPiece());
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach((c, index) => {
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.r, 0, 2 * Math.PI);
        ctx.fillStyle = c.color;
        ctx.fill();
        c.y += c.speed;
        c.angle += 2;
        c.x += Math.sin(c.angle) * 0.3;

        if (c.y > canvas.height) {
            confetti[index] = createConfettiPiece();
        }
    });

    requestAnimationFrame(draw);
}

draw();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
