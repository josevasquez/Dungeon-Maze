$(document).ready(function()
{
	$('#contenedor').css({'background-image':'url(imagenes/H1.jpg)'});
});
//posicion del heroe
var y = 0;
var x = 0;
//posicion de primer villano
var vill_y = Math.floor(Math.random()*180) * 4;
var vill_x = Math.floor(Math.random()*150) * 4;
// posicion del segundo villano
var vill_y2 = Math.floor(Math.random()*83) * 4;
var vill_x2 = Math.floor(Math.random()*90) * 4;
// posicion del tercer villano
var vill_y3 = Math.floor(Math.random()*83) * 4;
var vill_x3 = Math.floor(Math.random()*120) * 4;
// posicion del cuarto villano
var vill_y4 = Math.floor(Math.random()*83) * 4;
var vill_x4 = Math.floor(Math.random()*75) * 4;
//posicion de la llave
var key_y = Math.floor(Math.random()*83) * 4;
var key_x = Math.floor(Math.random()*83) * 4;
//variables para las monedas
var money_x1;
var money_y1;
var money_x2;
var money_y2;
var money_x3;
var money_y3;
var money_x4;
var money_y4;
var money_x5;
var money_y5;
//posicion de la puerta
var door_y = Math.floor(Math.random()*129) * 4;
var tope=0; //limite del primer enemigo	
var tope2=0; //limite del segundo enemigo
var tope3=0; // li mite del tercer enemigo
var tope4=0; //limite del tercer enemigo
var nivel=1; //niveles del juego
//capacidad del heroe
var ataque_heroe=10;
var defensa_heroe=15;
var daño_heroe=15;
var vida_heroe=100;
//capacidad villano
var ataque_vill=5;
var defensa_vill=10;
var daño_vill=5;
var vida_vill=10;
//capacidad del villando 2
var ataque_vill2=10;
var defensa_vill2=12;
var daño_vill2=10;
var vida_vill2=20;
var coli=false;
var coli2=false;
var coli3=false;
var coli4=false;
var puntaje=0;

function tuvi(){

 y = 0;
 x = 0;
//posicion de primer villano
 vill_y = Math.floor(Math.random()*180) * 4;
 vill_x = Math.floor(Math.random()*150) * 4;
// posicion del segundo villano
 vill_y2 = Math.floor(Math.random()*83) * 4;
 vill_x2 = Math.floor(Math.random()*75) * 4;
 // posicion del tercer villano
 vill_y3 = Math.floor(Math.random()*83) * 4;
 vill_x3 = Math.floor(Math.random()*75) * 4;
// posicion del cuarto villano
 vill_y4 = Math.floor(Math.random()*83) * 4;
 vill_x4 = Math.floor(Math.random()*75) * 4;
//posicion de la llave
 key_y = Math.floor(Math.random()*83) * 4;
 key_x = Math.floor(Math.random()*83) * 4;
//posicion de la puerta
 door_y = Math.floor(Math.random()*129) * 4;
	colocarMoneda();
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
	$("#villano3").css({ "top": vill_y3 + "px"});
	$("#villano3").css({ "left": vill_x3 + "px"});
	$("#villano3").css({ "width": 0 + "px"});
	$("#villano3").css({ "height": 0 + "px"});
	$("#villano4").css({ "top": vill_y4 + "px"});
	$("#villano4").css({ "left": vill_x4 + "px"});
	$("#villano4").css({ "width": 0 + "px"});
	$("#villano4").css({ "height": 0 + "px"});
	$("#villano").fadeIn();
	$("#villano2").fadeIn();
	$("#villano3").fadeIn();
	$("#villano4").fadeIn();
	$("#uno").fadeIn();
	$("#dos").fadeIn();
	$("#tres").fadeIn();
	$("#cuatro").fadeIn();
	$("#cinco").fadeIn();
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
			colisionVill2();
			colisionVill3();
			colisionVill4();
			colisionMoneda();
			
	});
 
 return true;
}

