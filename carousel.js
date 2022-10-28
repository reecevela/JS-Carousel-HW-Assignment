"use strict";

$(document).ready( () => {
	
	const slider = $("#image_list");                     // slider = ul element
	let leftProperty = 0;
	let newLeftProperty = 0;
		
	// the click event handler for the right button						
	$("#right_button").click( () => { 
		// get value of current left property
		leftProperty = parseInt(slider.css("left"));
		
		// determine new value of left property
		if (leftProperty - 300 <= -900) {
			newLeftProperty = 0; }
		else {
			newLeftProperty = leftProperty - 300; 
		}
		
		// use the animate function to change the left property
		slider.animate( {left: newLeftProperty}, 1000);
	});  // end click
	
	// the click event handler for the left button
	$("#left_button").click( () => {
		// get value of current right property
		leftProperty = parseInt(slider.css("left"));
		
		// determine new value of left property
		if (leftProperty < 0) {
			newLeftProperty = leftProperty + 300;
		} else {
			newLeftProperty = 0;
		}
		
		// use the animate function to change the left property
		slider.animate( {left: newLeftProperty}, 1000);				
	});  // end click


	let transitioning = false;
	$('a').click( (evt) => {
		if (!transitioning) {
			transitioning = true;
			const link = evt.currentTarget;
			const img = $('#image');
			
			img.animate(
				{opacity: 0, marginLeft: '-215px'},
				1000,
				() => {
					img.attr('src', $(link).attr('href'));
					img.attr('alt', $(link).children(':first').attr('alt'));
					img.animate(
						{opacity: 1, marginLeft: '105px'},
						1000,
						() => {
							transitioning = false;
						}); //end 2nd animation
				}); //end animation callback
		} //end if transitioning
		evt.preventDefault();
	}); //end a click
	
}); // end ready