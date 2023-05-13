const socket = require('socket.io')

exports.sio = server => {
    return socket(server, {
        transport: ['polling'],
        cors: {
            origin: '*'
        }
    })
}

exports.connection = io => {
    io.on('connection', socket => {
        console.log("New socket connection")
        
        socket.on("message", message => {
            console.log(console.log(`Message from ${socket.id} : ${message}`))
        })

        socket.on("disconnect", () => {
            console.log(`Socket ${socket.id} disconnected`)
        })

        socket.on("connect_error", (err) => {
            console.log(`connect_error due to ${err.message}`);
          });
    })
}