const socket = io();

function sendPet() {
    socket.emit("pet");
}

socket.on("petCount", (pets) => {
    document.getElementById("petCounter").textContent = pets;
    updatePetCounter(formatNumber(pets));
})

function updatePetCounter(pets) {
    const counter = document.getElementById('petCounter');
    counter.textContent = pets;
    
    if (pets.toString().length >= 5) {
        counter.style.fontSize = '96px';
    } else {
        counter.style.fontSize = '128px';
    }
}

function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace('.0', '') + 'M';
    } else if (num >= 10000) {
        return (num / 1000).toFixed(1).replace('.0', '') + 'k';
    } else {
        return num.toString();
    }
}