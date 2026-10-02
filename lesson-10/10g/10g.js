const buttons = document.querySelectorAll('.toggle-button');

buttons.forEach(function(button) {
  button.addEventListener('click', function() {

    buttons.forEach(function(otherButton) {
      otherButton.classList.remove('is-toggled');
    });

    button.classList.add('is-toggled');
  });
});