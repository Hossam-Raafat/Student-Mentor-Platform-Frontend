angular.module('alMakinah').controller('managerStudentProfile', function($scope,$stateParams,$http, server){
  console.log($stateParams.id)
  $scope.studentQuestions = [];

  $http.get(server + '/manager/questions.json',{ params: { filter: 'submittedByStudent', student_id: $stateParams.id} }).then(
      function(success) {
        console.log(success)
        $scope.studentQuestions = success.data;
        $scope.studentQuestionsCount = $scope.studentQuestions.length;
      },
      function(err) {
        console.log(err)
      }
  );
});
  

