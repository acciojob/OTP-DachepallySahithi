//your JS code here. If required.
const codeInputs = document.querySelectorAll('.code');
codeInputs.forEach((input, index) =>{
	input.addElementListener('input', (event) =>{
		const value = event.target.value;

		if(value && index < codeInputs.length-1){
			codeInputs[index+1].focus();
		}
	});
	input.addEventListener('keydown', (event)=>{
		if(event.key === 'Backspace' && index > 0){
			event.target.value ='';
			codeInputs[index-1].focus();
		}
	});
});