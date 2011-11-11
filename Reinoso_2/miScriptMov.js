var y = 0;
var x = 0;
var vill_y = Math.floor(Math.random()*83) * 5;
var vill_x = Math.floor(Math.random()*75) * 5;
var interval_id = setInterval(function() { turnoVillano(); },3000);
var turno = true;

function turnoVillano() {
	vill_y += 0 ;
	vill_x += 10 ;
	
	if (x < 0) x = 0;
	if (x > 410) vill_x = 410;
	if (y > 370) vill_y = 370;
	if (y < 0) vill_y = 0;
	
	$("#villano").css({ "top": vill_y + "px"});
    $("#villano").css({ "left": vill_x + "px"});
}

function turnoHeroe(){
	$("body").keypress(function(e) {
			
			if (e.which == 115) {
				
				//DOWN - S
				y = y + 5;
				if (y > 370) y = 370;
				$("#heroe").css({ "top": y + "px"});
			  
			}
			if (e.which == 119) {
				//UP - W
				y = y - 5;
				if (y < 0) y = 0;
				$("#heroe").css({ "top": y + "px"});
			}
			if (e.which == 100) {
				//RIGHT - D
				x = x + 5;
				if (x > 410) x = 410;        
				$("#heroe").css({ "left": x + "px"});
			}
			if (e.which == 97) {
				//LEFT - A
				x = x - 5;
				if (x < 0) x = 0;
				$("#heroe").css({ "left": x + "px"});
			}
	});
}

function detectarColision() {
		if (x == vill_x && y == vill_y) {
			$("#villano").css({'background-image': 'url(http://profile.ak.fbcdn.net/hprofile-ak-snc4/261133_139054042840031_3050851_q.jpg)'});
			$("#villano").delay(3000).fadeOut();
			clearInterval(interval_id);
		}
}

$(document).ready(function () {

	if(turno==true){
		turnoHeroe();
		turno=false;
	}
	else{
		turnoVillano();
		turno=true;

	}
	$(this).delay(2000);
	
	
	detectarColision();
	
});