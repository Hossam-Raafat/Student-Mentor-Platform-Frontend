angular.module('alMakinah').controller('mentorDashController', function ($scope, $http, ActionCableChannel) {
//  $scope.resolvedQuestions = [];

  // $http.get('http://localhost:3000/mentor/questions.json')
  // .then(
  //     function(success) {
  //       console.log(success)
  //       $scope.resolvedQuestions = success.data;
  //       console.log($scope.resolvedQuestions)
  //     },
  //     function(err) {
  //       console.log(err)
  //     }
  // );

  // $scope.allQuestions = [];

  // $http.get('http://localhost:3000/mentor/questions.json').then(
  //     function(success) {
  //       console.log(success)
  //       $scope.allQuestions = success.data;
  //       console.log($scope.allQuestions)
  //     },
  //     function(err) {
  //       console.log(err)
  //     }
  //   );



      // $scope.inputText = "";
      // $scope.myData = [];

      // // connect to ActionCable
      // var consumer = new ActionCableChannel("QuestionChannel", {user: 42, chat: 37});
      // var callback = function(message){ 
      //   $scope.myData.push(message); 
      //   console.log($scope.myData);
      // };
      // consumer.subscribe(callback).then(function(){
      //   $scope.sendToMyChannel = function(message){ consumer.send(message, 'send_a_message'); };
      //   $scope.$on("$destroy", function(){
      //     consumer.unsubscribe().then(function(){ $scope.sendToMyChannel = undefined; });
      //   });
      // });

});
