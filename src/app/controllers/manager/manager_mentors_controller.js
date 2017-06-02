angular.module('alMakinah').controller('managerMentors', function ($scope, $http, server) {
  $scope.allMentors = [];

  $http.get(server + '/manager/mentors.json').then(
      function(success) {
        console.log(success)
        $scope.allMentors = success.data;
      },
      function(err) {
        console.log(err)
      }
  );
});