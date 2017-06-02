angular.module('alMakinah').controller('studentViewQuestionController', function ($scope, $http, $state, AuthService, $stateParams) {

  AuthService.logged_in_user().then(function (user) {
    $scope.currentUser = user;
    }, function () {
      $state.go('student');
  });

   $scope.back = function(){
    $state.go('studentLayout.studentDash');
  }


  $http.get('http://localhost:3000/student/questions/'+$stateParams.id+'.json').then(
    function(success){
      console.log(success)
      $scope.question = success.data;
    },
    function(err){
      console.log(err);
    }
  );
  $scope.upVoteQuestion = function(question){
    $http.post('http://localhost:3000/student/questions/' + question.id + '/votes.json',{ filter: 'upvote' } ).then(
      function(success){
        console.log(success);
        question.get_downvotes = success.data.get_downvotes;
        question.get_upvotes = success.data.get_upvotes;
      },
      function(err){
        console.log(err);
      })
  }
  $scope.downvoteVoteQuestion = function(question){
    $http.post('http://localhost:3000/student/questions/' + question.id + '/votes.json').then(
      function(success){
        console.log(success);
        question.get_downvotes = success.data.get_downvotes;
        question.get_upvotes = success.data.get_upvotes;
      },
      function(err){
        console.log(err);
      })
  }
})
