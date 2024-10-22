angular.module('carApp', [])
  .controller('CarController', function ($scope, $http) {
    // Fetching data using GET method
    $http({
      method: "GET",
      url: "cars.json"
    })
      .then(function (response) {
        $scope.cars = response.data;
      })
      .catch(function (error) {
        console.error('Error fetching data:', error);
      });
  });