function colocarMoneda(){
	for(i=1;i<=5;i++){
		var money_x = Math.floor(Math.random()*120) * 4;
		var money_y = Math.floor(Math.random()*120) * 4;
		
		if (money_x < 0) money_x = 0;
		if (money_x > 748) money_x = 748;
		if (money_y > 548) money_y = 548;
		if (money_y < 0) money_y = 0;
		
		switch(i){
				case 1:
					money_y1 = money_y;
					money_x1 = money_x;
					$('#uno').css({'margin-top': money_y1+ 'px'});
					$('#uno').css({'margin-left': money_x1+ 'px'});
					$('#uno').css({'height': 50 + 'px'});
					$('#uno').css({'width': 50 + 'px'});
				case 2:
					money_y2 = money_y;
					money_x2 = money_x;
					$('#dos').css({'margin-top': money_y2+ 'px'});
					$('#dos').css({'margin-left': money_x2+ 'px'});
					$('#dos').css({'height': 50 + 'px'});
					$('#dos').css({'width': 50 + 'px'});
					break;
				case 3:
					money_y3 = money_y;
					money_x3 = money_x;
					$('#tres').css({'margin-top': money_y3+ 'px'});
					$('#tres').css({'margin-left': money_x3+ 'px'});
					$('#tres').css({'height': 50 + 'px'});
					$('#tres').css({'width': 50 + 'px'});
					break;
				case 4:
					money_y4 = money_y;
					money_x4 = money_x;
					$('#cuatro').css({'margin-top': money_y4+ 'px'});
					$('#cuatro').css({'margin-left': money_x4+ 'px'});
					$('#cuatro').css({'height': 50 + 'px'});
					$('#cuatro').css({'width': 50 + 'px'});
					break;
				case 5:
					money_y5 = money_y;
					money_x5 = money_x;
					$('#cinco').css({'margin-top': money_y5+ 'px'});
					$('#cinco').css({'margin-left': money_x5+ 'px'});
					$('#cinco').css({'height': 50 + 'px'});
					$('#cinco').css({'width': 50 + 'px'});
					break;
			}
	}
}

