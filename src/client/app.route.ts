namespace i2r {
    angular
        .module('i2r')
        .config(($urlRouterProvider, $stateProvider, $locationProvider) => {
            $locationProvider.html5Mode(true);

            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: 'client/view/home.view.html'
                })
                .state('edisonDetail', {
                    url: '/edison/:edisonId',
                    templateUrl: 'client/view/edison-detail.view.html',
                    controllerAs: 'vm',
                    controller: 'EdisonDetailController'
                })

            $urlRouterProvider.otherwise("/home");
        });
}
