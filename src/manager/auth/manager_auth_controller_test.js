exports.config = {
  seleniumAddress: 'http://localhost:3001/manager/auth',

  specs: ['manager_auth_controller.js']
};

describe('login page', function () {
  browser.driver.get('http://localhost:3001/manager/auth');
  it('should render login page', function () {

      // Checking the current url
    var currentUrl = browser.driver.getCurrentUrl();
    expect(currentUrl).toMatch('/manager/auth');
  });
  it('should sign in', function () {

      // Find page elements
    var userEmailField = browser.driver.findElement(By.id('email'));
    var userPassField = browser.driver.findElement(By.id('password'));
    var userLoginBtn = browser.driver.findElement(By.id('loginbtn'));

      // Fill input fields
    userEmailField.sendKeys('a@manager.com');
    userPassField.sendKeys('12345678');

      // Ensure fields contain what we've entered
    expect(userEmailField.getAttribute('value')).toEqual('a@manager.com');
    expect(userPassField.getAttribute('value')).toEqual('12345678');

      // Click to sign in - waiting for Angular as it is manually bootstrapped.
    userLoginBtn.click().then(function () {
      browser.waitForAngular();
      expect(browser.driver.getCurrentUrl()).toMatch('/manager/home');
    }, 10000);
  });
});
