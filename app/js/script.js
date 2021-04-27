(function($) { // Begin jQuery
  $(function() { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      // Close one dropdown when selecting another
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function() {
      $('.nav-dropdown').hide();
    });
    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
    });
    // Hamburger to X toggle
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });
  }); // end DOM ready
})(jQuery); // end jQuery

 // BLOB
  var radius = 8;
  TweenMax.staggerFromTo('.blob', 4 ,{
    cycle: {
      attr:function(i) {
        var r = i*90;
        return {
          transform:'rotate('+r+') translate('+radius+',0.1) rotate('+(-r)+')'
        }      
      }
    }  
  },{
    cycle: {
      attr:function(i) {
        var r = i*90+360;
        return {
          transform:'rotate('+r+') translate('+radius+',0.1) rotate('+(-r)+')'
        }      
      }
    },
    ease:Linear.easeNone,
    repeat:-1
  });


