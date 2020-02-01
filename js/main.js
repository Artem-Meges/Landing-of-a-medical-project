$(function(){

	$('.header-slider').slick({

	});


	$('.header-menu__toggle').on('click', function(){	
		$('.header-menu').slideToggle(); 	
	});

	$('.datepicker-here').datepicker({
    	clearButton: true,
    	autoClose: true
	});

	$('.form__timepicker').timepicker({
		timeFormat: 'H:mm',
    	minTime: '08:00',
    	maxTime: '22:00',
    	interval: 60   		
	});

	$('.form__select').select2({
    	placeholder: "Имя Врача"   	
    });

});


