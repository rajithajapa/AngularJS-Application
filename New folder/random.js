var app =angular.module('myApp', ['ngRoute']); 

    // configure our routes
    app.config(function ($routeProvider){   
        $routeProvider   
        .when('/home', {
                templateUrl : 'home.html',  
                controller  : 'HomeController'
            })
	
	.when('/blog',{
		templateUrl:'blog.html',
		controller: 'BlogController'
	})
	
	.when('/about',{
		templateUrl:'about.html',
		controller: 'AboutController'
	})
	
	.otherwise({
            redirectTo: '/'
        });
});


app.controller('HomeController',['$scope',function($scope){
	   $scope.message="Welcome Home girl";
}]);

app.controller('BlogController',['$scope',function($scope){
	   $scope.message="Welcome Home girl";
}]);

app.controller('AboutController',['$scope',function($scope){
	   $scope.message="Welcome Home girl";
}]);