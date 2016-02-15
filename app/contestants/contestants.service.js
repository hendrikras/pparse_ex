angular
    .module('app.contestants')
    .factory('contestantsService', contestantsService);

contestantsService.$inject = ['$q'];
/* @ngInject */
function contestantsService($q) {
    return {
        getContestants: getContestants,
        parseCSV: parseCSV,
        getSuccess: getSuccess
    };

    function parseCSV(file) {
        return $q(function(resolve, reject) {
            Papa.parse(file, {
                complete: resolve,
                error: reject,
                delimiter: ',',
                dynamicTyping: true,
                header:true,
                fields: ['Name', 'Sirname', 'Age', 'Occupation']
            });
        });
    }

    function getContestants(files) {
        console.log('runContestants!');
        if (files.length > 0) {
            var file = files[0];
            return parseCSV(file).then(getSuccess, getFail);
        }
    }

    function getSuccess(results) {
        try {
            console.info(results);
            if (results.meta.fields[0] !== 'Name') {
                throw 'invalid data';
            }
            return results.data;
        }catch (err) {
            console.error(err);
            return;
        }
    }

    function getFail(error) {
        console.error('fail');
        return $q.reject(error);
    }
}
