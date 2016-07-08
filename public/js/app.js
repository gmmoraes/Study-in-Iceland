var myApp = angular.module('myApp', [
    'ui.router']).
    /**
    config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
        $routeProvider.when('/home', {templateUrl: '/partials/home.html', controller: 'homeController'});
        $routeProvider.when('/why-iceland', {templateUrl: '/partials/whyiceland.html', controller: 'whyicelandController'});
        $routeProvider.when('/living-iceland', {templateUrl: '/partials/livingIceland.html', controller: 'livingIcelandController'});
        //$routeProvider.when('/living-iceland/:residence-permit?', {templateUrl: '/partials/livingIceland.html', controller: 'livingIcelandController'});
        $routeProvider.when('/learn-icelandic', {templateUrl: '/partials/learnIcelandic.html', controller: 'learnIcelandicController'});
        $routeProvider.when('/travelin-Iceland', {templateUrl: '/partials/travelinIceland.html', controller: 'travelinIcelandController'});
        

        $routeProvider.otherwise({redirectTo: '/home'});
        $locationProvider.html5Mode({enabled: true, requireBase: false});
        
    }])
    **/
    
    config(function($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise("/home");
        $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "partials/home.html",
            controller: 'homeController'
            
        })
        
        .state('why-iceland', {
            url: "/why-iceland",
            templateUrl: "partials/whyiceland.html",
            controller: 'whyicelandController'
            
        })

        .state('living-iceland', {
            url: "/living-iceland",
            templateUrl: "partials/livingIceland.html",
            controller: 'livingIcelandController'
            
        })
        
        .state("residence-permit", {
            parent: 'living-iceland',
            url: '/residence-permit',
            controller: 'livingIcelandController',
            templateUrl: 'partials/livingIceland/residencepermit.html'
            
        })
        
        .state("non-eu-eea", {
            parent: 'residence-permit',
            url: '/non-eu-eea',
            controller: 'livingIcelandController',
            templateUrl: 'partials/livingIceland/residencePermit/noneueea.html'
            
        })
        
        .state("eu-eea", {
            parent: 'residence-permit',
            url: '/eu-eea',
            controller: 'livingIcelandController',
            templateUrl: 'partials/livingIceland/residencePermit/eueea.html'
            
        })
        
        .state("municipality", {
            parent: 'residence-permit',
            url: '/municipality',
            controller: 'livingIcelandController',
            templateUrl: 'partials/livingIceland/residencePermit/municipality.html'
            
        })

        .state("health", {
            parent: 'living-iceland',
            //url: '/home/wizard',
            url: '/health',
            controller: 'livingIcelandController',
            templateUrl: 'partials/livingIceland/health.html'
            
        })
        
        .state("medical-examination", {
            parent: 'health',
            url: '/medical-examination',
            controller: 'livingIcelandController',
            templateUrl: 'partials/livingIceland/health/medicalexamination.html'
            
        })
        
        .state("health-care", {
            parent: 'health',
            url: '/health-care',
            controller: 'livingIcelandController',
            templateUrl: 'partials/livingIceland/health/healthcare.html'
            
        })
        
        .state("arrival", {
            parent: 'living-iceland',
            url: '/arrival',
            controller: 'livingIcelandController',
            templateUrl: 'partials/livingIceland/arrival.html'
            
        })  
        
        .state("accommodation", {
            parent: 'living-iceland',
            url: '/accommodation',
            controller: 'livingIcelandController',
            templateUrl: 'partials/livingIceland/accommodation.html'
            
        })
        
        .state("cost-of-living", {
            parent: 'living-iceland',
            url: '/cost-of-living',
            controller: 'livingIcelandController',
            templateUrl: 'partials/livingIceland/costofliving.html'
            
        })
        
        .state("work-in-Iceland", {
            parent: 'living-iceland',
            url: '/work-in-Iceland',
            controller: 'livingIcelandController',
            templateUrl: 'partials/livingIceland/workinIceland.html'
            
        })
        
        .state("practicalities", {
            parent: 'living-iceland',
            url: '/practicalities',
            controller: 'livingIcelandController',
            templateUrl: 'partials/livingIceland/practicalities.html'
            
        })
        
        .state("survival-vocabulary", {
            parent: 'living-iceland',
            url: '/survival-vocabulary',
            controller: 'livingIcelandController',
            templateUrl: 'partials/livingIceland/survivalvocabulary.html'
            
        })
        
        .state("useful-links", {
            parent: 'living-iceland',
            url: '/useful-links',
            controller: 'livingIcelandController',
            templateUrl: 'partials/livingIceland/usefullinks.html'
            
        })
        
        .state('study-in-iceland', {
            url: "/study-in-iceland",
            templateUrl: "partials/studyiniceland.html",
            controller: 'studyinicelandController'
            
        })
        
        .state("credits-and-degree", {
            parent: 'study-in-iceland',
            url: '/credits-and-degree',
            controller: 'studyinicelandController',
            templateUrl: 'partials/studyiniceland/creditsanddegree.html'
            
        })
        
        .state("fees-and-scholarships", {
            parent: 'study-in-iceland',
            url: '/fees-and-scholarships',
            controller: 'studyinicelandController',
            templateUrl: 'partials/studyiniceland/feesandscholarships.html'
            
        })
        
        .state("programmes-english", {
            parent: 'study-in-iceland',
            url: '/programmes-english',
            controller: 'studyinicelandController',
            templateUrl: 'partials/studyiniceland/programmesenglish.html'
            
        })
        
        .state("masters", {
            parent: 'programmes-english',
            url: '/masters',
            controller: 'studyinicelandController',
            templateUrl: 'partials/studyiniceland/masters/masters.html'
            
        })
        
        .state("phd", {
            parent: 'programmes-english',
            url: '/phd',
            controller: 'studyinicelandController',
            templateUrl: 'partials/studyiniceland/phd/phd.html'
            
        })
        
        .state("summer-schools", {
            parent: 'study-in-iceland',
            url: '/summer-schools',
            controller: 'studyinicelandController',
            templateUrl: 'partials/studyiniceland/summerschools.html'
            
        })
        
        .state('learn-icelandic', {
            url: "/learn-icelandic",
            templateUrl: "partials/learnIcelandic.html",
            controller: 'learnIcelandicController'
            
        })
        
        .state("language-course", {
            parent: 'learn-icelandic',
            url: '/language-course',
            controller: 'livingIcelandController',
            templateUrl: 'partials/learnIcelandic/languagecourse.html'
            
        })
        
        .state('travelin-Iceland', {
            url: "/travelin-Iceland",
            templateUrl: "partials/travelinIceland.html",
            controller: 'travelinIcelandController'
            
        })
        
        .state("travel-safe", {
            parent: 'travelin-Iceland',
            url: '/travel-safe',
            controller: 'livingIcelandController',
            templateUrl: 'partials/travelIceland/travelsafe.html'
            
        })
        
        .state("recommended", {
            parent: 'travelin-Iceland',
            url: '/recommended',
            controller: 'livingIcelandController',
            templateUrl: 'partials/travelIceland/recommended.html'
            
        })
        
        .state("useful-links-travel", {
            parent: 'travelin-Iceland',
            url: '/useful-links',
            controller: 'livingIcelandController',
            templateUrl: 'partials/travelIceland/usefullinks.html'
            
        })
        

        $locationProvider.html5Mode({enabled: true, requireBase: false});
    });
    