const myApp = angular.module('myApp', ['ngRoute', 'ngResource']);

myApp.config(function ($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl: 'pages/home/home.htm',
    controller: 'homeController'
  })

  .when('/search', {
    templateUrl: 'pages/search/search.htm',
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
  $scope.recipes = [
    {
      name: 'chocolate',
      time: 'fast'
    },
    {
      name: 'tomato',
      time: 'slow'
    }
  ];

  $scope.searchInput = '';
  $scope.recipeSearch = '';
  
  $scope.handleClick = () => {
    $scope.recipeSearch = $scope.recipes.filter((recipe) => recipe.name === $scope.searchInput);
  }

  $scope.clearSearch = () => {
    $scope.searchInput = '';
    $scope.recipeSearch = [];
  }
}]);
