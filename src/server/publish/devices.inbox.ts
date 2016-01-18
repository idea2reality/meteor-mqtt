Meteor.publish('devices.inbox', function(deviceId) {

    updateDeviceAliveState(deviceId, true);

    this.onStop(() => updateDeviceAliveState(deviceId, false));

    return DevicesInbox.find({ deviceId: deviceId, state: 'initial' });

    function updateDeviceAliveState(deviveId, isAlive) {
        Devices.update({ _id: deviceId },
            {
                $set: {
                    isAlive: isAlive
                }
            });
    }
});
