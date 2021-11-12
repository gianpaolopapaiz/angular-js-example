require('dotenv').config()

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

myApp.controller('searchController', ['$scope', '$resource', ($scope, $resource) => {
  $scope.title = 'Search Page';
  $scope.searchInput = '';
  $scope.recipes = '';
  
  $scope.handleClick = () => {
    const url = 'https://tasty.p.rapidapi.com/recipes/list';
    const headers = {
      'x-rapidapi-host': 'tasty.p.rapidapi.com',
      'x-rapidapi-key': process.env.RAPID_API_KEY,
      useQueryString: true
    };
    let actions = {
      getList: {method: 'GET', params: {q: $scope.searchInput}, headers: headers}
    };
    const getRecipes = $resource(url, [], actions);
    getRecipes.getList().$promise.then((response) => {
      $scope.recipes = response.results.filter((result) => result.beauty_url);
      console.log($scope.recipes);
    });
  }

  $scope.clearSearch = () => {
    $scope.searchInput = '';
    $scope.recipes = '';
  }
}]);
