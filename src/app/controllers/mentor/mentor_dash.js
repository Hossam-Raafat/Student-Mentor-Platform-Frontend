angular.module('alMakinah').controller('mentorDashController', function ($scope, $http, AuthService, $stateParams, ActionCableChannel, server) {
  $scope.unclaimedQuestions = [];
  $scope.claimedQuestions = [];
  $scope.questions = [];
  // create button that will make update request (change status of question ) and delete question from unclaimedQuestions array in frontend

  AuthService.logged_in_user().then(function(user){
    $scope.mentor = user;
  });

  // $http.get(server + '/mentor/questions.json', { params: { filter: 'unclaimed'} } )
  // .then(
  //     function(success) {
  //       $scope.unclaimedQuestions = success.data;
  //     },
  //     function(err) {
  //       console.log(err);
  //     }
  // )

    var consumer = new ActionCableChannel("NotificationChannel");
    var callback = function(message) {
      console.log(message.title);
      console.log(message.body);
      $scope.questions.push(message);
      $scope.questions.push(message);

    };
    consumer.subscribe(callback).then(function(){
      // $scope.sendToMyChannel = function(message){
      //   consumer.send(message);
      // };
      $scope.$on("$destroy", function(){
        consumer.unsubscribe()
      });
    });

  $http.get(server + '/mentor/questions.json')
  .then(function(success) {
    $scope.claimedQuestions = success.data['claimed'];
    console.log(success.data['claimed']);
    $scope.unclaimedQuestions = success.data['unclaimed'];
    console.log(success.data['unclaimed']);
    },
    function(err) {
      console.log(err);
    })

  $scope.claimQuestion = function (question) {
    $http.post(server + '/mentor/responses.json', {response: { question_id: question.id}})
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
    // $scope.unclaimQuestion = function (question) {
    //   $http.post(server + '/mentor/responses.json', {response: { question_id: question.id}})
    //   .then(function(success) {
    //     console.log(success);
    //     var questionIndex = $scope.claimedQuestions.indexOf(question);
    //     $scope.unclaimedQuestions.splice(questionIndex, 1);
    //     $scope.claimedQuestion.push(question);
    //     console.log($scope.claimedQuestions)
    //     },
    //     function(err) {
    //       console.log(err);
    //     })
    //   }
  $scope.viewAll = function (question) {
    $http.get(server + '/mentor/questions.json')
      .then(function(success) {
      console.log(success);
      $scope.questions = success.data['resolved'];
      },
      function(err) {
        console.log(err);
      })
    }
    $scope.addResponse = function (answer, id) {
      $http.post(server + '/mentor/responses.json',{response: {status: true, answer: answer, question_id: id}})
        .then(function(success) {
        console.log(success);
        $scope.questions = success.data['resolved'];
        },
        function(err) {
          console.log(err);
        })
      }
    // $scope.questions = function() {
    //   }
  $scope.editStatus = function(status, id) {
    $http.put(server + '/mentor/mentors/' + id + '.json', {mentor: {status: status}})
    .then(function(success) {
      console.log(success);
    }, function (error) {
      console.log(error);
    });
  }
});
