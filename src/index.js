angular.module('askMak', ['ng-token-auth', 'ui.router'])
.config(function ($stateProvider, $urlRouterProvider, $locationProvider, $authProvider) {
  function CheckForAuthenticatedUser($auth, $state) {
    return $auth.validateUser().then(function (user) {
      // if resolved successfully return a user object that will set
      // the variable `resolvedUser`
      if (user.configName === 'manager') {
        return user;
      } else {
        $state.go('student');
      }
    }, function (_error) {
      $state.go('student');
    });
  }

  $authProvider.configure([{
    mentor: {
      apiUrl: 'http://localhost:3000',
      signOutUrl: '/mentor/auth/sign_out',
      emailSignInPath: '/mentor/auth/sign_in',
      emailRegistrationPath: '/mentor/auth',
      accountUpdatePath: '/mentor/auth',
      accountDeletePath: '/mentor/auth',
      passwordResetPath: '/mentor/auth/password',
      passwordUpdatePath: '/mentor/auth/password',
      tokenValidationPath: '/mentor/auth/validate_token'
    }
  }, {
    student: {
      apiUrl: 'http://localhost:3000',
      signOutUrl: '/student/auth/sign_out',
      emailSignInPath: '/student/auth/sign_in',
      emailRegistrationPath: '/student/auth',
      accountUpdatePath: '/student/auth',
      accountDeletePath: '/student/auth',
      passwordResetPath: '/student/auth/password',
      passwordUpdatePath: '/student/auth/password',
      tokenValidationPath: '/student/auth/validate_token'
    }
  }, {
    manager: {
      apiUrl: 'http://localhost:3000',
      signOutUrl: '/manager/auth/sign_out',
      emailSignInPath: '/manager/auth/sign_in',
      emailRegistrationPath: '/manager/auth',
      accountUpdatePath: '/manager/auth',
      accountDeletePath: '/manager/auth',
      passwordResetPath: '/manager/auth/password',
      passwordUpdatePath: '/manager/auth/password',
      tokenValidationPath: '/manager/auth/validate_token'
    }
  }]
);

  $locationProvider.html5Mode(true); // I added this line and the <base href="/"> in the html to get
  // rid of the '/#!/' in the url.

  // HOME STATES AND NESTED VIEWS ========================================
  $stateProvider
    .state('studentLayout', {
      url: '/',
      templateUrl: 'app/student/layout/student_layout.html',
      abstract: true
    })
    .state('studentLayout.student', {
      url: '',
      templateUrl: 'app/student/auth/student_auth.html'
    })
    .state('studentLayout.studentAcceptInvitation', {
      url: '/accept/:token',
      templateUrl: 'app/student/invitable/student_accept_invitation.html'
    });

  $stateProvider
    .state('managerLayout', {
      url: '/manager',
      templateUrl: 'app/manager/layout/manager_layout.html',
      abstract: true
    })
    // .state('managerLayout.homepage', {
    //   url: '',
    //   templateUrl: 'app/manager/auth/manager_auth.html'
    // })
  .state('managerLayout.manager', {
    url: '/auth',
    templateUrl: 'app/manager/auth/manager_auth.html'
  })
  .state('managerLayout.managerInvite', {
    url: '/invite',
    templateUrl: 'app/manager/invitation/manager_invitation.html',
    resolve: {
      resolvedUser: CheckForAuthenticatedUser
    }
  });
  $stateProvider
  .state('mentorLayout', {
    url: '/mentor',
    templateUrl: 'app/mentor/layout/mentor_layout.html',
    abstract: true
  })
  .state('mentorLayout.mentor', {
    url: '/auth',
    templateUrl: 'app/mentor/auth/mentor_auth.html'
  })
  .state('mentorLayout.mentorAcceptInvitation', {
    url: '/accept/:token',
    templateUrl: 'app/mentor/invitable/mentor_accept_invitation.html'
  });
  $urlRouterProvider.otherwise('/');
});

// angular.module('askMak').run(['$rootScope', '$location', 'Auth', function ($rootScope, $location, Auth) {
//     $rootScope.$on('$routeChangeStart', function (event) {
//
//         if (!Auth.isLoggedIn()) {
//             console.log('DENY');
//             event.preventDefault();
//             $location.path('/login');
//         }
//         else {
//             console.log('ALLOW');
//             $location.path('/');
//         }
//     });
// }]);

// angular.module('askMak').controller('mainController', ['$scope', 'AuthService', '$location', function ($scope, AuthService, $location) {
//
// // $scope.$watch(Auth.isLoggedIn, function (value, oldValue) {
// //
// //   if(!value && oldValue) {
// //     console.log("Disconnect");
// //     $location.path('/login');
// //   }
// //
// //   if(value) {
// //     console.log("Connect");
// //     //Do something when the user is connected
// //   }
// //
// // }, true);
// console.log("over here");
// console.log(AuthService.authenticate_student());
//
// }]);
