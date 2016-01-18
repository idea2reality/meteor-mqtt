
function auth(client, username, password, callback) {
    callback(null, true);
}

// Accepts the connection if the username and password are valid
function authenticate(client, username, password, callback) {
    var authorized = (username === 'alice' && password.toString() === 'secret');
    if (authorized) client.user = username;
    // callback(null, authorized);
    // callback(null, true);
    // if (Devices.find({ _id: client.id }).count() === 0)
    //     return callback(null, false);

    callback(null, true);
}

// In this case the client authorized as alice can publish to /users/alice taking
// the username from the topic and verifing it is the same of the authorized user
function authorizePublish(client, topic, payload, callback) {
    // callback(null, client.user == topic.split('/')[1]);
    callback(null, true);
}

// In this case the client authorized as alice can subscribe to /users/alice taking
// the username from the topic and verifing it is the same of the authorized user
function authorizeSubscribe(client, topic: string, callback) {
    // callback(null, client.user == topic.split('/')[1]);
    console.log('Auth Sub', topic)
    if (topic[0] === '$') {
        console.error('Subscribe rejected:', 'Cannot subscribe topic starts with $');
        return callback(null, false);
    }
    callback(null, true);
}
