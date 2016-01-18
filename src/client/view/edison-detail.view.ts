namespace i2r.view {

    angular.module('i2r.view.edison-detail', []);

    class EdisonDetailController {
        private helpers;
        private edison;
        private $mdToast;

        constructor($scope, $reactive, $stateParams, $mdToast) {
            $reactive(this).attach($scope);

            this.$mdToast = $mdToast;

            this.helpers({
                edison: () => {
                    return Devices.findOne({ _id: $stateParams.edisonId });
                }
            });
        }

        setLed(ledId, newValue, oldValue) {
            Meteor.call('setLed', this.edison._id, ledId, newValue, (err, msgId) => {
                if (err)
                    return console.error(err);
                console.log('msg id:', msgId);
            });
        }

        setLedId(led, oldLedId) {
            Meteor.call('setLedId', this.edison._id, Number(oldLedId), Number(led._id), (err, msgId) => {
                var toast = this.$mdToast.simple()
                    .position('bottom right')
                    .hideDelay(3000);

                if (err) {
                    led._id = oldLedId;
                    toast.textContent('Error: ' + err);
                } else
                    toast.textContent('Success');

                this.$mdToast.show(toast);
            });
        }
    }

    angular
        .module('i2r.view.edison-detail')
        .controller('EdisonDetailController', EdisonDetailController);
}
