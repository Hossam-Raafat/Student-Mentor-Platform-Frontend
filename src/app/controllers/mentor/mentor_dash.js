angular.module('alMakinah').controller('mentorDashController', function ($scope, $http, AuthService, $stateParams) {
  $scope.unclaimedQuestions = [];
  $scope.claimedQuestions = [];
  $scope.questions = [];
  // create button that will make update request (change status of question ) and delete question from unclaimedQuestions array in frontend

  AuthService.logged_in_user().then(function(user){
    $scope.mentor = user;
  });

  // $http.get('http://localhost:3000/mentor/questions.json', { params: { filter: 'unclaimed'} } )
  // .then(
  //     function(success) {
  //       $scope.unclaimedQuestions = success.data;
  //     },
  //     function(err) {
  //       console.log(err);
  //     }
  // )

  $http.get('http://localhost:3000/mentor/questions.json')
  .then(function(success) {
    $scope.claimedQuestions = success.data['claimed'];
    console.log(success.data['claimed']);
    $scope.unclaimedQuestions = success.data['unclaimed'];
    console.log(success.data['unclaimed']);
    $scope.questions = success.data['resolved'];
    console.log(success.data);
    },
    function(err) {
      console.log(err);
    })

  $scope.claimQuestion = function (question) {
    $http.post('http://localhost:3000/mentor/responses.json', {response: { question_id: question.id}})
    .then(function(success) {
      console.log(success);
      var questionIndex = $scope.unclaimedQuestions.indexOf(question);
      $scope.unclaimedQuestions.splice(questionIndex, 1);
      $scope.claimedQuestions.push(question);
      console.log($scope.claimedQuestions)
      },
      function(err) {
        console.log(err);
      })
    }
    $scope.questions = function() {
      }
  $scope.editStatus = function(status, id) {
    $http.put('http://localhost:3000/mentor/mentors/' + id + '.json', {mentor: {status: status}})
    .then(function(success) {
      console.log(success);
    }, function (error) {
      console.log(error);
    });
  }
});
