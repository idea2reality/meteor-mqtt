namespace i2r {
    let dependencies = [
        'ngMaterial',
        'angular-meteor',
        'i2r.component',
        'i2r.view',
        'ui.router'
    ];

    angular.module('i2r', dependencies);

    angular.element(document).ready(bootstrap);

    function bootstrap() {
        angular.bootstrap(document, ['i2r'], {
            strictDi: true
        });
    }
}
