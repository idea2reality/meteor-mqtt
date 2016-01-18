// Meteor.startup(function() {
//     if (DevicesInbox.find().count() === 0) {
//         var requests = [
//             {
//                 "deviceId": "my_edison",
//                 "userId": "user1",
//                 "ledId": "dim1",
//                 "value": 3,
//                 "state": "applied",
//                 "initialDate": new Date(new Date().valueOf() - 1000 * 60 * 60),
//                 "appliedDate": new Date()
//             },
//             {
//                 "deviceId": "my_edison",
//                 "userId": "user1",
//                 "ledId": "dim1",
//                 "value": 9,
//                 "state": "initial",
//                 "initialDate": new Date(),
//                 "appliedDate": null
//             },
//             {
//                 "deviceId": "cc3200",
//                 "userId": "user1",
//                 "ledId": "basic1",
//                 "value": true,
//                 "state": "initial",
//                 "initialDate": new Date(),
//                 "appliedDate": null
//             }
//         ];
//
//         for (var i = 0; i < requests.length; i++) {
//             DevicesInbox.insert(requests[i]);
//         }
//     }
// });
