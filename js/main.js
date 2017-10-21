// fot hiding header on on scroll down
var didScroll;
var lastScrollTop = 0;
var navbarHeight = $('.navbar').outerHeight();
var delta = Math.round(navbarHeight / 2);


window.onload = function() {
	// init carousel
	$(".carousel").carousel({
		interval: 2000,
		pause:false,
		wrap: true,
		keyboard: true
	});

	// listen for clicks in order to hide expanded collapsed navbar
	$("body").on('click', collapseNavbar);

	// listen for scroll events in order to hide/show
	// navbar and for correct footer display
	setInterval(function() {		
		/*  for the scroll-toggle of the navbar*/
		if (didScroll) {
        hasScrolled();
        didScroll = false;
    }

	}, 150);

	// init events for smooth scrolling
	$(".navButton").click(function(ev) {
		ev.preventDefault();
		var targetID = this.getAttribute('href');
		document.getElementById(targetID.substr(1)).scrollIntoView({
		  behavior: 'smooth'
		});
	});
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

function collapseNavbar(ev) {
	if (ev.target != $('.navbar-toggle')[0]) {
		var col = $(".collapse");
		if (col.hasClass('in'))	{
			col.removeClass('in');
			col.attr('aria-expanded', 'false');
		}
	}
}
