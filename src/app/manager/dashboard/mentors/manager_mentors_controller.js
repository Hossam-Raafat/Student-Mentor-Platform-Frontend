angular.module('askMak').controller('managerMentors', function ($scope, $http) {
  $scope.allMentors = [];

  $http.get('http://localhost:3000/manager/mentors.json').then(
      function(success) {
        console.log(success)
        $scope.allMentors = success.data;
      },
      function(err) {
        console.log(err)
      }
  );
});