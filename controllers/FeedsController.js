app.controller('feedsController', ['$scope', 'functions', '$http', '$location', '$rootScope',
    function($scope, functions, $http, $location, $rootScope) {

    $scope.objects = JSON.parse(localStorage.getItem('feeds'));
    if ($scope.objects == null) {
        $scope.objects = [];
    }
    
    $scope.selectOptions = [
        'Forage',
        'Cereals and Cereal by-products',
        'Plant and Animal Protein',
        'By-Products/Other Feeds',
        'Concentrate Mixtures',
        'Fats and oils',
        'Vitamin and mineral products'
    ];
    $scope.totalItems = $scope.objects.length;
    $scope.currentPage = 1;
    $scope.numPerPage = 10;
    $scope.searchQuery = '';
    $scope.selectQuery = '';
    $scope.radioQuery = '';

    $('input[name="radgroup"]').change(function() {
       $scope.radioQuery = this.value;
       $scope.$apply();
    });
  
    $scope.paginate = function(value) {
        var begin, end, index;
        begin = ($scope.currentPage - 1) * $scope.numPerPage;
        end = begin + $scope.numPerPage;
        index = $scope.objects.indexOf(value);
        return (begin <= index && index < end);
    };

    $scope.customFilter = function() {
        return $scope.paginate() && $scope.searchQuery;
    };

    $scope.edit = function(feed) {
        localStorage.setItem('currentFeed', JSON.stringify(feed));
        $rootScope.toPage('newFeed');
    };

    $scope.newFeed = function() {
        localStorage.removeItem('currentFeed');
        $rootScope.toPage('newFeed');
    };
}]);