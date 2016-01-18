namespace i2r.component.view {
    angular.module('i2r.component.view', [])
        .directive('i2rView', () => new ViewComponent());

    class ViewComponent implements ng.IDirective {
        restrict = 'E';
        templateUrl = 'client/component/view/view.tpl.html';
        replace = true;
        controllerAs = 'vm';
        controller = ViewComponentController;
    }

    class ViewComponentController {

        $mdSidenav;

        static $inject = ['$mdSidenav'];
        constructor($mdSidenav) {
            this.$mdSidenav = $mdSidenav;
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
