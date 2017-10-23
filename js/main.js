//Use the ```$.ready()``` handler to delay your code from executing until all DOM assets have been loaded	
$(document).ready(function() {
	
	//If a user clicks "Read More" on the primary column:
	//Select the appropriate DOM elements with CSS selectors upon a user's click using the ```$.click()``` handler
	$(".readmore").on("click", function(){
		// - have the text in the ```<p>``` tag slide down along with a "Read Less" link in the blog post using  ```$.slideDown()``` and ```$.show()```
		$("#show-this-on-click").slideDown();
		//- hide the "Read More" link using ```$.hide()```
		$(".readmore").hide();
		$(".readless").show();
		event.preventDefault(); //Prevent a form submission with the ```event.preventDefault()``` function
	});
	
	//- If a user clicks "Read Less" on the primary column:
	//Select the appropriate DOM elements with CSS selectors upon a user's click using the ```$.click()``` handler
	$(".readless").on("click", function(){
		//- have the ```<p>``` slide up and hide the "Read Less" link using  ```$.slideUp()``` and ```$.hide()```
		$("#show-this-on-click").slideUp();
		$(".readless").hide();
		//- show the "Read More" link using ```$.show()```
		$(".readmore").show();
		event.preventDefault(); //Prevent a form submission with the ```event.preventDefault()``` function
	});
	
	//Select the appropriate DOM elements with CSS selectors upon a user's click using the ```$.click()``` handler
	$(".learnmore").on("click", function(){ 
		//if a user clicks the "Learn More" link in the sidebar, have the ```<span>``` inside that ```<p>``` slide down 
		$("#learnmoretext").slideDown();
		//hide the "Learn More" link using ```$.slideDown()``` and ```$.hide()```
		$(".learnmore").hide();
		event.preventDefault(); //Prevent a form submission with the ```event.preventDefault()``` function
	});
});



