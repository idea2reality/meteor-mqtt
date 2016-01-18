Meteor.startup(() => {
    if (Devices.find().count() === 0) {

        let devices = [
            {
                _id: 'device01',
                name: 'Energy Saver',
                manufacturer: 'redbearlab',
                sku: 'wifi-mini',
                avatar: 'svg-2',
                isAlive: false
            }
        ];

        let modules = [
            {
                _id: 'module01',
                deviceId: devices[0]._id,
                name: 'Current Sensor',
                sku: 'acs712',
                value: 0,
                unit: 'mA',
                version: '0.0.0'
            }
        ];

        for (let device of devices)
            Devices.insert(device);

        for (let module of modules)
            Modules.insert(module);
    }
});
