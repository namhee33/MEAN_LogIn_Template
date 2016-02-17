myApp.config(function($routeProvider){

	 $routeProvider
	 		.when('/', {
	 			redirectTo: '/login'
	 		})
	        .when('/login',{
	            templateUrl: './../static/partials/login.html',
	        })
	        .when('/main',{
	            templateUrl: './../static/partials/main.html',
	            controller: 'mainController as mc'
	        })
	        .otherwise({
	          redirectTo: '/'
	        });
})