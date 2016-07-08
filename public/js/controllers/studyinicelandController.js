myApp.controller('studyinicelandController', ['$scope', '$rootScope', function($scope,$rootScope){
    
    //vou usar hide and show em vez de scroll
    $scope.scrollTo = function(){
        var degreTypeBoxValue = document.getElementById('degreTypeBox').value;
        if(degreTypeBoxValue == "Bachelor"){
            $scope.hrefs = "study-in-iceland/programmes-english";
        }else{
            $scope.hrefs = "study-in-iceland/programmes-english/masters";  
        }
        
        var value = document.getElementById('subjectAreaBox').value;
        $scope.executed = false;
        $rootScope.$on('$stateChangeSuccess', 
        function(event, toState, toParams, fromState, fromParams){
            if ($scope.executed == false){
                //window.scrollTo(0, 2000);
                document.getElementById(value.replace(/ /g,'')).scrollIntoView();
                $scope.executed = true;
            }else{
                event.preventDefault(); 
            }
        });

    }
    

    
}]);