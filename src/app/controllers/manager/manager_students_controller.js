angular.module('alMakinah').controller('managerStudents', function ($scope, $http, server) {
  $scope.allStudents = [];

  $http.get(server + '/manager/students.json').then(
      function(success) {
        console.log(success)
        $scope.allStudents = success.data;
      },
      function(err) {
        console.log(err)
      }
  );
});