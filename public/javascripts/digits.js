/**
 * Cannonball Web JavaScript.
 * Romain Huet
 * @romainhuet
 */

(function () {
  /**
   * Initialize Digits for Web as soon as the JavaScript SDK is loaded.
   */
  $('#digits-sdk').load(function () {
    // Initialize Digits using the API key.
    Digits.init({ consumerKey: config.digitsConsumerKey })
      .done(function() {
        console.log('Digits initialized.');
      })
      .fail(function() {
        console.log('Digits failed to initialize.');
      });

    // Set a click event listener on the Digits button.
    $('.digits-button').click(onLoginButtonClick);
  });

  /**
   * Launch the Digits login flow.
   */
  function onLoginButtonClick(event) {
    console.log('Digits login started.');
    Digits.logIn({ callbackURL: 'http://192.168.31.142:3000/digits_callback' });
  }
  
})();
