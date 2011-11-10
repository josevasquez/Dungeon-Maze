var seleccion=false;

$(document).ready(function() {
		$('#infoGuerrero').hide();
		$('#infoClerigo').hide();
		$('#infoValkiria').hide();
		$("#contenedor").css({'background-image':'url(fondoInicio.jpg)'});
	function default1(){
		$("#Guerrero").css({'border': '2px solid black'});
		$("#Clérigo").css({'border': '2px solid black'});
		$("#Valkiria").css({'border': '2px solid black'});
		$("body").css({'background-repeat': 'no-repeat'});
		$("body").css({'background-position': 'center'});
		$("body").css({'background-color': 'black'});
		$("body").css({'background-image': 'none'});
		$('.namePersonajes').css({'color':'white'});
		seleccion = false;
	}

    $('.personaje a img').hover(function() {
            // hover in
            $(this).animate({height: "350",width: "250"}, "slow");
			$('#botonElegir').css({'margin-top':'80px'});
    }, 
	function() {
    // hover out
	$(this).animate({height: "267",width: "189"}, "fast");
        });
	
	function seleccionado(personaje_id){
		$(personaje_id).css({'border':'red 2px solid'});	
	}
	
	$("#Guerrero").click(function() {
		if(seleccion == false){
			default1();
			seleccionado("#Guerrero")
			$("#contenedor").css({'background-image':'url(GuerreroFondo.jpg)'});
			$("#contenedor").css({'background-repeat': 'no-repeat'});
			$('#infoGuerrero').show();
			$('#infoClerigo').hide();
			$('#infoValkiria').hide();
			$('#Guerrero h2').css({'color':'pink'});
			seleccion = true;
		}
		else{
			default1();
			seleccionado("#Guerrero");
			seleccion = false;
			$("#contenedor").css({'background-image':'url(GuerreroFondo.jpg)'});
			$("#contenedor").css({'background-repeat': 'no-repeat'});
			$('#infoGuerrero').show();
			$('#infoClerigo').hide();
			$('#infoValkiria').hide();
			$('#Guerrero h2').css({'color':'pink'});
		}
	});
	
	$("#Clérigo").click(function() {
		if(seleccion == false){
			default1();
			seleccionado("#Clérigo");
			seleccion = true;
			$("#contenedor").css({'background-image':'url(ClerigoFondo.jpg)'});
			$("#contenedor").css({'background-repeat': 'no-repeat'});
			$('#infoClerigo').show();
			$('#infoGuerrero').hide();
			$('#infoValkiria').hide();
			$('#Clérigo h2').css({'color':'pink'});
		}
		
		else{
			default1();
			seleccionado("#Clérigo");
			seleccion = false;
			$("#contenedor").css({'background-image':'url(ClerigoFondo.jpg)'});
			$("#contenedor").css({'background-repeat': 'no-repeat'});
			$('#infoClerigo').show();
			$('#infoGuerrero').hide();
			$('#infoValkiria').hide();
			$('#Clérigo h2').css({'color':'pink'});
		}
	});
	
	$("#Valkiria").click(function() {
		if(seleccion == false){
			default1();
			seleccionado("#Valkiria");
			seleccion = true;
			$("#contenedor").css({'background-image':'url(ValkiriaFondo.jpg)'});
			$("#contenedor").css({'background-repeat': 'no-repeat'});
			$('#infoValkiria').show();
			$('#infoClerigo').hide();
			$('#infoGuerrero').hide();
			$('#Valkiria h2').css({'color':'pink'});
		}
		
		else{
			default1();
			seleccionado("#Valkiria");
			seleccion = false;
			$("#contenedor").css({'background-image':'url(ValkiriaFondo.jpg)'});
			$("#contenedor").css({'background-repeat': 'no-repeat'});
			$('#infoValkiria').show();
			$('#infoClerigo').hide();
			$('#infoGuerrero').hide();
			$('#Valkiria h2').css({'color':'pink'});
		}
	});

});