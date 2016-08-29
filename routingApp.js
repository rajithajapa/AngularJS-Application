var app =angular.module('myApp', ['ngRoute']); // The ngRoute module provides routing and deeplinking services and directives for angular apps.

    // configure our routes
    app.config(function ($routeProvider){   //we can use config() method to configure $routeProvider
        $routeProvider   // This service makes it easy to wire together controllers, view templates, and the current URL location in the browser
            .when('/home', {
                templateUrl : 'Views/home.html',  
                controller  : 'mainController'
            })
        
             .when('/login', {
              templateUrl : 'Views/login.html',  
              controller  : 'loginController'
            })
        
           .when('/page1', {
                resolve:{
                   "check": function($location,$rootScope){
                       if(!$rootScope.loggedIn){
                           $location.path('/');
                       } 
                   }
               },
              templateUrl : 'Views/page1.html',  
              controller  : 'pageController'
            })
        
          .when('/page2', {
              templateUrl : 'Views/page2.html',  
              controller  : 'peopleController'
            })
        
        .when('/myService', {
              templateUrl : 'Views/myService.html',  
              controller  : 'CalculatorController'
            })
        .when('/signup', {
              templateUrl : 'Views/signup.html',  
              controller  : 'signupController'
            })
        
            .otherwise({
              redirectTo: '/'
            
        });
    });

    // create the controller and inject Angular's $scope
    app.controller('mainController',['$scope', function($scope) {
        // create a message to display in our view
        $scope.name = 'Everyone come and see how good I look!';
        
    }]);

     // create the controller and inject Angular's $scope
    app.controller('loginController',function($scope,$location,$rootScope) {
        // create a message to display in our view
            $scope.submit= function(){
                
               if($scope.username == 'admin' && $scope.password =='admin') {
                   $rootScope.loggedIn = true; //$rootScope 
                   $location.path('/page1');  
                } else {
                    alert("wrong stuff");
                }
                    
            };
            
        });


 // page1 controller
   app.controller('pageController',['$scope', function($scope,$rootScope) {
        // create a message to display in our view
        $scope.message = 'You are logged in';
        
    }]);
  
// http related controller

app.controller('peopleController',function($scope,$http){
    $http.get('database.json')
    .success(function(response){
        $scope.people = response.records;
    });
});


// custom Directive


  //controller for calculator
app.controller('CalculatorController', function ($scope, Calculator) {
       $scope.findSquare = function () {
        $scope.answer = Calculator.square($scope.number);
           
    }
});

  // service calculator
app.service('Calculator', function () {
    this.square = function (a) { 
        return a*a
    };
});

app.controller('myCont',function($scope,myFactory){
    $scope.name = "Rajitha" ;
    
});

app.factory('myFactory',function(){
    return{
      sayHello: function(name){
          return "Hi" + name +"!"
      }                                                                 
         
    }
});

//signup Controller plus validation
// Defining angularjs application.
   
    // Controller function and passing $http service and $scope var.
    app.controller('signupController', function($scope, $http) {
        $scope.result = "";
	$scope.mySubmit = function() { 
	  console.log($scope.name);
	  var req = {
		 method: 'GET', 
		 url: ''
		};
	  
	  $http(result)
	  .then(function (response) { 
			$scope.result = response.data;
	  });
	}
	
    });

