angular.module('alMakinah').controller('managerStudents', function ($scope, $http) {
  $scope.allStudents = [];

  $http.get('http://localhost:3000/manager/students.json').then(
      function(success) {
        console.log(success)
        $scope.allStudents = success.data;
      },
      function(err) {
        console.log(err)
      }
  );
});