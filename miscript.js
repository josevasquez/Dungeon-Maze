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
	$('#botonEntrar').click(function guardarNombre()
	{
		var nombre = $('#nombreText').value();
		window.alert("tu eres"+nombre);
	});
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
			$("#contenedor").css({'background-image':'url(guerreroF.jpg)'});
			$("#contenedor").css({'background-repeat': 'no-repeat'});
			$('#infoGuerrero').show();
			$('#infoClerigo').hide();
			$('#infoValkiria').hide();
			$('#Guerrero h2').css({'color':'pink'});
			seleccion = true;
		}
		else{
			default1();
			seleccionadoP("#Guerrero");
			seleccion = false;
			$("#contenedor").css({'background-image':'url(guerreroF.jpg)'});
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
			$("#contenedor").css({'background-image':'url(clerigoF.jpg)'});
			$("#contenedor").css({'background-repeat': 'no-repeat'});
			$('#infoClerigo').show();
			$('#infoGuerrero').hide();
			$('#infoValkiria').hide();
			$('#Clérigo h2').css({'color':'pink'});
		}
		
		else{
			default1();
			seleccionadoP("#Clérigo");
			seleccion = false;
			$("#contenedor").css({'background-image':'url(clerigoF.jpg)'});
			$("#contenedor").css({'background-repeat': 'no-repeat'});
			$('#infoClerigo').show();
			$('#infoGuerrero').hide();
			$('#infoValkiria').hide();
			$('#Clérigo h2').css({'color':'pink'});
		}
	});
	//------------------------------//
	$("#Valkiria").click(function() {
		if(seleccion == false){
			default1();
			seleccionadoP("#Valkiria");
			seleccion = true;
			$("#contenedor").css({'background-image':'url(valkiriaF.jpg)'});
			$("#contenedor").css({'background-repeat': 'no-repeat'});
			$('#infoValkiria').show();
			$('#infoClerigo').hide();
			$('#infoGuerrero').hide();
			$('#Valkiria h2').css({'color':'pink'});	
		}
		
		else{
			default1();
			seleccionadoP("Valkiria");
			seleccion = false;
			$("#contenedor").css({'background-image':'url(valkiriaF.jpg)'});
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
			$("#contenedor").css({'background-image':'url(habitacion1.jpg)'});
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
			$("#contenedor").css({'background-image':'url(habitacion1.jpg)'});
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
			$("#contenedor").css({'background-image':'url(habitacion2.jpg)'});
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
			$("#contenedor").css({'background-image':'url(habitacion2.jpg)'});
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
			$("#contenedor").css({'background-image':'url(habitacion3.jpg)'});
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
			$("#contenedor").css({'background-image':'url(habitacion3.jpg)'});
			$("#contenedor").css({'background-repeat': 'no-repeat'});
			$('#infoHabitacion3').show();
			$('#infoHabitacion2').hide();
			$('#infoHabitacion1').hide();
			$('#Habitacion3 h2').css({'color':'pink'});
		}
	});
	

});