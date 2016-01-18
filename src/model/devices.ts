declare var Devices: Mongo.Collection<any>;

Devices = new Mongo.Collection('devices');

Meteor.methods({
    setLedId: function(deviceId, ledId, value) {
        check(ledId, Number);
        check(value, Number);

        if (Devices.find({ _id: deviceId, 'leds._id': value }).count() !== 0)
            throw new Meteor.Error('led-id-duplication', 'Led ID is duplicated');

        Devices.update({ "_id": deviceId, "leds._id": ledId },
            {
                "$set": {
                    "leds.$._id": value
                }
            });
    }
})
