var seleccion=false;

$(document).ready(function() {
	function default1(){
	$("#Guerrero").css({'border': '2px solid black'});
		$("#Cl�rigo").css({'border': '2px solid black'});
		$("#Valkiria").css({'border': '2px solid black'});
		$("body").css({'background-repeat': 'no-repeat'});
		$("body").css({'background-position': 'center'});
		$("body").css({'background-color': 'black'});
		$("body").css({'background-image': 'none'});
		seleccion = false;
	}
	
	function seleccionado(personaje_id){
		$(personaje_id).css({'border':'red 2px solid'});
		
	}
	
	$("#Guerrero").click(function() {
		if(seleccion == false){
			default1();
			seleccionado("#Guerrero");
			seleccion = true;
			$("#informacion").text('Ataque:10'+' Defensa: 14'+'Da�o: 15'+'Vida:100');
		}
		else{
			default1();
			
		}
	});
	
	$("#Cl�rigo").click(function() {
		if(seleccion == false){
			default1();
			seleccionado("#Cl�rigo");
			seleccion = true;
			$("#informacion").text('Ataque:5'+' Defensa: 16'+'Da�o:5'+'Vida:150');
		}
		
		else{
			default1();
		}
	});
	
	$("#Valkiria").click(function() {
		if(seleccion == false){
			default1();
			seleccionado("#Valkiria");
			seleccion = true;
			$("#informacion").text('Ataque:10'+' Defensa: 12'+'Da�o: 20'+'Vida:50');
		}
		
		else{
			default1();
		}
	});

});