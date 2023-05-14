//Express
const express = require('express')
const app = express()

//Express body parser
const bodyParser = require('body-parser')
const multer = require('multer')
const upload = multer()

//Socket.IO
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

//User and User cache
const User = require('./user')
const UserCache = require('./globals')
const cache = new UserCache();

//Set public directory
app.use(express.static(__dirname + '/public/'))

//Parse application/json
app.use(bodyParser.json()); 

//Parse application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 

//Parse multipart/form-data
app.use(upload.array()); 
app.use(express.static('public'));

//Link routes
require('./routes/users')(app)
require('./routes/location')(app)

//Handle connections
const callbacks = require('./callbacks');
io.on('connection', (socket) => {
    console.log(`New socket connect: ${socket.id}`)

    socket.on('disconnect', () => {
        let user = cache.getUserByID(socket.id)

        //Not removed player 
        if(user) {
            console.log('ERROR Player not loaded from frame')
        }

        console.log(`Socket disconected: ${socket.id}`)
    })

    //Call the childs to send the message
    socket.on('user_chat', (user, msg) => {
        //Handle event
        socket.broadcast.emit('user_chat', user, msg)

        //Call frontEnt event
        callbacks.chat(user, msg)
    })

    //Call all the childs to log the user
    socket.on('user_login', (username) => {
        //Handle event
        socket.broadcast.emit('user_login', username)

        //Call frontEnd callback
        callbacks.login(username)
    })

    //Call all the childs to move the user to the location
    socket.on('user_move', (user, location) => {
        //Handle event
        socket.broadcast.emit('user_move', user, location)

        //Call frontEnt event
        callbacks.move(user, location)
    })
});

//Start SocketIO listen on port 3000
server.listen(3000, () => {
    console.log('listening on *:3000');
});