function detectarColisionKey(){
		if(y==key_y && x==key_x)
			{
				$('#key').fadeOut();
				colocarDoor();
				$('#door').fadeIn();
				puntaje += 15;
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
	coli=false;
		if(y==vill_y && x==vill_x){
			$('#villano').fadeOut();
			atacando();
			coli=true;
		}
	return coli;
}

function colisionVill2(){
coli2 = false;
		if(y==vill_y2 && x==vill_x2){
			$('#villano2').fadeOut();
			atacando();
			coli2=true;
		}
	return coli2;
}

function colisionVill3(){
coli3 = false;
		if(y==vill_y3 && x==vill_x3){
			$('#villano3').fadeOut();
			atacando();
			coli3=true;
		}
	return coli3;
}
function colisionVill4(){
coli4 = false;
		if(y==vill_y4 && x==vill_x4){
			$('#villano4').fadeOut();
			atacando();
			coli4=true;
		}
	return coli4;
}

function colisionMoneda(){
var sv=false;
		if(y==money_y1 && x==money_x1){
			$('#uno').fadeOut();
			sv=true;
		}else
			if(y==money_y2 && x==money_x2){
				$('#dos').fadeOut();
				sv=true;
			}else
				if(y==money_y3 && x==money_x3){
					$('#tres').fadeOut();
					sv=true;
				}else
					if(y==money_y4 && x==money_x4){
						$('#cuatro').fadeOut();
						sv=true;
					}else
						if(y==money_y5 && x==money_x5){
							$('#cinco').fadeOut();
							sv=true;
						}
	if(sv==true){
	puntaje += 20;
	$('#tabla').text("EL PUNTAJE ES:"+ puntaje);
	}
}


function nextLevel(){
var fondo;
	if(nivel == 1){
	$('#contenedor').css({'background-image':'url(imagenes/h2.jpg)'});
	tuvi();	
	nivel++;
	window.alert('Siguiente habitación');
	}else
		if(nivel == 2){
		fondo = 'black';
		$('#contenedor').css({'background-image':'url(imagenes/H3.jpg)'});
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
var ataque = 0;
var defensa = 0;
var daño = 0;
var vida = 0;
		
		if(coli==true){
			ataque = ataque_vill;
			defensa = defensa_vill;
			daño = daño_vill;
			vida = vida_vill;
		}
		
			if(coli2 == true){
				ataque = ataque_vill2;
				defensa = defensa_vill2;
				daño = daño_vill2;
				vida = vida_vill2;
			}
				if(coli3 == true){
					ataque = ataque_vill2;
					defensa = defensa_vill2;
					daño = daño_vill2;
					vida = vida_vill2;
				}
					if(coli4 == true){
						ataque = ataque_vill;
						defensa = defensa_vill;
						daño = daño_vill;
						vida = vida_vill;
					}
	$('#contenedor').css('display','none');
	$('#ataque_dado').fadeIn('slow');
	$('#toma').click(function(){
		var holi = $('#plench').val();
		if(defensa > 0){ 
			holi = holi + ataque ;
			daño = holi - defensa;
			defensa = defensa - daño;
		}else{
			holi = holi + ataque;
			daño = holi - vida;
			vida = vida - daño;
		}
		window.alert('tu ataque tiene una potencia de ' + holi + ' , hiciste un daño de ' +daño);
		$('#ataque_dado').fadeOut();
		$('#contenedor').css('display','block');
	});
}

function finalGame(){
	$('#contenedor').css('display','none');
	$('#final').fadeIn('slow');
}

$(document).ready(function () {
	colocarLlave();
		colocarMoneda();
	$('#ataque_dado').css('display','none');
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
		$('body').keypress(function(e){	
		if(e.which == 97 || e.which ==100 || e.which==119 || e.which==115){
			if (vill_x3 < 0) vill_x3 = 0;
			if (vill_x3 > 748) vill_x3 = 748;
			if(tope3 == 1){ //cuando el enemigo este en el limite inferior
				if (vill_y3 > 548){ 
					vill_y3 = 548;
				}
				vill_y3 -= 4;
				if(vill_y3 <= 0){
					tope3 = 0;
					vill_y3 +=4;
				}
			}
			
			if(tope3 == 0){ //cuando el enemigo este el limite superior
				if (vill_y3 < 0){
					vill_y3 = 0;
				}
				vill_y3 +=4;
				if(vill_y3 >= 548){
					tope3 = 1;
					vill_y3 -=4;
				}
			}
		}

		$("#villano3").css({ "top": vill_y3 + "px"});
		$("#villano3").css({ "left": vill_x3 + "px"});
		$("#villano3").css({ "width": 50 + "px"});
		$("#villano3").css({ "height": 50 + "px"});
		});
		
		$('body').keypress(function(e){	
		if(e.which == 97 || e.which ==100 || e.which==119 || e.which==115){
			if (vill_y4 > 548) vill_y4 = 548;
			if (vill_y4 < 0) vill_y4 = 0;			
			if(tope4 == 1){ //cuando el enemigo este en el limite derecho
				if (vill_x4 > 748){ 
					vill_x4 = 748;
				}
				vill_x4 -= 4;
				if(vill_x4 <= 0){
					tope4 = 0;
					vill_x4 +=4;
				}
			}
			
			if(tope4 == 0){ //cuando el enemigo este el limite izquierdo
				if (vill_x4 < 0){
					vill_x4 = 0;
				}
				vill_x4 +=4;
				if(vill_x4 >= 748){
					tope4 = 1;
					vill_x4 -=4;
				}
			}
		}

		$("#villano4").css({ "top": vill_y4 + "px"});
		$("#villano4").css({ "left": vill_x4 + "px"});
		$("#villano4").css({ "width": 50 + "px"});
		$("#villano4").css({ "height": 50 + "px"});
		});
		
	}
	

});