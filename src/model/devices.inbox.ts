declare var DevicesInbox: Mongo.Collection<any>;

DevicesInbox = new Mongo.Collection('devices.inbox');

Meteor.methods({
    setLed: function(deviceId, ledId, value) {
        if (!Devices.findOne({ _id: deviceId }).isAlive)
            throw new Meteor.Error('device-not-alive', 'Device is not alive');

        var msgId = DevicesInbox.insert({
            deviceId: deviceId,
            userId: this.userId,
            ledId: ledId,
            value: value,
            state: 'initial',
            initialDate: new Date(),
            appliedDate: null
        });

        return msgId;
    },
    applyLed: function(msgId, value) {
        var msg = DevicesInbox.findOne({ _id: msgId });

        Devices.update({ "_id": msg.deviceId, "leds._id": msg.ledId },
            {
                "$set": {
                    "leds.$.value": value
                }
            });

        DevicesInbox.update({ _id: msgId },
            {
                $set: {
                    state: 'applied',
                    appliedDate: new Date()
                }
            });
    },
    cancelLed: function(msgId, reason) {
      var msg = DevicesInbox.findOne({ _id: msgId });

      DevicesInbox.update({ _id: msgId },
          {
              $set: {
                  state: 'canceled',
                  appliedDate: new Date()
              }
          });
    }
})
