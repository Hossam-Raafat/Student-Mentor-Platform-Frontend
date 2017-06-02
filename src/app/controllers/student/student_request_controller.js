angular.module('alMakinah').controller('studentRequestController', function ($scope, $http, $state, AuthService, Upload, server) {

  AuthService.logged_in_user().then(function (user) {
    $scope.currentUser = user;
    }, function () {
      $state.go('student');
  });


  $scope.addQuestion = function(){
    var add = {
      title: $scope.titleForm,
      body: $scope.bodyForm,
      language: $scope.languageForm,
      screenshot: $scope.screenshotForm
    }

    Upload.upload({
      url: server + '/student/questions.json',
      method: 'post',
      data: { question: add }
    }).then(
      function(success){
        console.log(success);
        $state.go('studentLayout.studentDash');
      },
      function(err){
        console.log(err);
    });
  }
});