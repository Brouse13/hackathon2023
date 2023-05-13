const express = require('express')
const bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();

const app = express()
const port = 3000

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array()); 
app.use(express.static('public'));

require('./routes/users')(app)
require('./routes/location')(app)
require('./routes/login')(app)