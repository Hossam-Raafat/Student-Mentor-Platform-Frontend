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
    .state('student', {
      url: '/',
      templateUrl: 'app/student/auth/student_auth.html'
    })

  .state('manager', {
    url: '/manager/auth',
    templateUrl: 'app/manager/auth/manager_auth.html'
  })

  .state('mentor', {
    url: '/mentor/auth',
    templateUrl: 'app/mentor/auth/mentor_auth.html'
  })

  .state('managerInvite', {
    url: '/manager/invite',
    templateUrl: 'app/manager/invitation/manager_invitation.html',
    resolve: {
      resolvedUser: CheckForAuthenticatedUser
    }
  })

  .state('mentorAcceptInvitation', {
    url: '/mentor/accept/:token',
    templateUrl: 'app/mentor/invitable/mentor_accept_invitation.html'
  })

  .state('studentAcceptInvitation', {
    url: '/student/accept/:token',
    templateUrl: 'app/student/invitable/student_accept_invitation.html'
  });

  $urlRouterProvider.otherwise('/');

});
