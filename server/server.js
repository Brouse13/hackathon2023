const express = require('express')
const app = express()
const port = 3000

const bodyParser = require('body-parser')
const multer = require('multer')
const upload = multer()

const server = require('http').Server(app)
const io = require('socket.io')(server)

app.use(express.static('frontend/src'))

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

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

io.on('connection', (socket) => {
    console.log("Connection succeed")
})