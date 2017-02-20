/*Elements slide in on page load*/
$(document).ready(function() {

    var profileBtn = $('#profile-btn'),
        worksBtn = $('#profile-btn'),
        contactBtn = $('#profile-btn');

    profileBtn.animate({ left: '20%' }, {
        duration: 2200
    });
    $("#works-btn").animate({ left: '48%' }, {
        duration: 2000
    });
    $("#contact-btn").animate({ left: '63%' }, {
        duration: 2500
    });


    $(window).scroll(function(){
    var y=$(this).scrollTop();                         
        if (y>300) {
            $('.exp-menu').fadeOut(500);
        } else {
            $('.exp-menu').fadeIn(500);
        }
    });

    // /*hide the 3 buttons when scrolled past intro box */
    // var topOfWorkBtn = worksBtn.offset().top;
    // var topOfMainContainer = $('#profile-landing').offset().top;

    // $(window).scroll(function() {
    //     $('.exp-menu').show();
    //     if (worksBtn.offset().top > topOfMainContainer) {
    //         // $('.exp-menu').hide();
    //         $('.exp-menu').hide();
    //     } else {
    //         $('.exp-menu').show(); 
    //     }
    // });



});


/* Make menu bar appear */     
    // jQuery(document).ready(function($){   

    //     $(window).scroll(function(){                          
    //         if ($(this).scrollTop() > 300) {
    //             $('#menu').fadeIn(500);
    //         } else {
    //             $('#menu').fadeOut(500);
    //         }
    //     });
    // });