angular.module('alMakinah').controller('managerMentorProfile', function($scope,$stateParams,$http, server){
  console.log($stateParams.id)
  $scope.mentorResolved = [];

  $http.get(server + '/manager/questions.json',{ params: { filter: 'resolvedByMentor', mentor_id: $stateParams.id} }).then(
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
  

