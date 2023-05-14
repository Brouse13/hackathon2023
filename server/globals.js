const User = require('./user')

class UserCache {
    static #users = []

    constructor() {
    }

    addUser(user) {
        UserCache.#users.push(user)
    }

    getUser(name) {
        return UserCache.#users.filter(u => u.getName() == name)
    }

    removeUser(user) {
        let found = UserCache.#users.indexOf(this.getUser(user.getName()));

        //Remove from array
        if(found > -1) {
            UserCache.#users.splice(index, index != 0)
        }
    }

    getUserByID(id) {
        return UserCache.#users.filter(u => id == u.getId())
    }
}

module.exports = UserCache
