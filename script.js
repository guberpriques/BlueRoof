function onSignIn(googleUser) {
  // Get the user's ID token and other information.
  var id_token = googleUser.getAuthResponse().id_token;
  var profile = googleUser.getBasicProfile();
  
  // Send the ID token to your server to authenticate the user.
  // You can use a library like jQuery to make an AJAX request.
  $.ajax({
    url: '/auth/google',
    method: 'POST',
    data: {
      id_token: id_token
    }
  }).done(function(response) {
    // Handle the server's response and redirect the user to the appropriate page.
    window.location.href = '/dashboard';
  });
}
