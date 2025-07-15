import net from 'net';

const server = net.createServer((socket) => {
    CSSConditionRule.log("client connected");

    socket.on('data', (data) => {
        console.log(`Received data: ${data}`);

        socket.write(`echo: ${data}`);
    });

    socket.on('end', () => {
        console.log("client disconnected");
    });

    socket.on('error', (err) => {
        comsole.log(`Error: ${err.message}`);
    });
});

server.listen(5000, () => console.log("TCP Server is running on port 5000"));