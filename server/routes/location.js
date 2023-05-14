const globals = require('../globals')

module.exports = function(app) {

    //Get the current position of the player
    app.get('/location/:name', (req, res) => {
        let user = users.find(p => p.name == req.params.name)

        res.json(user ? user.location : HTTP_message(404, "User not found"))
    })

    //Set a new location to a player
    app.put('/users/:user', (req, res) => {
        if(req.query.x == null  || req.query.y == null || req.query.screen) {
            res.json({
                "error": 400,
                "message": "Missing params"
            })
            return
        }

        //Find element index
        let index = users.indexOf(users.find(p => p.name == req.params.name))

        if(index > -1) {
            users[index].location = {
                "x": req.query.x,
                "y": req.query.y,
                "screen": req.query.screen
            }
        }

        res.json(HTTP_message(200, index != -1))
    })
}