const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');
const fs = require('node:fs');

const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'public/index.html'));
});
app.get('/pets', (req, res) => {
    res.sendFile(join(__dirname, 'public/pets.html'));
});


io.on('connection', (socket) => {
    io.emit("petCount", parseInt(fs.readFileSync('petList.txt', 'utf8'), 10));

    socket.on("pet", (ack) => {
        const data = fs.readFileSync('petList.txt', 'utf8');
        let pets = parseInt(data, 10);
        pets++;
        
        fs.writeFileSync('petList.txt', pets.toString());
        io.emit("petCount", pets);

        if (ack) ack();
});
});

server.listen(3000, () => {
    console.log('server running!');
});