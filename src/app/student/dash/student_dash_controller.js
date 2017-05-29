angular.module('askMak').controller('studentDashController', function ($scope, $http, $state, AuthService, toaster, $window) {

  $scope.resolvedQuestions = [];
  $http.get('http://localhost:3000/student/questions.json', { params: { filter: 'resolved'} }).then(
    function(success) {
      $scope.resolvedQuestions = success.data;
      console.log(success);
    },
    function(err) {
      console.log(err);
    }
  );

  $scope.currentStudentQuestions = [];
  $http.get('http://localhost:3000/student/questions.json').then(
    function(success) {
      $scope.currentStudentQuestions = success.data;
      console.log(success);
    },
    function(err) {
      console.log(err);
    }
  );

  AuthService.logged_in_user().then(function (user) {
    $scope.currentUser = user;
    }, function () {
      $state.go('student');
  });



  $scope.pop = function(){
    toaster.pop('Question successfully deleted');
  }

  $scope.deleteQuestion = function(question){
    $http.delete('http://localhost:3000/student/questions/' + question.id + '.json').then(
      function(success){
        var index = $scope.currentStudentQuestions.indexOf(question);
        $scope.currentStudentQuestions.splice(index, 1);

        toaster.pop('sucessfuly deleted your question', 'ok');
      },
      function(err){
        $window.alert("can't delete calimed or answered questions");
        console.log(err);
      })
      
  }
});
