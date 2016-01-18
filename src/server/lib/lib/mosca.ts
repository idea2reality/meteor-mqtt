class MQTT {
    server = new mosca.Server({ port: 1883, id: 'idea2r' });

    constructor() {
        this.server.on = Meteor.wrapAsync(this.server.on, this.server);

        // fired when a message is received
        this.server.on('published', function(packet, client) {
            var topicLevels = packet.topic.split('/');

            if (client && client.id) {
                console.log('Published', packet.topic, packet.payload.toString(), 'from', client.id);

                if (topicLevels[0] === '$method') {
                    var doc = {
                        deviceId: client.id,
                        moduleId: 'module01',
                        value: packet.payload.toString(),
                        date: new Date()
                    };
                    DevicesLogs.insert(doc);
                }
            }
        });

        // this.server.on('ready', Meteor.bindEnvironment(function() {
        //     mqtt.server.authenticate = Meteor.bindEnvironment(function(client, username, password, callback) {
        //         if (Devices.find({ _id: client.id }).count() === 0)
        //             return callback(null, false);
        //
        //         return callback(null, true);
        //     });
        // }));

        this.server.authenticate = Meteor.bindEnvironment(function(client, username, password, callback) {
            if (Devices.find({ _id: client.id }).count() === 0)
                return callback(null, false);

            return callback(null, true);
        });

        // this.server.on('ready', function(){console.log(this)})

        var on = Meteor.wrapAsync(this.server.on, this.server);
        on('ready', function() {

        })
    }
}

mqtt = new MQTT();

declare var mqtt: MQTT;
