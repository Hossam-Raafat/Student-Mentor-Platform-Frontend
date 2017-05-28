angular.module('askMak').controller('managerMentorProfile', function($scope,$stateParams,$http){
  console.log($stateParams.id)
  $scope.mentorResolved = [];

  $http.get('http://localhost:3000/manager/questions.json',{ params: { filter: 'resolvedByMentor', mentor_id: $stateParams.id} }).then(
      function(success) {
        console.log(success)
        $scope.mentorResolved = success.data;
        $scope.mentorResolvedCount = $scope.mentorResolved.length;
      },
      function(err) {
        console.log(err)
      }
  );
});
  

