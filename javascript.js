
(function (window, document, undefined) {

	'use strict';

	function showError (elementId, text) {
		var element = document.getElementById(elementId);
		if (text && text !== ''){
			element.innerHTML = text;
			element.style.display = 'block';
		} else {
			element.style.display = 'none';
		}
	}

	function validateForm(){
		var name = document.formSection.user_name.value,
		email = document.formSection.user_email.value,
		tel = document.formSection.urstel.value,
		textarea = document.getElementById('msg').value,
		emailRegEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		var errorCount = 0;
		// empty the error divs
	   //Namefield to 25 characters
	   
		if(!name){
			errorCount++;
			showError('error-name', 'Please enter name');	
		}else{
			showError('error-name');
		}
		
		//Email validation, limited to 25 characters		
		if (!email){
			errorCount++;
			showError('error-email', 'Please enter an email');
		} else if (!emailRegEx.test(email)) {
			errorCount++;
			showError('error-email', 'Please enter a valid email');
		}else{
			showError('error-email');
		}

		//Tele input field allows 25 characters	
		if(tel.length > 25){
			errorCount++;
			showError('error-tel', 'Please enter number less than 25');;		
		}
		//Message limited to 200 characters	
		if (textarea === '' || textarea.length > 200){
			errorCount++;
			showError('error-msg', 'Please enter message with in 200 ');	
		}else{
			showError('error-msg');
		}
	
		return(errorCount === 0);

	}
	document.getElementById("formSubmit").addEventListener("click", function() {
		console.log('focus');
		validateForm();

	});
	
	var form_tag = document.getElementsByClassName('errorcheck');


	for (var i = 0; i < form_tag.length; i++) {

		form_tag[i].addEventListener('keyup', function () {
		console.log('forloop');
		validateForm();
		})
	}

})(window, document);