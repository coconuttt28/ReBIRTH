Swal.fire({
    text: "本網站為練習作品，非正式官方網站，資訊均非正式內容。若網站中有表單填寫，僅此示意，並無任何後台功能，不會對外蒐集個人資料，特此申明。",
    icon: "info"
  });
  
var current_fs, next_fs, previous_fs; 
var left, opacity, scale; 
var animating; 

$(".next").click(function() {
    if (animating) return false;
    animating = true;
    
    current_fs = $(this).parent();
    next_fs = $(this).parent().next();
    
    // Activate next step on progressbar using the index of next_fs
    $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
    
    // Show the next fieldset
    next_fs.css('display', 'block'); 
    // Hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
        step: function(now, mx) {
            // As the opacity of current_fs reduces to 0 - stored in "now"
            // 1. scale current_fs down to 80%
            scale = 1 - (1 - now) * 0.2;
            // 2. bring next_fs from the right(50%)
            left = (now * 50) + "%"; // You can adjust or remove this line
            // 3. increase opacity of next_fs to 1 as it moves in
            opacity = 1 - now;
            current_fs.css({
                'transform': 'scale(' + scale + ')',
                'position': 'absolute'
            });
            next_fs.css({'opacity': opacity}); // Removed left
        }, 
        duration: 800, 
        complete: function() {
            current_fs.hide();
            current_fs.css('display', '');
            animating = false;
        }, 
        // This comes from the custom easing plugin
        easing: 'easeInOutBack'
    });
});

$(".previous").click(function() {
    if (animating) return false;
    animating = true;
    
    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();
    
    // De-activate current step on progressbar
    $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
    
    // Show the previous fieldset
    previous_fs.css('display', 'block'); 
    // Hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
        step: function(now, mx) {
            // As the opacity of current_fs reduces to 0 - stored in "now"
            // 1. scale previous_fs from 80% to 100%
            scale = 0.8 + (1 - now) * 0.2;
            // 2. take current_fs to the right(50%) - from 0%
            left = ((1 - now) * 50) + "%"; // You can adjust or remove this line
            // 3. increase opacity of previous_fs to 1 as it moves in
            opacity = 1 - now;
            current_fs.css({
                'transform': 'scale(' + scale + ')',
                'position': 'absolute'
            });
            previous_fs.css({'opacity': opacity}); // Removed left
        }, 
        duration: 800, 
        complete: function() {
            current_fs.hide();
            current_fs.css('display', '');
            animating = false;
        }, 
        // This comes from the custom easing plugin
        easing: 'easeInOutBack'
    });
});



