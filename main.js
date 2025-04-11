const cursor = document.querySelector(".cursor");

document.addEventListener("mouseover", () => {
    cursor.style.display = "block";
});

document.addEventListener("mouseout", () => {
    cursor.style.display = "none";
});

document.addEventListener("mousemove", trackCursor);

function trackCursor(evt) {
    const w = cursor.clientWidth;
    const h = cursor.clientHeight;
    cursor.style.transform = `translate(${evt.clientX - w / 2}px, ${evt.clientY - h / 2}px)`;
}

let i = 0;
let welcomeText = "Hi, I'm Miniek";
function typingAnimation() {
    if (i < welcomeText.length) {
        document.getElementById("actualText").innerHTML += welcomeText.charAt(i);
        i++;
        setTimeout(typingAnimation, 50);
    }
}


typingAnimation()