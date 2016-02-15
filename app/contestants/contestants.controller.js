(function () {
    'use strict';

    angular
        .module('app.contestants')
        .controller('ContestantsController', ContestantsController);

    ContestantsController.$inject = ['contestantsService'];

    function ContestantsController(contestantsService) {
        var vm = this;
        vm.minimum = 0;

        function activate(result) {
            if (result) {
                vm.contestants = result;
                console.info('contest', vm.contestants);
            } else {
                fail('invalid format');
            }
        }

        function fail(error) {
            vm.error = error;
            console.error(vm.error);
        }

        vm.isBiggerThenMinimum = function(el) {
            return vm.minimum <= el.Age;
        };

        vm.handleFile = function(files) {
            contestantsService.getContestants(files).then(activate, fail);
        };
    }
})();
