var seleccion=false;
$(document).ready(function() {
		$('#infoGuerrero').hide();
		$('#infoClerigo').hide();
		$('#infoValkiria').hide();
		$('#infoHabitacion1').hide();
		$('#infoHabitacion2').hide();
		$('#infoHabitacion3').hide();
		function default1(){
		$("#Guerrero").css({'border': '2px solid black'});
		$("#Clérigo").css({'border': '2px solid black'});
		$("#Valkiria").css({'border': '2px solid black'});
		$("#Habitacion1").css({'border': '2px solid black'});
		$("#Habitacion2").css({'border': '2px solid black'});
		$("#Habitacion3").css({'border': '2px solid black'});
		$("body").css({'background-repeat': 'no-repeat'});
		$("body").css({'background-position': 'center'});
		$("body").css({'background-color': 'black'});
		$("body").css({'background-image': 'none'});
		$('.namePersonajes').css({'color':'white'});
		$('.nameHabitaciones').css({'color':'white'});
		seleccion = false;
	}
	
	$('#botonEntrar').click(function()
	{
		location.href="EleccionPersonaje.html";
	});
	//------------------------------//
	
	
	//------------------------------//
    /*$('.personaje a img').hover(function() {
            // hover in
            $(this).animate({height: "280",width: "220"}, "slow");
    }, 
	function() {
    // hover out
	$(this).animate({height: "267",width: "189"}, "fast");
        });*/
	//------------------------------//
	//--------------------------------//

	function seleccionadoP(personaje_id){
		$(personaje_id).css({'border':'red 2px solid'});	
	}
	//-----------------------/
	//------------------------------//
	$("#Guerrero").click(function() {
		if(seleccion == false){
			default1();
			seleccionadoP("#Guerrero");
			$("#contenedor").css({'background-image':'url(imagenes/guerreroF.jpg)'});
			$("#contenedor").css({'background-repeat': 'no-repeat'});
			$('#infoGuerrero').show();
			$('#infoClerigo').hide();
			$('#infoValkiria').hide();
			$('#Guerrero h2').css({'color':'pink'});
			$("#botonElegir").click(function()
			{
				location.href="habitacion.html";
			});
			seleccion = true;
		}
		else{
			default1();
			seleccionadoP("#Guerrero");
			seleccion = false;
			$("#contenedor").css({'background-image':'url(imagenes/guerreroF.jpg)'});
			$("#contenedor").css({'background-repeat': 'no-repeat'});
			$('#infoGuerrero').show();
			$('#infoClerigo').hide();
			$('#infoValkiria').hide();
			$('#Guerrero h2').css({'color':'pink'});
		}
	});
	//------------------------------//
	$("#Clérigo").click(function() {
		if(seleccion == false){
			default1();
			seleccionadoP("#Clérigo");
			seleccion = true;
			$("#contenedor").css({'background-image':'url(imagenes/clerigoF.jpg)'});
			$("#contenedor").css({'background-repeat': 'no-repeat'});
			$('#infoClerigo').show();
			$('#infoGuerrero').hide();
			$('#infoValkiria').hide();
			$('#Clérigo h2').css({'color':'pink'});
			$("#botonElegir").click(function()
			{
				location.href="habitacion.html";
			});
			seleccion = true;
		}
		
		else{
			default1();
			seleccionadoP("#Clérigo");
			seleccion = false;
			$("#contenedor").css({'background-image':'url(imagenes/clerigoF.jpg)'});
			$("#contenedor").css({'background-repeat': 'no-repeat'});
			$('#infoClerigo').show();
			$('#infoGuerrero').hide();
			$('#infoValkiria').hide();
			$('#Clérigo h2').css({'color':'pink'});
			seleccion = true;
		}
	});
	//------------------------------//
	$("#Valkiria").click(function() {
		if(seleccion == false){
			default1();
			seleccionadoP("#Valkiria");
			seleccion = true;
			$("#contenedor").css({'background-image':'url(imagenes/valkiriaF.jpg)'});
			$("#contenedor").css({'background-repeat': 'no-repeat'});
			$('#infoValkiria').show();
			$('#infoClerigo').hide();
			$('#infoGuerrero').hide();
			$('#Valkiria h2').css({'color':'pink'});	
			$("#botonElegir").click(function()
			{
				location.href="habitacion.html";
			});
			seleccion = true;
		}
		
		else{
			default1();
			seleccionadoP("#Valkiria");
			seleccion = false;
			$("#contenedor").css({'background-image':'url(imagenes/valkiriaF.jpg)'});
			$("#contenedor").css({'background-repeat': 'no-repeat'});
			$('#infoValkiria').show();
			$('#infoClerigo').hide();
			$('#infoGuerrero').hide();
			$('#Valkiria h2').css({'color':'pink'});
		}
	});
	//HABITACIONES--------------------------------------------------------*//
	function seleccionadoH(habitacion_id){
		$(habitacion_id).css({'border':'red 2px solid'});	
	}
	//------------------------------//
	$("#Habitacion1").click(function() {
		if(seleccion == false){
			default1();
			seleccionadoH("#Habitacion1");
			$('#infoHabitacion1').css({'border':'2px solid red'});
			$("#contenedor").css({'background-image':'url(imagenes/habitacion1.jpg)'});
			$("#contenedor").css({'background-repeat': 'no-repeat'});
			$('#infoHabitacion1').show();
			$('#infoHabitacion2').hide();
			$('#infoHabitacion3').hide();
			$('#Habitacion1 h2').css({'color':'pink'});
			seleccion = true;
		}
		else{
			default1();
			seleccionadoH("#Habitacion1");
			$('#infoHabitacion1').css({'border':'2px solid red'});
			seleccion = false;
			$("#contenedor").css({'background-image':'url(imagenes/habitacion1.jpg)'});
			$("#contenedor").css({'background-repeat': 'no-repeat'});
			$('#infoHabitacion1').show();
			$('#infoHabitacion2').hide();
			$('#infoHabitacion3').hide();
			$('#Habitacion1 h2').css({'color':'pink'});
		}
	});
	//------------------------------//
	$("#Habitacion2").click(function() {
		if(seleccion == false){
			default1();
			seleccionadoH("#Habitacion2");
			seleccion = true;
			$('#infoHabitacion2').css({'border':'2px solid red'});
			$("#contenedor").css({'background-image':'url(imagenes/habitacion2.jpg)'});
			$("#contenedor").css({'background-repeat': 'no-repeat'});
			$('#infoHabitacion2').show();
			$('#infoHabitacion1').hide();
			$('#infoHabitacion3').hide();
			$('#Habitacion2 h2').css({'color':'pink'});
		}
		
		else{
			default1();
			seleccionadoH("#Habitacion2");
			seleccion = false;
			$('#infoHabitacion2').css({'border':'2px solid red'});
			$("#contenedor").css({'background-image':'url(imagenes/habitacion2.jpg)'});
			$("#contenedor").css({'background-repeat': 'no-repeat'});
			$('#infoHabitacion2').show();
			$('#infoHabitacion1').hide();
			$('#infoHabitacion3').hide();
			$('#Habitacion2 h2').css({'color':'pink'});
		}
	});
	//------------------------------//
	$("#Habitacion3").click(function() {
		if(seleccion == false){
			default1();
			seleccionadoH("#Habitacion3");
			seleccion = true;
			$('#infoHabitacion3').css({'border':'2px solid red'});
			$("#contenedor").css({'background-image':'url(imagenes/habitacion3.jpg)'});
			$("#contenedor").css({'background-repeat': 'no-repeat'});
			$('#infoHabitacion3').show();
			$('#infoHabitacion1').hide();
			$('#infoHabitacion2').hide();
			$('#Habitacion3 h2').css({'color':'pink'});
		}
		
		else{
			default1();
			seleccionadoH("#Habitacion3");
			seleccion = false;
			$('#infoHabitacion3').css({'border':'2px solid red'});
			$("#contenedor").css({'background-image':'url(imagenes/habitacion3.jpg)'});
			$("#contenedor").css({'background-repeat': 'no-repeat'});
			$('#infoHabitacion3').show();
			$('#infoHabitacion2').hide();
			$('#infoHabitacion1').hide();
			$('#Habitacion3 h2').css({'color':'pink'});
		}
	});
//MOVIMIENTOS COMPLETOS//
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
	$("#orco").css({ "top": vill_y + "px"});
	$("#orco").css({ "left": vill_x + "px"});
	$("#orco").css({ "width": 0 + "px"});
	$("#orco").css({ "height": 0 + "px"});
	$("#goblin").css({ "top": vill_y2 + "px"});
	$("#goblin").css({ "left": vill_x2 + "px"});
	$("#goblin").css({ "width": 0 + "px"});
	$("#goblin").css({ "height": 0 + "px"});
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
	//fondo = 'pink';
	$('#contenedor').css({'background-image':'url(imagenes/h2.jpg)'});
	tuvi();	
	nivel++;
	window.alert(nombre);
	}else
		if(nivel == 2){
		//fondo = 'black';
		$('#contenedor').css({'background-image':'url(imagenes/H3.jpg)'});
		tuvi();	
		nivel++;
		window.alert('Ultima habitación');
		}else
			if(nivel == 3){
				window.alert('saliste con vida troll'+nombre);
				finalGame();
			}
}

function atacando(){
	
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

			$("#orco").css({ "top": vill_y + "px"});
			$("#orco").css({ "left": vill_x + "px"});
			$("#orco").css({ "width": 50 + "px"});
			$("#orco").css({ "height": 50 + "px"});
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

		$("#goblin").css({ "top": vill_y2 + "px"});
		$("#goblin").css({ "left": vill_x2 + "px"});
		$("#goblin").css({ "width": 50 + "px"});
		$("#goblin").css({ "height": 50 + "px"});
		});
		
	}
	

});

});