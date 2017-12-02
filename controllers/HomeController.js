app.controller('homeController', ['$scope', 'functions', '$http', '$location', '$rootScope',
    function($scope, functions, $http, $location, $rootScope) {

    $scope.open = true;
    $scope.expanded = true;
    $scope.loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
    $rootScope.currentPage = sessionStorage.getItem('currentPage');

    if ($scope.loggedUser == null) {
        $location.path('/index');
    };
    if ($scope.currentPage == null) {
        $scope.currentPage = 'feeds';
    }

    $scope.logout = function() {
        localStorage.removeItem('loggedUser');
        sessionStorage.removeItem('currentPage');
        $location.path('/index');
    };

    $scope.toggleSidebar = function() {
        $scope.open = !$scope.open;
        console.log($scope.open);
    };

    $scope.toggleCollapse = function() {
        $(".sidebar-sub-button").toggle();
        $scope.expanded = !$scope.expanded;
    };

    $rootScope.toPage = function(page) {
        $scope.currentPage = page;
        sessionStorage.setItem('currentPage', page);
    }
}]);