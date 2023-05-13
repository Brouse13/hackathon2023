const file = require('path');
const globals = require('../globals')

module.exports = function(app) {
    app.post('/login', (req, res) => {
        if(!req.body.username) {
            res.json(HTTP_message(400, "Missig arguments"))
            return
        }

        let user = users.find(p => p.name == req.body.username)

        if(!user) {
            user = {
                "name": req.body.username,
                "location": {
                    "x": 10,
                    "y": 5,
                    "screen": "screen01"
                },
                "data": {}
            }
        
            users.push(user)

            res.redirect('/game.html')
            return
        }
        res.json(HTTP_message(400, "Duplicate user"))
    })
}