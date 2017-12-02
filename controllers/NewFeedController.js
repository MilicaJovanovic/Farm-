app.controller('newFeedController', ['$scope', 'functions', '$http', '$location', '$rootScope',
    function($scope, functions, $http, $location, $rootScope) {

    $scope.selectOptions = [
        'Forage',
        'Cereals and Cereal by-products',
        'Plant and Animal Protein',
        'By-Products/Other Feeds',
        'Concentrate Mixtures',
        'Fats and oils',
        'Vitamin and mineral products'
    ];
    $scope.selectNames = [];
    $scope.selectQuery = '';
    $scope.selectName = '';
    $scope.descriptionConst = 'CONCENTRATE';
    $scope.selected = false;
    $scope.currentFeed = JSON.parse(localStorage.getItem('currentFeed'));
    $scope.editing = false;
    
    if ($scope.currentFeed == null) {
        $scope.currentFeed = {
            selectedName : '',
            name : '',
            default : true,
            supplier : '',
            feedCategory : '',
            ifn : '',
            cost : 0,
            description : '',
            paf : 0,
            cl : 0,
            phe : 0
        };
    } else {
        $scope.selectName = $scope.currentFeed.selectedName;
        $scope.selectQuery = $scope.currentFeed.feedCategory;
        $("#general").hide();
        $scope.editing = true;
    }

    $scope.$watch('selectQuery', function() {
        switch ($scope.selectQuery) {
            case 'Forage':
                $scope.selectNames = [
                    'Bermudagrass hay, Tifton-85',
                    'Grass Silage, C-3, mid mat.',
                    'Legume Forage hay, mid mat.'
                ];
                break;
            case 'Cereals and Cereal by-products':
                $scope.selectNames = [
                    'Cereal by-product',
                    'Wheat Grain, rolled',
                    'Barley Grain, rolled'
                ];
                break;
            case 'Plant and Animal Protein':
                $scope.selectNames = [
                    'Blood Meal, batch dried',
                    'Blood Meal, ring dried',
                    'Canola Seeds, ground'
                ];
                break;
            case 'By-Products/Other Feeds':
                $scope.selectNames = [
                    'Cottonseed, Hulls',
                    'Citrus Pulp dried',
                    'Apple Pomace wet'
                ];
                break;
            case 'Concentrate Mixtures':
                $scope.selectNames = [
                    'Protein concentrate for lactating cows 30% CP',
                    'Concentrate Mixture for lactating cows 18% CP',
                    'Concentrate Mixture for dry cows 16% CP'
                ];
                break;
            case 'Fats and oils':
                $scope.selectNames = [
                    'Vegetable oil',
                    'Tallow',
                    'Hydrol.Tallow fatty acids'
                ];
                break;
            case 'Vitamin and mineral products':
                $scope.selectNames = [
                    'Potassium Bicarbonate',
                    'Limestone',
                    'Zinc Oxide'
                ];
                break;
            default:
                $scope.selectNames = [];
        }
    });

    $scope.$watch('selectName', function() {
        if ($scope.selectName != '') {
            $scope.selected = true;
        }
    });

    $scope.saveOrUpdate = function() {
        if ($scope.currentFeed.name == '' || $scope.currentFeed.supplier == '') {
            alert("Please input feed name and supplier.");
        } else {
            $scope.currentFeed.selectedName = $scope.selectName;
            $scope.currentFeed.feedCategory = $scope.selectQuery;

            let databaseFeeds = JSON.parse(localStorage.getItem('feeds'));

            if (databaseFeeds == null) {
                databaseFeeds = [];
                $scope.saveFeed(databaseFeeds);
            } else {
                let existing = $scope.findFeed(databaseFeeds);
                if (existing) {
                    if ($scope.editing) {
                        $scope.editFeed(databaseFeeds);
                    } else {
                        alert("Feed with the same name already exists!");
                    }
                } else {
                    $scope.saveFeed(databaseFeeds);
                }
            }
        }
    };

    $scope.findFeed = function(databaseFeeds) {
        let existing = false;
        for (var feed of databaseFeeds) {
            if (feed.name == $scope.currentFeed.name) {
                existing = true;
            }
        }

        return existing;
    };

    $scope.saveFeed = function(databaseFeeds) {
        databaseFeeds.push($scope.currentFeed);
        localStorage.setItem('feeds', JSON.stringify(databaseFeeds));
        localStorage.removeItem('currentFeed');

        $rootScope.toPage('feeds');
    };

    $scope.editFeed = function(databaseFeeds) {
        for (var feed of databaseFeeds) {
            if (feed.name == $scope.currentFeed.name) {
                feed.supplier = $scope.currentFeed.supplier;
                feed.cost = $scope.currentFeed.cost;
            }
            localStorage.setItem('feeds', JSON.stringify(databaseFeeds));
            $rootScope.toPage('feeds');
        }
    };
}]);