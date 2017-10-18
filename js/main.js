// fot hiding header on on scroll down
var didScroll;
var lastScrollTop = 0;
var navbarHeight = $('.navbar').outerHeight();
var delta = Math.round(navbarHeight / 2);


window.onload = function() {
	
	$(".carousel").carousel({
		interval: 2000,
		pause:false,
		wrap: true,
		keyboard: true
	});
	
	
	setInterval(function() {  
		
		/*  for the correct display of the footer (with no banner underneath)*/
		
		var scrolled = document.documentElement.scrollTop;
		var total = document.documentElement.offsetHeight;
		var vh = window.innerHeight;
		var footer = document.getElementsByTagName('footer')[0].offsetHeight;
		
		if (total - (scrolled + vh) < footer) {  // footer is visible			
			hideBanner();
		}
		if (scrolled < vh) {  // banner is visible
			showBanner();
		}
		
		
		/*  for the scroll-toggle of the navbar*/
		if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
		
	}, 150);
}


/* scroll detection*/
$(window).scroll(function(event){
    didScroll = true;
});


/* REACT to scrolling by toggling navbar visibility */
function hasScrolled() {
	
    var st = $(this).scrollTop();
			
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    		
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scrolled Down
        $('.navbar').addClass('nav-up');
    } else {
        // Scrolled Up
        if(st + $(window).height() < $(document).height()) {
            $('.navbar').removeClass('nav-up');
        }
    }
    
    lastScrollTop = st;
}



/* make buttons lose focus after being pressed */
function buttonHandler(ev) {	
	console.log(ev.target);
	ev.target.blur();
}

function hideBanner() {
	$(".banner").hide();
}

function showBanner() {
	$(".banner").show();
}