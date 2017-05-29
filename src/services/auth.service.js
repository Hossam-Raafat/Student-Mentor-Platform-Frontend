angular.module('askMak').factory('AuthService', function ($http, $auth, $state, $rootScope) {
  return {

    login: function () {
      // tell the world that I'm logged in
      $rootScope.$broadcast('studentLoggedIn');
    },

    // authenticate_student // checks if student is logged in
    logged_in_user: function (callback) {
      return $auth.validateUser()

      // .then(function (user) {
      // // if resolved successfully return a user object that will set
      // // the variable `resolvedUser`
      //   if (user.configName === 'student') {
      //     callback(user);
      //   } else {
      //     callback(false);
      //   }
      // }, function () {
      //   $state.go('student');
      // });
    }
  };

});
