declare var DevicesLogs: Mongo.Collection<any>;

DevicesLogs = new Mongo.Collection('devices.logs');

// DevicesLogs.allow({
//     insert: function(userId, doc) {
//         console.log(userId);
//         return true;
//     }
// })

Meteor.methods({
    insertLog: function() {

    }
});
