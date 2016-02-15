describe('given the contestantsCtrl', function () {

    var $rootScope, $scope, $controller, $q;
    var ctrl, contestantsService;
    beforeEach(module('app.contestants'));
    beforeEach(inject(function (_$rootScope_, _$controller_, _contestantsService_, _$q_) {
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        $controller = _$controller_;
        $q = _$q_;

        contestantsService = _contestantsService_;
        spyOn(contestantsService, 'getContestants');
    }));

    describe('when initializing the controller', function () {
        beforeEach(function () {
            ctrl = $controller('ContestantsController as contestantsController', {$scope: $scope});
        });

        it('should compare the filter value', function () {
            ctrl.minimum = 0;
            expect(ctrl.isBiggerThenMinimum({Age:1})).toBeTruthy();
        });

        describe('and call fails', function () {
            beforeEach(function () {
                contestantsService.getContestants.and.callFake(function () {
                    return $q.reject('error');
                });
                ctrl = $controller('ContestantsController as contestantsController', {$scope: $scope});
                ctrl.handleFile(null);
            });
            it('should return error', function () {
                $scope.$apply();
                expect(ctrl.error).toBeDefined();
            })

        })
    });

});
