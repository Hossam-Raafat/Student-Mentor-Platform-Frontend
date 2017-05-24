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
      signOutUrl: 'app/mentor/auth/sign_out',
      emailSignInPath: 'app/mentor/auth/sign_in',
      emailRegistrationPath: 'app/mentor/auth',
      accountUpdatePath: 'app/mentor/auth',
      accountDeletePath: 'app/mentor/auth',
      passwordResetPath: 'app/mentor/auth/password',
      passwordUpdatePath: 'app/mentor/auth/password',
      tokenValidationPath: 'app/mentor/auth/validate_token'
    }
  }, {
    student: {
      apiUrl: 'http://localhost:3000',
      signOutUrl: 'app/student/auth/sign_out',
      emailSignInPath: 'app/student/auth/sign_in',
      emailRegistrationPath: 'app/student/auth',
      accountUpdatePath: 'app/student/auth',
      accountDeletePath: 'app/student/auth',
      passwordResetPath: 'app/student/auth/password',
      passwordUpdatePath: 'app/student/auth/password',
      tokenValidationPath: 'app/student/auth/validate_token'
    }
  }, {
    manager: {
      apiUrl: 'http://localhost:3000',
      signOutUrl: 'app/manager/auth/sign_out',
      emailSignInPath: 'app/manager/auth/sign_in',
      emailRegistrationPath: 'app/manager/auth',
      accountUpdatePath: 'app/manager/auth',
      accountDeletePath: 'app/manager/auth',
      passwordResetPath: 'app/manager/auth/password',
      passwordUpdatePath: 'app/manager/auth/password',
      tokenValidationPath: 'app/manager/auth/validate_token'
    }
  }]);

  $locationProvider.html5Mode(true); // I added this line and the <base href="/"> in the html to get
  // rid of the '/#!/' in the url.

  // HOME STATES AND NESTED VIEWS ========================================
  $stateProvider
    .state('student', {
      url: '/',
      templateUrl: 'app/student/auth/student_auth.html'
    })

  .state('manager', {
    url: 'app/manager/auth',
    templateUrl: 'app/manager/auth/manager_auth.html'
  })

  .state('mentor', {
    url: 'app/mentor/auth',
    templateUrl: 'app/mentor/auth/mentor_auth.html'
  })

  .state('managerInvite', {
    url: 'app/manager/invite',
    templateUrl: 'app/manager/invitation/manager_invitation.html',
    resolve: {
      resolvedUser: CheckForAuthenticatedUser
    }
  })

  .state('mentorAcceptInvitation', {
    url: 'app/mentor/accept/:token',
    templateUrl: 'app/mentor/invitable/mentor_accept_invitation.html'
  })

  .state('studentAcceptInvitation', {
    url: 'app/student/accept/:token',
    templateUrl: 'app/student/invitable/student_accept_invitation.html'
  });

  $urlRouterProvider.otherwise('/');

});
