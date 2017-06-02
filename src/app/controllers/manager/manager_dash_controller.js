angular.module('alMakinah').controller('managerDashController', function ($scope, $http) {
  $scope.resolvedQuestions = [];

  $http.get('http://localhost:3000/manager/questions.json',{ params: { filter: 'resolved'} }).then(
      function(success) {
        console.log(success)
        $scope.resolvedQuestions = success.data;
        $scope.resolvedCount = $scope.resolvedQuestions.length;
        console.log($scope.resolvedQuestions)
      },
      function(err) {
        console.log(err)
      }
  );


  $scope.allQuestions = [];

  $http.get('http://localhost:3000/manager/questions.json').then(
      function(success) {
        console.log(success)
        $scope.allQuestions = success.data;
      },
      function(err) {
        console.log(err)
      }
  );

  $scope.unclaimedQuestions = [];

  $http.get('http://localhost:3000/manager/questions.json',{ params: { filter: 'unclaimed'} }).then(
      function(success) {
        $scope.unclaimedQuestions = success.data;   
        $scope.unclaimedCount = $scope.unclaimedQuestions.length;   
      },
      function(err) {
        console.log(err)
      }
  );

  // $scope.allQuestions = [];

  // $http.get('http://localhost:3000/manager/questions.json').then(
  //     function(success) {
  //       console.log(success)
  //       $scope.allQuestions = success.data;
  //       $scope.allCount = $scope.allQuestions.length
  //       console.log($scope.allQuestions)
  //     },
  //     function(err) {
  //       console.log(err)
  //     }
  //   );

  // $scope.deleteQuestion = function(item) { 
  //       $http.delete('http://localhost:3000/manager/questions/'+item.id+'.json' ).then(
  //         function(success){

  //           var index1 = $scope.allQuestions.indexOf(item);
  //           $scope.allQuestions.splice(index1, 1); 

  //           var index2 = $scope.unclaimedQuestions.indexOf(item);
  //           $scope.unclaimedQuestions.splice(index2, 1); 

  //           var index3 = $scope.resolvedQuestions.indexOf(item);
  //           $scope.resolvedQuestions.splice(index3, 1); 
  //         }

  //        )
  //        };

$scope.tabs = ["first", "second"];

    
});
