myApp.factory('DataService', ['$http', function($http) {
    
    // App configurations
    var getExampleData = function() {
        return $http.get("/api/example", null);
    };

    var getAvgDaily = function() {
        return $http.get("/api/avg", null);
    };

    return {
        // app and them configurations
        getExampleData: getExampleData,
        getAvgDaily: getAvgDaily,
    };
}]);