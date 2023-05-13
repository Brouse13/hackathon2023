const express = require('express')
const app = express()
const port = 3000

const bodyParser = require('body-parser')
const multer = require('multer')
const upload = multer()

const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

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
require('./routes/login')(app)

server.listen(3000, () => {
    console.log('listening on *:3000');
});

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('disconnect', () => {
        console.log('User disconnected')
    })
});

app.get('/test', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
});