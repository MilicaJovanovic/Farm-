app.controller('indexController', ['$scope', 'functions', '$http', '$location',
    function($scope, functions, $http, $location) {

    $scope.user = {
        username : '',
        password : ''
    };

    $scope.login = function() {
        let result = functions.login($scope.user);

        if (result) {
            let loggedUser = {
                username : $scope.user.username,
                loginTime : new Date()
            }
            localStorage.setItem('loggedUser', JSON.stringify(loggedUser));
            $location.path('/home');
        } else {
            alert("You have entered incorrect data, please try again.");
        }
    };
}]);