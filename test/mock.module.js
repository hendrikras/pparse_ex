
(function () {
    'use strict';

    angular.module('mockedApp', [
        'app',
        'ngMockE2E'
    ]).run(configureMocks);

    function configureMocks($httpBackend, $rootScope, $window) {

        $httpBackend.whenGET(/\D+(\.(html))$/).passThrough();

        $httpBackend.whenGET('/resources').respond(function (method, url, data) {
            var request = new XMLHttpRequest();

            request.open('GET', '/test/mocks/resources/ok.json', false);
            request.send(null);

            return [request.status, request.response, {}];
        });
    }

})();
