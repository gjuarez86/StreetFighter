/*$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		alert('mouse entered .ryu div');
	});
});  THIS IS GOOD TECHNIQUE- USER ALERT JUST AS 
AN INDICATOR TO KNOW IF MOUSEENTER ACTUALLY 
WORKS*/

$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-ready').show();
		$('.ryu-still').hide();
		$('.ryu-cool').hide();
		$('.ryu-throwing').hide();
	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-cool').hide();
		$('.ryu-throwing').hide();
		$('.ryu-still').show();
	})
	.mousedown(function() {
		playHadouken();
		$('.ryu-throwing').show();
		$('.ryu-cool').hide();
		$('.ryu-ready').hide();
		$('.ryu-still').hide();
		$('.hadouken').finish().show()
		.animate(
			{'left': '300px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left', '-180px');
			}
		);
	})
	.mouseup(function() {
		$('.ryu-still').show();
		$('.ryu-throwing').hide();
		$('.ryu-cool').hide();
		$('ryu-ready').hide();
	});
	$(document).keydown(function(e) {
		if (e.keyCode == 88) {
			playHadouken();
			$('.ryu-ready').hide();
			$('.ryu-still').hide();
			$('.ryu-throwing').hide();
			$('.ryu-cool').show();
		}
	}).keyup(function(e) {
		if (e.keyCode == 88) {
			$('#song')[0].pause();
			$('#song')[0].load();
			$('.ryu-still').show();
			$('.ryu-cool').hide();
			$('.ryu-throwing').hide();
		}
	});
});

function playHadouken() {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}

function playsong() {
	$('#song')[0].volume = 0.5;
	$('#song')[0].load();
	$('#song')[0].play();
}

/*	.mousedown(function() {
		console.log("Wow");
	})
	.mouseup(function() {
		console.log("oh no");
	}); THIS IS GOOD TECHNIQUE TO CHECK THAT ITS 
	WORKING BEFORE CODING IT */

