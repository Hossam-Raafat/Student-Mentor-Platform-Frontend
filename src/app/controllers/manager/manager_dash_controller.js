angular.module('alMakinah').controller('managerDashController', function ($scope, $http, server, $timeout) {

  $scope.resolvedQuestions = [];

  $http.get(server + '/manager/questions.json',{ params: { filter: 'resolved'} }).then(
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

  $http.get(server + '/manager/questions.json',{ params: { filter: 'unclaimed'} }).then(
      function(success) {
        $scope.unclaimedQuestions = success.data;   
        $scope.unclaimedCount = $scope.unclaimedQuestions.length;
      },
      function(err) {
        console.log(err)
      }
  );


  $scope.options1 = {
    legend: {
            display: true,
            position: 'bottom'

        },
    title: {
            display: true,
            text: 'Questions submitted'
        }

  };
  $scope.labels1 = ["HTML", "CSS", "Ruby", "JavaScript", "Other"];
  $scope.data1 = [5, 15, 30, 25, 15];

  $scope.options2 = {
    legend: {
            display: true,
            position: 'bottom'

        },
    title: {
            display: true,
            text: 'Claimed vs Unclaimed'
        }

  };

  $scope.labels2 = ["All questions", "unclaimed"];
  $scope.data2 = [10, 2];

 

 //  $scope.labels = [‘2006’, ‘2007’, ‘2008’, ‘2009’, ‘2010’, ‘2011’, ‘2012’];
 // // $scope.series = [‘Series A’, ‘Series B’];

 //   $scope.data = [65, 59, 80, 81, 56, 55, 40];

   
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

