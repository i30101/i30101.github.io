/**
 * @author Andrew Kim
 * @version 1.0.0
 * @since 4 October 2024
 */

const noButton = document.getElementById("noButton");
const buttonWidth = noButton.offsetWidth;
const buttonHeight = noButton.offsetHeight;

const windowPadding = 10;

/**
 * Finds random valid x position
 * @returns x position
 */
function randomX() {
    return windowPadding + (Math.random() * (window.innerWidth - (2 * windowPadding)));
}


/**
 * Finds random valid y position
 * @returns y position
 */
function randomY() {
    return windowPadding + (Math.random() * (window.innerHeight - (2 * windowPadding)));
}

let x = randomX();
let y = randomY();

const speed = 3;

let velocityX = speed * (Math.random() < 0.5 ? -1 : 1);
let velocityY = speed * (Math.random() < 0.5 ? -1 : 1);


/**
 * Updates position style of button
 */
function updatePositionStyle() {
    noButton.style.left = `${x}px`
    noButton.style.top = `${y}px`
}

updatePositionStyle();


/**
 * Move no button
 */
function updatePosition() {
    x += velocityX;
    y += velocityY;

    if (x <= 0 || x + buttonWidth>= window.innerWidth - 0) {
        velocityX *= -1;
    }

    if (y <= 0 || y + buttonHeight >= window.innerHeight - 0) {
        velocityY *= -1;
    }

    updatePositionStyle();

    requestAnimationFrame(updatePosition);
}

requestAnimationFrame(updatePosition);

function no() {
    x = randomX();
    y = randomY();
    updatePositionStyle();
}