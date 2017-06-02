angular.module('alMakinah').controller('studentEditController', function ($scope, $http, $state, AuthService, $stateParams, server) {

  AuthService.logged_in_user().then(function (user) {
    $scope.currentUser = user;
    }, function () {
      $state.go('student');
  });

  $scope.editQuestion = function(){
    // var edit = {
    //   title: $scope.question = $scope.,
    //   body: question.body,
    //   language: question.language
    // }
    $http.put(server + '/student/questions/' + $scope.question.id + '.json', { question: $scope.question }).then(
      function(success){
        question = success.data;
        // toaster.pop('question updated successfully');
        $state.go('studentLayout.studentDash');
      },
      function(err){
        console.log(err);
      })
  }
  $http.get(server + '/student/questions/'+$stateParams.id+'.json').then(
      function(success){
        console.log(success)
        $scope.question = success.data;
        // $scope.title = $scope.question.title;
        // $scope.body = $scope.question.body;
        // $scope.language = $scope.question.language;

        // toaster.pop('question updated successfully');
        // $state.go('studentDash');
      },
      function(err){
        console.log(err);
      }
  );
})
