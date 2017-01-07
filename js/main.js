


$(document).ready(function(){

	
	
  $('.project_list').mixItUp({
	animation: {
		effects: 'rotateX'
	}
  }); 
  
  
  $("html").niceScroll({
  cursorcolor:"#ff0000",
  cursorwidth:"15px",
  cursorborder:"none",
  cursorborderradius:"none",
  cursorminheight: "180",
  autohidemode:"true",			  			  
  });
	

	
 $("#owl_demo_one").owlCarousel({
     
    navigation : false, // Show next and prev buttons
    slideSpeed : 300,
    paginationSpeed : 400,
    singleItem:true,
    autoPlay:true,
     
    // "singleItem:true" is a shortcut for:
    // items : 1,
    // itemsDesktop : false,
    // itemsDesktopSmall : false,
    // itemsTablet: false,
    // itemsMobile : false
      
    });
	
	
 $("#owl_demo_two").owlCarousel({
navigation:false,
singleItem:true,
afterInit : function(elem){
var that = this
that.owlControls.prependTo(elem)
}
});	
	
	
	


     
 $("#owl_demo_three").owlCarousel({
 
autoPlay: 3000, //Set AutoPlay to 3 seconds
 pagination: false,
 navigation: true,
items : 3,
itemsDesktop : [1199,3],
itemsDesktopSmall : [979,3],
    navigationText: [
      "<img src='./img/left_nav.png' alt='' />",
      "<img src='./img/right_nav.png' alt='' />"
      ],
 
mouseDrag : false,
touchDrag : false,
dragBeforeAnimFinish : false,
 
});


	
 $("#owl_demo_four").owlCarousel({
 
autoPlay: 3000, //Set AutoPlay to 3 seconds
 
items : 2,
itemsDesktop : [1170,2],
itemsDesktopSmall : [970,2],
itemsTablet : [768,1],
mouseDrag : false,
touchDrag : false,
dragBeforeAnimFinish : false,
 
});	
	
 $("#owl_demo_five").owlCarousel({
 
autoPlay: 3000, //Set AutoPlay to 3 seconds
 
items : 2,
itemsDesktop : [1199,2],
itemsDesktopSmall : [979,2]
 
});	
	









	
});


function initNavbar() {

    var scrollSpeed = 750;
    var scrollOffset = 50;
    var easing = 'swing';

    $('#navbar-top .navbar-default ul.nav').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: scrollSpeed,
        scrollOffset: scrollOffset,
        scrollThreshold: 0.5,
        filter: ':not(.external)',
        easing: easing
    });

    $('.nav-external').click(function (e) {
        e.preventDefault();
        $('html, body').stop().animate({
            scrollTop: $($(this).attr("href")).offset().top - scrollOffset
        }, scrollSpeed, easing);
    });

    $('#navbar-top .navbar-default').affix({
        offset: {
            top: $('#home').height()
        }
    });
}

$(document).ready(function () {
    initNavbar();
});
