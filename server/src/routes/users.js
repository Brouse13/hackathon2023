const globals = require('../globals')

module.exports = function(app) {
    
    //Get a user by his id
    app.get('/users/:name', (req, res) => {
        let user = users.find(p => p.name == req.params.name)
        res.json(user ? user : HTTP_message(404, "User not found"))
    })


    //Add a new user by his id
    app.put("/users/:name", (req, res) => {
        let found = users.find(p => p.name == req.params.name)
        
        if(!found) {
            found = {
                "name": req.params.name,
                "location": {
                    "x": 10,
                    "y": 5,
                    "screen": "screen01"
                },
                "data": {}
            }
            users.push(found)
        }     
        res.json(found)   
    }) 

    //Remove user by his id
    app.delete('/users/:name', (req, res) => {
        //Find element index
        let index = users.indexOf(users.find(p => p.name == req.params.name))

        //Remove element
        if (index > -1) {
            users.splice(index, index != -1);
        }

        res.json(HTTP_message(200, index))
    })
}