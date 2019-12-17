const server = app.listen
const io = require('socket.io').listen(server);
const {SERVER_PORT} = process.env

io.on('connection', (client) => {
    //here you can start emitting events to the client
    client.on('subscribeToTimer', (interval) => {
        console.log(`client is subscribing to timer with interval ${interval}`)
        // setInterval(() => {
        //     client.emit('timer', new Date());
        // }, interval);
    });
});

io.listen(SERVER_PORT)
console.log(`listening on port ${SERVER_PORT}`)

