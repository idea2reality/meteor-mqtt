Meteor.publish('devices', function() {
    return Devices.find({});
});

Meteor.publish('device', function(deviceId) {
    return Devices.find({ _id: deviceId });
});
