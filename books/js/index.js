/**
 * @author Andrew Kim
 * @since 24 June 2024
 * @version 2.0.0
 */

// initialize canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


// Set canvas size to window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


// Characters used for the rain effect
const characters = '01';


// Create columns for the raindrops
const columns = Math.floor(canvas.width / 10);


// Array to store y positions of each raindrop
const drops = [];


// Initialize drops
for (let i = 0; i < columns; i++) {
    drops[i] = Math.floor(Math.random() * canvas.height);
}


// Function to draw rain
function draw() {
    // Semi-transparent black background to create fading effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Set color and font for raindrops
    ctx.fillStyle = '#00F'; 
    ctx.font = '15px monospace'; 
    // Loop through each column
    for (let i = 0; i < drops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)];
        ctx.fillText(text, i * 10, drops[i] * 10);

        // Reset drop position if it goes off the screen
        if (drops[i] * 10 > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
        }

        // Move the drop down
        drops[i]++;
    }
}


// Function to animate the rain
function animate() {
    requestAnimationFrame(animate);
    draw();
}

// Start the animation
animate();


// Adjust canvas size if window is resized
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drops.length = Math.floor(canvas.width / 10);
});
