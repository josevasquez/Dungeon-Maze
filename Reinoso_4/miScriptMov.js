//posicion del heroe
var y = 0;
var x = 0;
//posicion de primer villano
var vill_y = Math.floor(Math.random()*190) * 5;
var vill_x = Math.floor(Math.random()*190) * 5;
// posicion del segundo villano
var vill_y2 = Math.floor(Math.random()*83) * 5;
var vill_x2 = Math.floor(Math.random()*75) * 5;
//posicion de la llave
var key_y = Math.floor(Math.random()*210)*5;
var key_x = Math.floor(Math.random()*190)*5;
//posicion de la puerta
var door_y = Math.floor(Math.random()*200) * 5;
var tope=0; //limite del primer enemigo	
var tope2=0;


function colocarLlave() {

	if (key_x < 0) key_x = 0;
	if (key_x > 748) key_x = 748;
	if (key_y > 548) key_y = 548;
	if (key_y < 0) key_y = 0;

	$("#key").css({ "top": key_y + "px"});
    $("#key").css({ "left": key_x + "px"});
	$("#key").css({ "width": 50 + "px"});
	$("#key").css({ "height": 50 + "px"});
}

function colocarDoor(){
	
	if (door_y > 648) door_y = 648;
	if (door_y < 100) door_y = 100;
	
	$('#door').css({ "margin-top": door_y + "px"});
	$("#door").css({ "width": 50 + "px"});
	$("#door").css({ "height": 50 + "px"});
}

function turnoHeroe(){
	$("body").keypress(function(e) {

			if (e.which == 115) {
				//DOWN - S
				y = y + 5;
				if (y > 548) y = 548;
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
				if (x > 748) x = 748;        
				$("#heroe").css({ "left": x + "px"});
			}
			if (e.which == 97) {
				//LEFT - A
				x = x - 5;
				if (x < 0) x = 0;
				$("#heroe").css({ "left": x + "px"});
			}
	});
 return true;
}

function detectarColisionKey() {
		if (x == key_x && y == key_y) {
			$('#key').css({'background-image': 'url(http://profile.ak.fbcdn.net/hprofile-ak-snc4/261133_139054042840031_3050851_q.jpg)'});
			$('#key').delay(3000).fadeOut();
			colocarDoor();
		}
}

$(document).ready(function () {
	colocarLlave();
	
	if(turnoHeroe()){
		$('body').keypress(function (e){
		if(e.which == 97 || e.which ==100 || e.which==119 || e.which==115){
			if (vill_y > 548) vill_y = 548;
			if (vill_y < 0) vill_y = 0;			
			if(tope2 == 1){ //cuando el enemigo este en el limite derecho
				if (vill_x > 748){ 
					vill_x = 748;
				}
				vill_x -= 5;
				if(vill_x <= 0){
					tope2 = 0;
					vill_x +=5;
				}
			}
			
			if(tope2 == 0){ //cuando el enemigo este el limite izquierdo
				if (vill_x < 0){
					vill_x = 0;
				}
				vill_x +=5;
				if(vill_x >= 748){
					tope2 = 1;
					vill_x -=5;
				}
			}
		}

			$("#villano").css({ "top": vill_y + "px"});
			$("#villano").css({ "left": vill_x + "px"});
			$("#villano").css({ "width": 50 + "px"});
			$("#villano").css({ "height": 50 + "px"});
		}); 
		$('body').keypress(function(e){	
		if(e.which == 97 || e.which ==100 || e.which==119 || e.which==115){
			if (vill_x2 < 0) vill_x2 = 0;
			if (vill_x2 > 748) vill_x2 = 748;
			if(tope == 1){ //cuando el enemigo este en el limite inferior
				if (vill_y2 > 548){ 
					vill_y2 = 548;
				}
				vill_y2 -= 5;
				if(vill_y2 <= 0){
					tope = 0;
					vill_y2 +=5;
				}
			}
			
			if(tope == 0){ //cuando el enemigo este el limite superior
				if (vill_y2 < 0){
					vill_y2 = 0;
				}
				vill_y2 +=5;
				if(vill_y2 >= 548){
					tope = 1;
					vill_y2 -=5;
				}
			}
		}

		$("#villano2").css({ "top": vill_y2 + "px"});
		$("#villano2").css({ "left": vill_x2 + "px"});
		$("#villano2").css({ "width": 50 + "px"});
		$("#villano2").css({ "height": 50 + "px"});
		});
		
	}
	detectarColisionKey();
	

});