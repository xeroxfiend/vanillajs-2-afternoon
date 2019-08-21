const mousePosition = {
    x: 0,
    y: 0
}

let drawId

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min + 1)) + min;
}

window.addEventListener('mousemove', function(e) {
    mousePosition.x = e.pageX
    mousePosition.y = e.pageY
        // console.log(mousePosition)
})

// function position(mouseMoveEvent) {
//     mousePosition.x = mouseMoveEvent.pageX
//     mousePosition.y = mouseMoveEvent.pageY
// }

function draw() {
    console.log('hello')
    return setInterval(function() {
        // console.log('hello')
        const container = document.getElementById("wrap");
        const color = `background:rgb(${getRandomNumber(0, 255)},${getRandomNumber(
        0,
        255
      )}, ${getRandomNumber(0, 255)});`;
        const ballSize = getRandomNumber(10, 30);
        const size = `height:${ballSize}px; width:${ballSize}px;`;
        const left = `left:${getRandomNumber(
        mousePosition.x - ballSize,
        mousePosition.x
      )}px;`;
        const top = `top:${getRandomNumber(
        mousePosition.y - ballSize,
        mousePosition.y
      )}px; `;
        const style = `${left}${top}${color}${size}`;

        const ball = document.createElement("div");
        // console.log(ball)
        ball.classList.add("ball");
        ball.style = style;
        ball.addEventListener("animationend", function(e) {
            e.target.remove();
        });

        container.appendChild(ball);
    }, 25);
}

window.addEventListener('mouseover', function() {
    drawId = draw()
})

window.addEventListener('mouseout', function() {
    clearInterval(drawId)
})