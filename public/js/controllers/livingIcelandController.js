myApp.controller('livingIcelandController', ['$scope', '$location', function($scope, $location){
    $scope.isActive = function(destination){
        return destination === $location.path();
    }
    $scope.getClass = function (link, destination) {
        if(link === '/') {
            if($location.path() === destination) {
            return "active";
            } else {
                return "";
            }
        }
    }
}]);