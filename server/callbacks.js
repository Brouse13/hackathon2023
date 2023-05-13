exports.chat = (username, message) => {
    console.log(`Chat: ${username} ${message}`)
}

exports.move = (username, location) => {
    console.log(`Move ${username} ${location}`)
    return
}

exports.login = (username) => {
    console.log(`Login ${username}`)
}