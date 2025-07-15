import net from 'net';

const server = net.createServer((socket) => {
    console.log("client connected");
    socket.write(`Hello from tcp server\r\n`);

    socket.on('data', (data) => {
        console.log(`Received data: ${data}`);

        socket.write(`echo: ${data}\r\n`);
    });

    socket.on('end', () => {
        console.log("client disconnected");
    });

    socket.on('error', (err) => {
        comsole.log(`Error: ${err.message}`);
    });
});

server.listen(5000, () => console.log("TCP Server is running on port 5000"));