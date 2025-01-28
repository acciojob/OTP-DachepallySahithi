const otpFields = document.querySelectorAll('.code');

otpFields.forEach((input, index) => {
    input.addEventListener('input', () => {
        if (input.value && index < otpFields.length - 1) {
            otpFields[index + 1].focus();
        }
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && index > 0) {
            input.value = '';
            otpFields[index - 1].focus();
        }
    });
});