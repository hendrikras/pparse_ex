describe('given the contestantsService', function () {
    var contestantsService;
    beforeEach(module('app.contestants'));
    beforeEach(inject(function (_$rootScope_, _contestantsService_) {
        contestantsService = _contestantsService_;
    }));

    it('should return when input is invalid', function () {
        results = {meta:{fields:['Test']}};
        expect(contestantsService.getSuccess(results)).toBeUndefined();
    });

    it('should return data when input is valid', function () {
        results = {meta:{fields:['Name']}, data:'test'};
        expect(contestantsService.getSuccess(results)).toBe('test');
    });
});
