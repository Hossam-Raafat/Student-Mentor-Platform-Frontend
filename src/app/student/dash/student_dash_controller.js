angular.module('askMak').controller('studentDashController', function ($scope, $http) {
  $scope.questionData = [];
  $http.get('http://localhost:3000/student/questions.json').then(
    function(success) {
      console.log(success);
      $scope.questionData = success.data;
    },
    function(err) {
      console.log(err);
    }

    )
});
