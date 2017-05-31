angular.module('alMakinah').factory('AuthService', function ($http, $auth, $state, $rootScope) {
  return {

    loginStudent: function () {
      // tell the world that I'm logged in
      console.log("logStudent called");
      $rootScope.$broadcast('studentLoggedIn');
    },
    loginMentor: function () {
      // tell the world that I'm logged in
      $rootScope.$broadcast('mentorLoggedIn');
      $state.go('mentorLayout.mentorDash')
    },
    loginManager: function () {
      // tell the world that I'm logged in
      $rootScope.$broadcast('managerLoggedIn');
    },
    // authenticate_student // checks if student is logged in
    logged_in_user: function (callback) {
      return $auth.validateUser();
      // .then(function (user) {
      //   // if resolved successfully return a user object that will set
      //   // the variable `resolvedUser`
      // if (user.configName === 'student' || user.configName === 'mentor' || user.configName === 'manager'){
      //   callback(user);
      // } else {
      //   callback(false);
      // }
      // }, function (_error) {
      //   $state.go('student');
      // });
    }
  }
});
