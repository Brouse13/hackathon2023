var users = [
    {
        "name": "Brouse",
        "location": {
            "x": 10,
            "y": 20,
            "screen": "screen01"
        },
        "data": {

        }
    }
]

function HTTP_message(type, err_msg) {
    return {
        "error": type,
        "message": err_msg
    }
}

global.users = users;
global.HTTP_message = (type, err_msg) => HTTP_message(type, err_msg);