let menuOpen = false;

function toggleMenu() {
  if(!menuOpen) { // open the menu
    $('nav').animate({
      right: 0
    }, 300, 'swing');
  }
  else { // close the menu
    $('nav').animate({
      right: -300
    }, 240, 'swing');
  }
  // toggle the menu state
  menuOpen = !menuOpen;
} // toggleMenu()

function closeMenu() {
  $('nav').animate({
    right: -300
  }, 240, 'swing');
  menuOpen = false;
} // closeMenu()
$(document).ready(function () {

  /* Contact form submit */
  $('.contactForm').on('submit', function (e) {
    e.preventDefault();
    var btn = $(this).find('button[type="submit"]');
    btn.text('Sending...').prop('disabled', true);
    setTimeout(function () {
      btn.text('Message Sent ✓').css('background', '#4caf50');
      setTimeout(function () {
        btn.text('SEND MESSAGE').css('background', '#4a7c59').prop('disabled', false);
      }, 4000);
    }, 1000);
  });

});