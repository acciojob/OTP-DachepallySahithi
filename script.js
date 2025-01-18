document.querySelectorAll('.code').forEach((input, index, inputs) => {
    input.addEventListener('input', () => {
        if (input.value) {
            const nextInput = inputs[index + 1];
            if (nextInput) nextInput.focus();
        }
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && !input.value && index > 0) {
            const prevInput = inputs[index - 1];
            if (prevInput) prevInput.focus();
        }
    });
});

document.querySelector('.code').focus();
