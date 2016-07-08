myApp.controller('homeController', ['$scope' , function($scope){
    $scope.hide= false
    $scope.optionPick = function(){
       var degreTypeBoxValue = document.getElementById('degreTypeBox').value;
        if(degreTypeBoxValue == "Bachelor"){
           $scope.hide = true;  
        }else{
            $scope.hide = false; 
        }
    }
    
    $(document).ready(function() {
        /**changes container size on total size change**/
        
        $(window).resize(function(){
            
            if (parseInt($(window).width()) < 1330){
                $("#degreTypeBox").css({
                    'margin-left': '10px', 
                    
                });
                
                $("#degreTypeLabel").css({
                    'margin-left': '10px', 
                    
                });
                
                $("#subjectAreaBox").css({
                    'margin-left': '40px', 
                    
                });
                
                $("#subjectAreaLabel").css({
                    'margin-left': '40px', 
                    
                });
                
                $("#searchUnvButton").css({
                    'margin-left': '20px', 
                    
                });
                
                $(".lowerNavA").css({
                    'font-size': '15px', 
                    'margin-top': '20px',
                    
                });
                
                $("#homeImg img").css({
                    'width': '80px', 
                    'margin-left': '0px',
                    
                });
                
            }else if(parseInt($(window).width()) > 1330) {
                $("#degreTypeBox").css({
                    'margin-left': '-20px', 
                    
                });

                $("#degreTypeLabel").css({
                    'margin-left': '-20px', 
                    
                });
                
                $("#subjectAreaBox").css({
                    'margin-left': '-20px', 
                });
                
                $("##subjectAreaLabel").css({
                    'margin-left': '-20px', 
                });
                
                $("#searchUnvButton").css({
                    'margin-left': '-110px', 
                    
                });
                
                $(".lowerNavA").css({
                    'font-size': '18px', 
                    'margin-top': '120px',
                    
                });
                
                $("#homeImg img").css({
                    'width': '150px', 
                    'margin-left': '150px',
                    
                });
                
            }
            
        });
        
    });
        
    
}]);