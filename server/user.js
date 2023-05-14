class User {
    constructor(name, id) {
        this.name = name
        this.location = {
            'x': 0,
            'y': 0
        }
        this.socketId = id
    }

    getName() {
        return this.name
    }

    getId() {
        return this.socketId
    }

    getlocation() {
        return this.location
    }
}

module.exports = User