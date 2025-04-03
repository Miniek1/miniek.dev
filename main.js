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