exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  capabilities: {
      'browserName': 'chrome'
    },

  specs: ['student_auth_controller_test.js']
};
