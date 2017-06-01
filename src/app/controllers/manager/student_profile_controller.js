angular.module('alMakinah').controller('managerStudentProfile', function($scope,$stateParams,$http){
  console.log($stateParams.id)
  $scope.studentQuestions = [];

  $http.get('http://localhost:3000/manager/questions.json',{ params: { filter: 'submittedByStudent', student_id: $stateParams.id} }).then(
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
  

