const codeInputs = document.querySelectorAll('.code');

codeInputs.forEach((input, index) => {
    input.addEventListener('input', (event) => {
        const inputValue = event.target.value;
        if (inputValue.length === 1) {
            if (index < codeInputs.length - 1) {
                codeInputs[index + 1].focus();
            } else {
                // Optional: Handle case where all digits are filled.
                console.log("All OTP digits entered!");
                // You might want to trigger verification here.
            }
        }
    });

    input.addEventListener('keydown', (event) => {
        if (event.key === 'Backspace') {
            if (input.value === '') {
                if (index > 0) {
                    codeInputs[index - 1].focus();
                }
            }
        }
    });

    // Add event listener for paste
    input.addEventListener('paste', (event) => {
        let pasteData = event.clipboardData.getData('text');

        // Stop default paste action
        event.preventDefault();

        // Sanitize paste data to only allow numbers
        pasteData = pasteData.replace(/[^0-9]/g, '');

        // Distribute pasted digits to input fields
        for (let i = 0; i < Math.min(pasteData.length, codeInputs.length - index); i++) {
            codeInputs[index + i].value = pasteData[i];
            if (index + i < codeInputs.length - 1) {
                codeInputs[index + i + 1].focus();
            }
        }
    });
});


codeInputs[0].focus();