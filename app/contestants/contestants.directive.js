(function () {

    angular
        .module('app.contestants')
        .directive('contestantComponent', contestantDirective);

    function contestantDirective() {
        return {
            restrict: 'E',
            templateUrl: 'contestants/contestantComponent.html'
        };

    }
})();
