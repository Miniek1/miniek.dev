const socket = io();

function sendPet() {
    socket.emit("pet", true);
}

socket.on("petCount", (count) => {
    document.getElementById("petCounter").textContent = count;
})