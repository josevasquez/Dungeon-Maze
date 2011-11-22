//posicion del heroe
var y = 0;
var x = 0;
//posicion de primer villano
var vill_y = Math.floor(Math.random()*180) * 4;
var vill_x = Math.floor(Math.random()*150) * 4;
// posicion del segundo villano
var vill_y2 = Math.floor(Math.random()*83) * 4;
var vill_x2 = Math.floor(Math.random()*75) * 4;
//posicion de la llave
var key_y = Math.floor(Math.random()*83) * 4;
var key_x = Math.floor(Math.random()*83) * 4;
//posicion de la puerta
var door_y = Math.floor(Math.random()*129) * 4;
var tope=0; //limite del primer enemigo	
var tope2=0; //limite del segundo enemigo
var nivel=1; //niveles del juego

function tuvi(){

 y = 0;
 x = 0;
//posicion de primer villano
 vill_y = Math.floor(Math.random()*180) * 4;
 vill_x = Math.floor(Math.random()*150) * 4;
// posicion del segundo villano
 vill_y2 = Math.floor(Math.random()*83) * 4;
 vill_x2 = Math.floor(Math.random()*75) * 4;
//posicion de la llave
 key_y = Math.floor(Math.random()*83) * 4;
 key_x = Math.floor(Math.random()*83) * 4;
//posicion de la puerta
 door_y = Math.floor(Math.random()*129) * 4;
	
	colocarLlave();
	colocarDoor();
	$('#heroe').css({'top':'0px'});
	$('#heroe').css({'left':'0px'});
	$("#villano").css({ "top": vill_y + "px"});
	$("#villano").css({ "left": vill_x + "px"});
	$("#villano").css({ "width": 0 + "px"});
	$("#villano").css({ "height": 0 + "px"});
	$("#villano2").css({ "top": vill_y2 + "px"});
	$("#villano2").css({ "left": vill_x2 + "px"});
	$("#villano2").css({ "width": 0 + "px"});
	$("#villano2").css({ "height": 0 + "px"});
}

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
	
	$("#door").css({ "margin-top": door_y + "px"});
	$("#door").css({ "width": 50 + "px"});
	$("#door").css({ "height": 50 + "px"});
}

function turnoHeroe(){
	$("body").keypress(function(e) {

			if (e.which == 115) {
				//DOWN - S
				y += 4;
				if (y > 548) y = 548;
				$("#heroe").css({ "top": y + "px"});

			}
			if (e.which == 119) {
				//UP - W
				y -= 4;
				if (y < 0) y = 0;
				$("#heroe").css({ "top": y + "px"});
			}
			if (e.which == 100) {
				//RIGHT - D
				x += 4;
				if (x > 748) x = 748;        
				$("#heroe").css({ "left": x + "px"});
			}
			if (e.which == 97) {
				//LEFT - A
				x -= 4;
				if (x < 0) x = 0;
				$("#heroe").css({ "left": x + "px"});
			}
			detectarColisionKey();
			colisionDoor();
			colisionVill();
	});
 
 return true;
}

function detectarColisionKey(){
		if(y==key_y && x==key_x)
			{
				$('#key').fadeOut();
				colocarDoor();
				$('#door').fadeIn();
				
			}
}

function colisionDoor(){
		if(y==door_y && x==748){
			nextLevel();
			$('#door').fadeOut();
			$('#key').fadeIn();
		}

}

function colisionVill(){
		if(y==vill_y && x==vill_x){
			$('#villano').fadeOut();
		}

}

function nextLevel(){
var fondo;
	if(nivel == 1){
	fondo = 'pink';
	$('#contenedor').css({'background-color':fondo});
	tuvi();	
	nivel++;
	window.alert('Siguiente habitación');
	}else
		if(nivel == 2){
		fondo = 'black';
		$('#contenedor').css({'background-color':fondo});
		tuvi();	
		nivel++;
		window.alert('Ultima habitación');
		}else
			if(nivel == 3){
				window.alert('saliste con vida troll');
				finalGame();
			}
}

function atacando(){
	$('#contenedor').css('display','none');
	$('#ataque').css('display','block');
}

function finalGame(){
	$('#contenedor').css('display','none');
	$('#final').fadeIn('slow');
}

$(document).ready(function () {
	colocarLlave();
	$('#ataque').css('display','none');
	if(turnoHeroe()){

		$(this).keypress(function (e){
		if(e.which == 97 || e.which ==100 || e.which==119 || e.which==115){
			if (vill_y > 548) vill_y = 548;
			if (vill_y < 0) vill_y = 0;			
			if(tope2 == 1){ //cuando el enemigo este en el limite derecho
				if (vill_x > 748){ 
					vill_x = 748;
				}
				vill_x -= 4;
				if(vill_x <= 0){
					tope2 = 0;
					vill_x +=4;
				}
			}
			
			if(tope2 == 0){ //cuando el enemigo este el limite izquierdo
				if (vill_x < 0){
					vill_x = 0;
				}
				vill_x +=4;
				if(vill_x >= 748){
					tope2 = 1;
					vill_x -=4;
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
				vill_y2 -= 4;
				if(vill_y2 <= 0){
					tope = 0;
					vill_y2 +=4;
				}
			}
			
			if(tope == 0){ //cuando el enemigo este el limite superior
				if (vill_y2 < 0){
					vill_y2 = 0;
				}
				vill_y2 +=4;
				if(vill_y2 >= 548){
					tope = 1;
					vill_y2 -=4;
				}
			}
		}

		$("#villano2").css({ "top": vill_y2 + "px"});
		$("#villano2").css({ "left": vill_x2 + "px"});
		$("#villano2").css({ "width": 50 + "px"});
		$("#villano2").css({ "height": 50 + "px"});
		});
		
	}
	

});