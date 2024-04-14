var navLinks = document.querySelectorAll('#nav-links li a');

navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        navLinks.forEach(function(link) {
            link.parentElement.classList.remove('active');
        });
        link.parentElement.classList.add('active');
    });
});



document.addEventListener('DOMContentLoaded', function() {
    var home = document.getElementById('home');
    var container = document.querySelector('.container');

    console.log("container",container,home)
  
    home.addEventListener('click', function() {
      container.classList.toggle('closed');
    });
  });
  

