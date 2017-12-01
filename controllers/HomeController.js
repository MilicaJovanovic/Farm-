app.controller('homeController', ['$scope', 'functions', '$http', '$location',
    function($scope, functions, $http, $location) {

    $scope.open = true;
    $scope.expanded = true;
    $scope.loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
    if ($scope.loggedUser == null) {
        $location.path('/index');
    }

    $scope.logout = function() {
        localStorage.removeItem('loggedUser');
        $location.path('/index');
    }

    $scope.toggleSidebar = function() {
        $scope.open = !$scope.open;
        console.log($scope.open);
    }

    $scope.toggleCollapse = function() {
        $(".sidebar-sub-button").toggle();
        $scope.expanded = !$scope.expanded;
    }

    $scope.objects = [
        {id: 1, name: "1st"},  {id: 2, name: "2nd"},  {id: 3, name: "3rd"},
        {id: 4, name: "4th"},  {id: 5, name: "5th"},  {id: 6, name: "6th"},
        {id: 7, name: "7th"},  {id: 8, name: "8th"},  {id: 9, name: "9th"},
        {id: 10, name: "10th"},{id: 11, name: "11th"},{id: 12, name: "12th"}
      ]

    $scope.totalItems = $scope.objects.length;
    $scope.currentPage = 1;
    $scope.numPerPage = 10;
    $scope.searchQuery = '';
  
    $scope.paginate = function(value) {
        var begin, end, index;
        begin = ($scope.currentPage - 1) * $scope.numPerPage;
        end = begin + $scope.numPerPage;
        index = $scope.objects.indexOf(value);
        return (begin <= index && index < end);
    };

    $scope.customFilter = function() {
        return $scope.paginate() && $scope.searchQuery;
    }
}]);