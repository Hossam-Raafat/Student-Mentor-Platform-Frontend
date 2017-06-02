angular.module('alMakinah').controller('studentDashController', function ($scope, $http, $state, AuthService, $window, $stateParams, server, toaster) {
  
  AuthService.logged_in_user().then(function (user) {
    $scope.currentUser   = user;
    }, function () {
      $window.alert("please sign in to view this page");
      $state.go('studentLayout.student');
  });

  $scope.resolvedQuestions = [];
  $http.get(server + '/student/questions.json', { params: { filter: 'resolved'} }).then(
    function(success) {
      $scope.resolvedQuestions = success.data;
      console.log(success.data);
    },
    function(err) {
      console.log(err);
    }
  );

  $scope.currentStudentQuestions = [];
  $http.get(server + '/student/questions.json').then(
    function(success) {
      $scope.currentStudentQuestions = success.data;
      console.log(success);
    },
    function(err) {
      console.log(err);
    }
  );

  // $scope.pop = function(){
  //   toaster.pop('Question successfully deleted');
  // }

  $scope.deleteQuestion = function(question){
    $http.delete(server + '/student/questions/' + question.id + '.json').then(
      function(success){
        var index = $scope.currentStudentQuestions.indexOf(question);
        $scope.currentStudentQuestions.splice(index, 1);

        toaster.pop('sucessfuly deleted your question', "ok");
      },
      function(err){
        $toaster.pop("can't delete calimed or answered questions");
        console.log(err);
      })
      
  }
  $scope.upVoteQuestion = function(question){
    $http.post(server + '/student/questions/' + question.id + '/votes.json',{ filter: 'upvote' } ).then(
      function(success){
        console.log(success);
        question.get_downvotes = success.data.get_downvotes;
        question.get_upvotes = success.data.get_upvotes;

        toaster.pop('Upvoted', "ok");
      },
      function(err){
        console.log(err);
      })
  }
  $scope.downvoteVoteQuestion = function(question){
    $http.post(server + '/student/questions/' + question.id + '/votes.json').then(
      function(success){
        console.log(success);
        question.get_downvotes = success.data.get_downvotes;
        question.get_upvotes = success.data.get_upvotes;
        toaster.pop('Upvoted', "ok");

      },
      function(err){
        console.log(err);
      })
  }
});
