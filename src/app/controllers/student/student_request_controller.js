angular.module('alMakinah').controller('studentRequestController', function ($scope, $http, $state, AuthService) {

  AuthService.logged_in_user().then(function (user) {
    $scope.currentUser = user;
    }, function () {
      $state.go('student');
  });


  $scope.addQuestion = function(){
    var add = {
      title: $scope.titleForm,
      body: $scope.bodyForm,
      language: $scope.languageForm
  }
  $http.post('http://localhost:3000/student/questions.json', {question: add}).then(
    function(success){
      console.log(success);
      $state.go('studentLayout.studentDash');
    },
    function(err){
      console.log(err);
    }
  )
  }
});