// const myApp = angular.module('myApp', ['ng-route']);
const myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl: 'pages/home/home.htm',
    controller: 'homeController'
  })

  .when('/search', {
    templateUrl: 'pages/search.htm',
    controller: 'searchController'
  })
});

myApp.controller('navController', ['$scope', ($scope) => {
  $scope.linkList = [
    {
      text: 'Home',
      path: '#'
    },
    {
      text: 'Search',
      path: '#/search'
    }
  ]
}]);

myApp.controller('homeController', ['$scope', ($scope) => {
  $scope.title = 'Home Page Title'
  $scope.searchInput = ''
}]);

myApp.controller('searchController', ['$scope', ($scope) => {
  $scope.title = 'Search Page';
  $scope.results = ['a', 'b', 'c'];
}]);