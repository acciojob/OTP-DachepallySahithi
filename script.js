//your JS code here. If required.
function moveFocus(currentInput, event){
	if (event.key!== "Backspace" && currentInput.value!== ""){
		const nextInput = currentInput.nextElementSibling;
		if(nextInput){
			nextInput.focus();
		}
	} 
	if (event.key === "Backspace" && currentInput.value === "") {
        const previousInput = currentInput.previousElementSibling;
        if (previousInput) {
            previousInput.focus();
        }
    }
}