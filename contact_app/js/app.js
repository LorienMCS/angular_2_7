var app = angular.module("contactApp",['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      })
      .when('/:id/show', {
        templateUrl: 'partials/show.html',
        controller: 'ShowController'
      }).otherwise({
      	redirectTo: '/'
      });
});
