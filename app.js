const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

const stars = [];
for(let i = 0; i < 1000; i++){
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 0.6,
        speed: Math.random() * 0.6 + 0.2,
        hue: Math.random() * 360
    });
}

function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stars.forEach(star => {
        ctx.fillStyle = `hsl(${star.hue}, 100%, 70%)`;
        ctx.globalAlpha = 0.9;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        star.x -= star.speed;
        if(star.x < 0) star.x = canvas.width;
    });

    requestAnimationFrame(animate);
}
animate();