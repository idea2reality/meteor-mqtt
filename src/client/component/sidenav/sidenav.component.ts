namespace i2r.component.sidenav {
    angular.module('i2r.component.sidenav', [])
        .directive('i2rSidenav', () => new SidenavComponent());

    class SidenavComponent implements ng.IDirective {
        scope = {};
        restrict = 'E';
        templateUrl = 'client/component/sidenav/sidenav.tpl.html';
        replace = true;
        controllerAs = 'vm';
        controller = SidenavComponentController;
    }

    class SidenavComponentController {

        /* Properties */
        helpers;
        subscribe;
        edisons: any[];

        /* Services */
        $mdSidenav;

        static $inject = ['$scope', '$reactive', '$mdSidenav'];
        constructor($scope, $reactive, $mdSidenav) {
            $reactive(this).attach($scope);

            this.subscribe('devices');

            this.$mdSidenav = $mdSidenav;

            this.helpers({
                edisons: () => {
                    return Devices.find({});
                }
            });
        }

        toogleSidenav = this.buildToggler('left');

        private buildToggler(navID) {
            return function() {
                this.$mdSidenav(navID)
                    .toggle();
            }
        }
    }
}
