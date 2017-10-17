window.onload = function() {
	$(".carousel").carousel({
		interval: 2000,
		pause:false,
		wrap: true,
		keyboard: true
	});
}

function buttonHandler(ev) {
	console.log('hi');
	console.log(ev.target);
	ev.target.blur();
}
